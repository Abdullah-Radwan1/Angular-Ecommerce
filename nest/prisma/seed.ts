import { db } from './db';

async function main() {
  console.log('Seeding products...');

  const products = [
    {
      id: 'cm84perfume00001',
      name: '1 Million by Paco Rabanne',
      description:
        'A bold and luxurious fragrance with notes of blood mandarin, cinnamon, and leather. Perfect for making a statement.',
      image: '/perfumes/1_million.png',
      price: 120,
    },
    {
      id: 'cm84perfume00002',
      name: 'Amouage Interlude',
      description:
        'An opulent oriental fragrance with smoky incense, amber, and spicy undertones. A signature scent of sophistication.',
      image: '/perfumes/amouage.png',
      price: 250,
    },
    {
      id: 'cm84perfume00003',
      name: 'Angel by Mugler',
      description:
        'An iconic gourmand fragrance with sweet notes of caramel, chocolate, and patchouli. Timeless and irresistible.',
      image: '/perfumes/angel.png',
      price: 150,
    },
    {
      id: 'cm84perfume00004',
      name: 'Hugo Boss Black',
      description:
        'A refined masculine scent blending citrus, spices, and woody accords. Elegant for both day and night wear.',
      image: '/perfumes/black_boss.png',
      price: 110,
    },
    {
      id: 'cm84perfume00005',
      name: 'YSL Black Opium',
      description:
        'A seductive, modern fragrance featuring coffee, vanilla, and white flowers. Perfect for evenings out.',
      image: '/perfumes/black_opium.png',
      price: 130,
    },
    {
      id: 'cm84perfume00006',
      name: 'Hugo Boss Blue',
      description:
        'Fresh and vibrant with marine accords, citrus, and sandalwood. A daily scent for confidence and energy.',
      image: '/perfumes/blue_boss.png',
      price: 100,
    },
    {
      id: 'cm84perfume00007',
      name: 'Chanel Coco Noir',
      description:
        'An elegant and mysterious fragrance with bergamot, rose, and sandalwood. The essence of modern femininity.',
      image: '/perfumes/coco_noir_chanel.png',
      price: 200,
    },
    {
      id: 'cm84perfume00008',
      name: 'Hugo Boss Gold',
      description:
        'A luxurious fragrance with warm woody notes and a touch of spicy elegance. Designed for men with ambition.',
      image: '/perfumes/gold_boss.png',
      price: 115,
    },
    {
      id: 'cm84perfume00009',
      name: 'Hugo Boss Gray',
      description:
        'A versatile everyday fragrance with citrus, herbs, and a woody base. A subtle yet impactful scent.',
      image: '/perfumes/gray_boss.png',
      price: 95,
    },
    {
      id: 'cm84perfume00010',
      name: 'Valentino Uomo',
      description:
        'A sophisticated fragrance blending roasted coffee, chocolate, and leather. Bold and charismatic.',
      image: '/perfumes/valentino.png',
      price: 160,
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
