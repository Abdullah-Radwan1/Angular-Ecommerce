import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // 👈 important!
      sortSchema: true, // optional, makes schema output consistent
    }),
    AuthModule,
    UsersModule,
    OrderModule,
    PrismaModule,
    ProductsModule, // 👈 make sure ProductModule is imported
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
