import { db } from './db';
import { Category } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

async function main() {
  console.log('Seeding products...');

  const products = [
    {
      id: uuidv4(),
      name: 'Basket',
      description:
        'A durable and beautifully crafted basket perfect for storage or decorative purposes. Made from high-quality eco-friendly materials that are both sustainable and long-lasting, this versatile piece adds natural warmth to any room while providing practical storage solutions for your everyday needs and organizing essentials in style.',
      image: '/products/basket.jpg',
      price: 50,
      Category: Category.ACCESSORIES,
    },
    {
      id: uuidv4(),
      name: 'Black Chair',
      description:
        'Elegant black chair designed for both comfort and modern aesthetics, featuring premium upholstery and sturdy construction. The ergonomic design provides excellent back support for extended sitting periods, making it perfect for dining rooms, home offices, or living spaces where style meets functionality and everyday comfort is a priority for modern homeowners.',
      image: '/products/black-chair.jpg',
      price: 120,
      Category: Category.CHAIRS,
    },
    {
      id: uuidv4(),
      name: 'Black Clock',
      description:
        'Minimalist black clock featuring a sleek design that enhances any home or office decor with its sophisticated appearance. The silent quartz movement ensures accurate timekeeping without disturbing noise, while the large easy-to-read numerals make it practical for daily use in various rooms including living spaces, bedrooms, and modern workspace environments.',
      image: '/products/black-clock.jpg',
      price: 70,
      Category: Category.CLOCKS,
    },
    {
      id: uuidv4(),
      name: 'Cup',
      description:
        'Beautiful ceramic cup suitable for both hot and cold beverages, featuring a comfortable handle and elegant finish. Crafted from high-quality materials that are dishwasher and microwave safe, this versatile cup is perfect for morning coffee, afternoon tea, or any beverage throughout your day while adding a touch of sophistication.',
      image: '/products/cup.jpg',
      price: 15,
      Category: Category.ACCESSORIES,
    },
    {
      id: uuidv4(),
      name: 'Dark Lamp',
      description:
        'Stylish dark-colored lamp that creates a warm and inviting ambience in any room with its soft, diffused lighting. Featuring an adjustable head for directional lighting and energy-efficient LED compatibility, this lamp is perfect for reading corners, bedside tables, or living room accents where both functionality and aesthetic appeal matter.',
      image: '/products/dark-lamp.jpg',
      price: 80,
      Category: Category.LAMPS,
    },
    {
      id: uuidv4(),
      name: 'Drawer',
      description:
        'Compact and functional drawer unit designed for optimal organization of your essentials and personal belongings. Constructed from durable materials with smooth-gliding drawers and secure handles, this versatile storage solution fits perfectly in bedrooms, entryways, or offices while maintaining a clean and modern aesthetic that complements various decor styles.',
      image: '/products/drawer.jpg',
      price: 150,
      Category: Category.TABLES,
    },
    {
      id: uuidv4(),
      name: 'Golden Clock',
      description:
        'Luxury golden clock that adds a significant touch of elegance and sophistication to any living or workspace. Featuring precision quartz movement and exquisite detailing, this statement piece serves as both a functional timepiece and decorative element that elevates your interior design while providing reliable timekeeping for your daily routine.',
      image: '/products/golden-clock.jpg',
      price: 200,
      Category: Category.CLOCKS,
    },
    {
      id: uuidv4(),
      name: 'Gray Chair',
      description:
        'Comfortable gray chair expertly designed to provide both exceptional style and superior back support for extended use. Upholstered in premium fabric that is both durable and easy to clean, this versatile chair works beautifully in dining areas, home offices, or as accent seating in living spaces where comfort meets contemporary design.',
      image: '/products/gray-chair.jpg',
      price: 130,
      Category: Category.CHAIRS,
    },
    {
      id: uuidv4(),
      name: 'Grey Clock',
      description:
        'Modern grey clock featuring a sleek and contemporary design that complements various interior styles from minimalist to industrial. With its silent sweeping movement and clear numeral display, this functional timepiece is perfect for living rooms, kitchens, or office spaces where you need reliable timekeeping without compromising on aesthetic appeal.',
      image: '/products/grey-clock.jpg',
      price: 75,
      Category: Category.CLOCKS,
    },
    {
      id: uuidv4(),
      name: 'White Chair',
      description:
        'Sleek and modern white chair designed for both dining areas and contemporary workspaces with its clean lines and comfortable seating. Built with a sturdy frame and premium materials that are easy to maintain, this versatile chair brings brightness and elegance to any room while providing comfortable seating for various activities.',
      image: '/products/white-chair.jpg',
      price: 140,
      Category: Category.CHAIRS,
    },
    {
      id: uuidv4(),
      name: 'Wooden Table',
      description:
        'Sturdy wooden table featuring a beautiful natural finish that showcases the wood grain and adds warmth to any space. Perfect for living rooms, dining areas, or home offices, this versatile table provides ample surface area for various activities while its durable construction ensures long-lasting use and timeless appeal.',
      image: '/products/wooden-table.jpg',
      price: 300,
      Category: Category.TABLES,
    },
    {
      id: uuidv4(),
      name: 'Lamp',
      description:
        'Minimalist lamp designed to provide soft, ambient lighting that creates a cozy atmosphere in bedrooms, living rooms, or offices. Featuring an adjustable neck for customized lighting direction and energy-efficient compatibility, this practical yet stylish lamp enhances your space while providing the perfect illumination for reading or relaxing.',
      image: '/products/lamp.jpg',
      price: 90,
      Category: Category.LAMPS,
    },
    {
      id: uuidv4(),
      name: 'Table',
      description:
        'Elegant and versatile table suitable for various purposes including work surfaces, dining areas, or decorative displays in your home. Crafted from high-quality materials with a refined finish, this functional piece provides ample space for your needs while adding a touch of sophistication to any room decor.',
      image: '/products/table.jpg',
      price: 250,
      Category: Category.TABLES,
    },
    {
      id: uuidv4(),
      name: 'Teapot',
      description:
        'Beautiful ceramic teapot designed specifically for tea enthusiasts who appreciate both form and function in their tea brewing experience. Featuring an ergonomic handle and precision pour spout, this teapot maintains optimal temperature for your favorite teas while serving as an elegant centerpiece for your kitchen or dining table.',
      image: '/products/teapot.jpg',
      price: 60,
      Category: Category.ACCESSORIES,
    },
    {
      id: uuidv4(),
      name: 'Vase',
      description:
        'Decorative vase that beautifully enhances your home decor whether used with fresh flowers, dried arrangements, or as a standalone piece. Crafted from high-quality materials with a timeless design, this versatile vase adds elegance to any room including living spaces, dining areas, or entryways while complementing various interior styles.',
      image: '/products/vase.jpg',
      price: 70,
      Category: Category.ACCESSORIES,
    },
  ];

  for (const product of products) {
    await db.product.upsert({
      where: { id: product.id },
      update: {},
      create: product,
    });
  }

  console.log('Products seeded.');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
