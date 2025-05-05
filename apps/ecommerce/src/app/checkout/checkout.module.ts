import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import { OrderModule } from '../order/order.module';
import { OrdersService } from '../order/order.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [OrderModule],
  controllers: [CheckoutController],
  providers: [CheckoutService, OrdersService, PrismaService],
})
export class CheckoutModule {}
