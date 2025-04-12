const allDishesData = [
  {
    id: "1",
    img: require('../assets/dishs/burgger/burger2.jpg'),
    name: 'Caesar Salad',
    desc: 'A fresh and crispy Caesar salad with lettuce, croutons, and Caesar dressing.',
    price: 9.99,
    size: ["small", "medium", "large"],
    rate: 3,
    trend: true,
    duration: 20,
    category: {
      id: "1",  // Category ID
      name: "Salads",  // Category Name
      img: require('../assets/dishs/burgger/burger.jpg'),

    },
  },
  {
    id: "2",
    img: require('../assets/dishs/fish/fish1.jpg'),
    name: 'Grilled Chicken Breast',
    desc: 'A juicy grilled chicken breast served with a side of vegetables.',
    price: 12.99,
    size: ["small", "medium", "large"],
    rate: 3,
    duration: 20,
    trend: true,

    category: {
      id: "2",  // Category ID
      name: "Meats",  // Category Name
      img: require('../assets/dishs/burgger/burger.jpg'),

    },
  },
  {
    id: "3",
    img: require('../assets/dishs/burgger/burger.jpg'),
    name: 'Spaghetti Bolognese',
    desc: 'Classic Italian spaghetti with a rich and savory Bolognese sauce.',
    price: 14.99,
    size: ["small", "medium", "large"],
    rate: 3,
    duration: 20,
        trend: true,

    category: {
      id: "3",  // Category ID
      name: "Pasta",  // Category Name
      img: require('../assets/dishs/burgger/burger.jpg'),

    },
  },
  {
    id: "4",
    img: require('../assets/dishs/burgger/burger.jpg'),
    name: 'Tomato Soup',
    desc: 'A smooth and creamy tomato soup with a hint of basil.',
    price: 5.99,
    size: ["small", "medium", "large"],
    rate: 3,    trend: true,

    duration: 20,
    category: {
      id: "4",  // Category ID
      name: "Soups",  // Category Name
      img: require('../assets/dishs/burgger/burger.jpg'),

    },
  },
  {
    id: "5",
    img: require('../assets/dishs/fish/fish1.jpg'),
    name: 'Beef Stew',
    desc: 'A hearty beef stew with tender chunks of beef and vegetables in a savory broth.',
    price: 15.99,
    size: ["small", "medium", "large"],
    rate: 3,  trend: true,
    duration: 20,
    category: {
      id: "2",  // Category ID
      name: "Meats",  // Category Name
      img: require('../assets/dishs/burgger/burger.jpg'),

    },
  },
  {
    id: "6",
    img: require('../assets/dishs/burgger/burger.jpg'),
    name: 'Grilled Salmon',
    desc: 'Grilled salmon fillet served with a side of roasted potatoes.',
    price: 18.99,
    size: ["small", "medium", "large"],
    rate: 3,  trend: true,
    duration: 20,
    category: {
      id: "2",  // Category ID
      name: "Meats",  // Category Name
      img: require('../assets/dishs/burgger/burger.jpg'),

    },
  }
];

export default allDishesData;
