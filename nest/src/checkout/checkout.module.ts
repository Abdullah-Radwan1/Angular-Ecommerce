import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import { OrderModule } from 'src/order/order.module';
import { OrderService } from 'src/order/order.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [OrderModule],
  controllers: [CheckoutController],
  providers: [CheckoutService, OrderService, PrismaService],
})
export class CheckoutModule {}
