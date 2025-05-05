import { Controller, Post, Body } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  async create(@Body() createCheckoutDto: CreateCheckoutDto) {
    const session = await this.checkoutService.create(createCheckoutDto);
    if (!session) {
      throw new Error('Session creation failed');
    }
    return {
      url: session.url,
    };
  }
}
