import { Module } from '@nestjs/common';
import { OrdersService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrdersResolver } from './orders.resolver';

@Module({
  controllers: [OrderController],
  providers: [OrdersService, OrdersResolver, PrismaService],
})
export class OrderModule {}
