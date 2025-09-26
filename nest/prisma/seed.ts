import { db } from './db';
import { Category } from '@prisma/client';
async function main() {
  console.log('Seeding products...');

  const products = [
    // Perfumes
    {
      id: 'cm84perfume00001',
      name: '1 Million by Paco Rabanne',
      description:
        'A bold and luxurious fragrance with notes of blood mandarin, cinnamon, and leather. Perfect for making a statement.',
      image: '/perfumes/1_million.png',
      price: 120,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00002',
      name: 'Amouage Interlude',
      description:
        'An opulent oriental fragrance with smoky incense, amber, and spicy undertones. A signature scent of sophistication.',
      image: '/perfumes/amouage.png',
      price: 250,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00003',
      name: 'Angel by Mugler',
      description:
        'An iconic gourmand fragrance with sweet notes of caramel, chocolate, and patchouli. Timeless and irresistible.',
      image: '/perfumes/angel.png',
      price: 150,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00004',
      name: 'Hugo Boss Black',
      description:
        'A refined masculine scent blending citrus, spices, and woody accords. Elegant for both day and night wear.',
      image: '/perfumes/black_boss1.png',
      price: 110,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00005',
      name: 'YSL Black Opium',
      description:
        'A seductive, modern fragrance featuring coffee, vanilla, and white flowers. Perfect for evenings out.',
      image: '/perfumes/black_opium.png',
      price: 130,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00006',
      name: 'Hugo Boss Blue',
      description:
        'Fresh and vibrant with marine accords, citrus, and sandalwood. A daily scent for confidence and energy.',
      image: '/perfumes/blue_boss.png',
      price: 100,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00007',
      name: 'Chanel Coco Noir',
      description:
        'An elegant and mysterious fragrance with bergamot, rose, and sandalwood. The essence of modern femininity.',
      image: '/perfumes/coco_noir_chanel.png',
      price: 200,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00008',
      name: 'Hugo Boss Gold',
      description:
        'A luxurious fragrance with warm woody notes and a touch of spicy elegance. Designed for men with ambition.',
      image: '/perfumes/gold_boss.png',
      price: 115,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00009',
      name: 'Hugo Boss Gray',
      description:
        'A versatile everyday fragrance with citrus, herbs, and a woody base. A subtle yet impactful scent.',
      image: '/perfumes/gray_boss.png',
      price: 95,
      Category: Category.PERFUMES,
    },
    {
      id: 'cm84perfume00010',
      name: 'Valentino Uomo',
      description:
        'A sophisticated fragrance blending roasted coffee, chocolate, and leather. Bold and charismatic.',
      image: '/perfumes/valentino.png',
      price: 160,
      Category: Category.PERFUMES,
    },

    // Body sprays, deodorants, lotions
    {
      id: 'cm84spray00001',
      name: 'Axe Dark Temptation',
      description:
        'A rich chocolate-inspired fragrance with sweet and spicy notes. Irresistible and unique.',
      image: '/perfumes/axe-dark-temptation.png',
      price: 35,
      Category: Category.BODY_SPRAY,
    },
    {
      id: 'cm84spray00002',
      name: 'Axe Blue',
      description:
        'Cool and refreshing body spray with crisp oceanic vibes. Perfect for daily freshness.',
      image: '/perfumes/axe-blue.png',
      price: 30,
      Category: Category.BODY_SPRAY,
    },
    {
      id: 'cm84spray00003',
      name: 'Dove Deodorant',
      description:
        'Gentle protection with moisturizing cream. Keeps you fresh and soft all day.',
      image: '/perfumes/dove.png',
      price: 25,
      Category: Category.BODY_SPRAY,
    },
    {
      id: 'cm84spray00004',
      name: 'Rexona',
      description:
        'Reliable antiperspirant that provides long-lasting protection and freshness.',
      image: '/perfumes/rexona.png',
      price: 20,
      Category: Category.BODY_SPRAY,
    },
    {
      id: 'cm84spray00005',
      name: 'Ferrari Black',
      description:
        'Dynamic body spray with fresh, woody, and spicy notes. Inspired by speed and power.',
      image: '/perfumes/ferrari.png',
      price: 40,
      Category: Category.BODY_SPRAY,
    },
    {
      id: 'cm84spray00006',
      name: 'Fog Body Spray',
      description:
        'Strong and long-lasting fragrance designed for bold personalities.',
      image: '/perfumes/fog.png',
      price: 35,
      Category: Category.BODY_SPRAY,
    },
    {
      id: 'cm84lotion00001',
      name: 'Maraca Lotion',
      description:
        'Moisturizing lotion with a pleasant fragrance, keeping skin soft and hydrated.',
      image: '/perfumes/maraca-lotion.png',
      price: 50,
      Category: Category.BODY_SPRAY,
    },
    {
      id: 'cm84shampoo00001',
      name: 'Head & Shoulders',
      description:
        'Classic anti-dandruff shampoo with a refreshing scent. Cleanses and protects scalp health.',
      image: '/perfumes/head&shoulders.png',
      price: 18,
      Category: Category.BODY_SPRAY,
    },
    {
      id: 'cm84shampoo00002',
      name: 'Pantene',
      description:
        'Nourishing shampoo for smooth and healthy hair. Trusted by millions worldwide.',
      image: '/perfumes/pantene.png',
      price: 22,
      Category: Category.BODY_SPRAY,
    },
    {
      id: 'cm84shampoo00003',
      name: 'Pantene White',
      description: 'Special Pantene formula for deep hydration and silky hair.',
      image: '/perfumes/pantene-white.png',
      price: 24,
      Category: Category.BODY_SPRAY,
    },
    {
      id: 'cm84shampoo00004',
      name: 'Red Dove',
      description: 'Moisturizing and gentle formula with a soothing fragrance.',
      image: '/perfumes/reddove.png',
      price: 20,
      Category: Category.BODY_SPRAY,
    },

    // Air fresheners
    {
      id: 'cm84fresh00001',
      name: 'Glade Air Freshener',
      description:
        'Infuse your home with long-lasting fragrance that refreshes and uplifts.',
      image: '/perfumes/glade.png',
      price: 15,
      Category: Category.AIR_FRESHENER,
    },
    {
      id: 'cm84fresh00002',
      name: 'Febreze',
      description:
        'Removes odors and freshens your space instantly with a light mist.',
      image: '/perfumes/fbreze.png',
      price: 18,
      Category: Category.AIR_FRESHENER,
    },
    {
      id: 'cm84fresh00003',
      name: 'Febreze Lavender',
      description:
        'Calming lavender fragrance that creates a relaxing atmosphere.',
      image: '/perfumes/fbreze-lavander.png',
      price: 18,
      Category: Category.AIR_FRESHENER,
    },
    {
      id: 'cm84fresh00004',
      name: 'Febreze Pine',
      description:
        'Fresh pine scent, perfect for the holiday season and beyond.',
      image: '/perfumes/fbreze-pine.png',
      price: 18,
      Category: Category.AIR_FRESHENER,
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
