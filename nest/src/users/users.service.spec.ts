import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from '../order/order.service';
import { PrismaService } from '../prisma/prisma.service'; // adjust path

describe('OrdersService', () => {
  let service: OrdersService;

  // Create a fake PrismaService
  const mockPrisma = {
    order: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: PrismaService,
          useValue: mockPrisma,
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
