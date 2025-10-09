import { db } from './db';
import { Category } from '@prisma/client';

async function main() {
  console.log('Seeding products...');

  const products = [
    {
      id: 'cm84perfume00001',
      name: '1 Million by Paco Rabanne',
      description:
        'A bold and luxurious fragrance blending notes of blood mandarin, cinnamon, and leather. Designed for confident men who appreciate timeless elegance with a modern edge. Perfect for both day and evening wear, leaving a lasting impression.',
      image: '/products/1_million.png',
      price: 120,
      isFeatured: true,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00002',
      name: 'Amouage Reflection Man',
      description:
        'An exquisite fragrance that combines the freshness of rosemary and orange blossom with warm woody undertones. Reflection Man embodies sophistication and calm power, making it ideal for formal occasions or intimate evenings.',
      image: '/products/amouage.png',
      price: 260,
      isFeatured: false,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00003',
      name: 'Axe Dark Temptation',
      description:
        'A seductive scent infused with hints of hot chocolate, amber, and red peppercorn. Axe Dark Temptation offers a sweet yet masculine aroma, making it perfect for daily use and leaving a memorable trace wherever you go.',
      image: '/products/axe-dark-temptation.png',
      price: 25,
      isFeatured: false,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00004',
      name: 'Coco Noir by Chanel',
      description:
        'An iconic fragrance that captures the mystery and sensuality of the night. Coco Noir combines rich floral notes with patchouli and sandalwood to deliver an unforgettable aura of elegance and strength.',
      image: '/products/coco_noir_chanel.png',
      price: 320,
      isFeatured: true,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00005',
      name: 'Fog Body Spray',
      description:
        'A refreshing and long-lasting body spray that keeps you energized throughout the day. Featuring a blend of crisp citrus and woody notes, Fog is perfect for anyone who values freshness and confidence in every moment.',
      image: '/products/fog.png',
      price: 18,
      isFeatured: false,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84hoodie00001',
      name: 'Classic Red Hoodie',
      description:
        'A stylish and comfortable hoodie crafted from high-quality cotton and polyester blend. Its classic design ensures versatility for everyday wear, keeping you warm and trendy whether at the gym or outdoors.',
      image: '/products/classic_hoody.png',
      price: 60,
      isFeatured: false,
      Category: Category.HOODIES,
    },
    {
      id: 'cm84hoodie00002',
      name: 'Nature Tie-Dye Hoodie',
      description:
        'Bring color to your wardrobe with this vibrant tie-dye hoodie inspired by nature. Made from soft, breathable fabric, it offers both comfort and personality — perfect for casual outings and cool evenings.',
      image: '/products/nature_hoody.png',
      price: 70,
      isFeatured: false,
      Category: Category.HOODIES,
    },
    {
      id: 'cm84electro00001',
      name: 'Beats Wireless Headphones',
      description:
        'Experience deep bass and crystal-clear sound with these wireless over-ear headphones. Designed for comfort and style, they feature long battery life, seamless Bluetooth connectivity, and immersive sound for music lovers.',
      image: '/products/headphone.png',
      price: 220,
      isFeatured: true,
      Category: Category.ELECTRONICS,
    },
    {
      id: 'cm84electro00002',
      name: 'Gold Edition Headphones',
      description:
        'A premium gold-finished headphone that delivers both luxury and powerful performance. Designed with noise isolation and comfort in mind, it’s ideal for professionals and audiophiles seeking superior sound quality.',
      image: '/products/headphone2.png',
      price: 260,
      isFeatured: false,
      Category: Category.ELECTRONICS,
    },
    {
      id: 'cm84electro00003',
      name: 'Gaming Mouse Pro',
      description:
        'A high-precision gaming mouse with adjustable DPI, customizable lighting, and ergonomic design. Built for performance and speed, it ensures seamless control during intense gaming sessions.',
      image: '/products/mouse.png',
      price: 55,
      isFeatured: false,
      Category: Category.ELECTRONICS,
    },
    {
      id: 'cm84electro00004',
      name: 'MacBook Pro M2',
      description:
        'Apple’s latest MacBook Pro delivers incredible performance with the M2 chip, Retina display, and long-lasting battery life. Designed for creators, developers, and professionals who demand power and precision.',
      image: '/products/macbook.png',
      price: 2200,
      isFeatured: true,
      Category: Category.ELECTRONICS,
    },
    {
      id: 'cm84electro00005',
      name: 'Gaming Laptop Ultra',
      description:
        'A sleek and powerful gaming laptop equipped with the latest GPU and cooling technology. Perfect for gamers and developers who need reliable performance for demanding workloads and immersive gaming experiences.',
      image: '/products/labtop.png',
      price: 1800,
      isFeatured: false,
      Category: Category.ELECTRONICS,
    },
    {
      id: 'cm84electro00006',
      name: 'Business Laptop X2',
      description:
        'A lightweight yet powerful laptop built for productivity. With a fast SSD, long battery life, and sleek design, it’s ideal for students and professionals who value efficiency and style.',
      image: '/products/labtop2.png',
      price: 950,
      isFeatured: false,
      Category: Category.ELECTRONICS,
    },
    {
      id: 'cm84sneaker00001',
      name: 'AirMax Red Edition',
      description:
        'These stylish red sneakers combine comfort and performance with a breathable mesh design and cushioned soles. Perfect for sports, workouts, or casual outings with a bold, modern look.',
      image: '/products/sneaker.png',
      price: 130,
      isFeatured: false,
      Category: Category.SNEAKERS,
    },
    {
      id: 'cm84sneaker00002',
      name: 'AirRunner White Sneaker',
      description:
        'A clean and minimalist sneaker made for comfort and durability. The soft inner padding and flexible rubber sole make it an excellent choice for everyday wear and light sports activities.',
      image: '/products/sneaker2.png',
      price: 110,
      isFeatured: false,
      Category: Category.SNEAKERS,
    },
    {
      id: 'cm84sneaker00003',
      name: 'Neon Strike Sneakers',
      description:
        'Bright and bold, these neon sneakers make a statement with every step. Built with shock-absorbent technology, they’re perfect for running, training, or adding a splash of color to your outfit.',
      image: '/products/sneaker3.png',
      price: 150,
      isFeatured: false,
      Category: Category.SNEAKERS,
    },
    {
      id: 'cm84sneaker00004',
      name: 'Urban Gray Sneakers',
      description:
        'Sleek and versatile, these gray sneakers are designed to complement any outfit. Lightweight and breathable, they offer comfort throughout the day while maintaining a trendy urban aesthetic.',
      image: '/products/sneaker6.png',
      price: 120,
      isFeatured: false,
      Category: Category.SNEAKERS,
    },
    {
      id: 'cm84access00001',
      name: 'Smart Watch Series 8',
      description:
        'A next-gen smartwatch with health tracking, notifications, and sleek design. Featuring advanced sensors, customizable faces, and all-day battery life, it’s perfect for staying connected and active.',
      image: '/products/watch.png',
      price: 400,
      isFeatured: true,
      Category: Category.ACCESSORIES,
    },
    {
      id: 'cm84access00002',
      name: 'Smart Watch Classic',
      description:
        'Combining elegance with functionality, this smartwatch offers fitness tracking, message alerts, and water resistance. Perfect for those who value a balance between technology and timeless design.',
      image: '/products/watch2.png',
      price: 350,
      isFeatured: false,
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
