import images from './images';

const wines = [
  {
  title: 'Mystic Valley Cabernet',
  price: '$58',
  tags: 'US | Bottle',
  },
  {
  title: 'Vino Verde Blend',
  price: '$49',
  tags: 'PT | Bottle',
  },
  {
  title: 'Provence Rosé',
  price: '$42',
  tags: 'FR | 750 ml',
  },
  {
  title: 'Cali Coast Chardonnay',
  price: '$34',
  tags: 'US | 750 ml',
  },
  {
  title: 'Scottish Highlands Scotch',
  price: '$30',
  tags: 'SC | 750 ml',
  },
  ];

const cocktails = [
    {
    title: 'Tropical Breeze',
    price: '$18',
    tags: 'Coconut rum | Pineapple juice | Splash of grenadine',
    },
    {
    title: 'Spicy Ginger Zing',
    price: '$15',
    tags: 'Vodka | Spicy ginger beer | Fresh lime wedge',
    },
    {
    title: 'Mojito Madness',
    price: '$12',
    tags: 'White rum | Fresh mint leaves | Lime juice | Sugar',
    },
    {
    title: 'Whiskey Wonderland',
    price: '$29',
    tags: 'Irish whiskey | Honey syrup | Orange bitters',
    },
    {
    title: 'Berry Bliss Negroni',
    price: '$24',
    tags: 'Gin | Berry-infused vermouth | Campari | Mixed berries garnish',
    },
  ];
    
  const cuisines = [
    {
      title: 'Italian Pasta',
      price: '$16',
      description: 'Homemade pasta with marinara sauce and fresh basil',
    },
    {
      title: 'Sushi Platter',
      price: '$22',
      description: 'Assorted sushi rolls with soy sauce and wasabi',
    },
    {
      title: 'Mouthwatering BBQ Ribs',
      price: '$19',
      description: 'Slow-cooked barbecue ribs served with coleslaw and cornbread',
    },
    {
      title: 'Vegetarian Delight',
      price: '$14',
      description: 'Grilled vegetable platter with quinoa and tahini dressing',
    },
    {
      title: 'Seafood Paella',
      price: '$28',
      description: 'Traditional Spanish paella with a variety of fresh seafood',
    },
    {
      title: 'Margherita Pizza',
      price: '$12',
      description: 'Classic Italian pizza with tomato, mozzarella, and basil',
    },
    {
      title: 'Coq au Vin',
      price: '$25',
      description: 'French chicken stew in red wine with mushrooms and onions',
    },
    {
      title: 'Lasagna',
      price: '$18',
      description: 'Layered Italian pasta with meat sauce and cheese',
    },
    {
      title: 'Croissant Breakfast',
      price: '$10',
      description: 'Freshly baked croissants with butter and jam',
    },
    {
      title: 'Ratatouille',
      price: '$16',
      description: 'Provencal French stew with a variety of vegetables',
    },
  ];
    
    
    
    

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Celebrating Excellence in Culinary Delights!',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'A Shining Beacon of Culinary Innovation!',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Elevating Dining Experiences to New Heights!',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Mastering the Art of Extraordinary Cuisine!',
  },
];

export default { wines, cocktails, awards, cuisines };
