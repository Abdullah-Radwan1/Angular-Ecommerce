import { Module } from '@nestjs/common';
import { OrdersService } from './order.service';
import { OrderResolver } from './order.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [OrderResolver, OrdersService, PrismaService],
})
export class OrderModule {}
