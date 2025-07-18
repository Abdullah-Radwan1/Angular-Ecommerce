import { Injectable } from '@nestjs/common';
import { CreateCheckoutDto } from './dto/create-checkout.dto';

import { OrdersService } from '../order/order.service';
import { Stripe } from 'stripe';
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not found');
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
@Injectable()
export class CheckoutService {
  constructor(private readonly orderService: OrdersService) {}
  async createOrder(createCheckoutDto: CreateCheckoutDto) {
    const order = this.orderService.create({
      items: createCheckoutDto.items,
      totalAmount: createCheckoutDto.totalAmount,
      token: '123456',
    });
    const session = await stripe.checkout.sessions.create({
      line_items: createCheckoutDto.items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.FRONT_END_URL}/success?orderId=${
        (
          await order
        ).id
      }`,
      cancel_url: `${process.env.FRONT_END_URL}/cancel`,
    });
    return {
      url: session.url,
      sessionId: session.id,
      orderId: (await order).id,
    };
  }
}
