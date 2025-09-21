import { Injectable } from '@nestjs/common';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { Stripe } from 'stripe';
import { OrderService } from 'src/order/order.service';

const stripeSecret = process.env.STRIPE_SECRET;

if (!stripeSecret) {
  throw new Error('Missing stripe secret');
}

const stripe = new Stripe(stripeSecret);

@Injectable()
export class CheckoutService {
  constructor(private ordersService: OrderService) {}
  async create(createCheckoutDto: CreateCheckoutDto) {
    const order = await this.ordersService.create({
      items: createCheckoutDto.items,
      totalAmount: createCheckoutDto.totalAmount,
      status: 'PENDING',
    });

    const session = await stripe.checkout.sessions.create({
      line_items: createCheckoutDto.items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/checkout/success?orderId=${order.id}`,
      cancel_url: `${process.env.FRONTEND_URL}/checkout/cancel`,
      metadata: {
        orderId: order.id,
      },
    });

    return {
      url: session.url,
      sessionId: session.id,
      orderId: order.id,
    };
  }
}
