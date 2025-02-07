import redisClient from '../config/database.js';

const PEPPER_PRODUCTS = [
  {
    id: 1,
    name: 'Ghost Pepper',
    description: 'Ultra hot pepper from northeast India',
    price: 9.99,
    scoville: '1,041,427 SHU'
  },
  {
    id: 2,
    name: 'Carolina Reaper',
    description: 'World\'s hottest pepper',
    price: 12.99,
    scoville: '2,200,000 SHU'
  }
];

export const getAllProducts = async (req, res) => {
  try {
    // const cachedProducts = await redisClient.get('products');
    
    // if (cachedProducts) {
    //   return res.json(JSON.parse(cachedProducts));
    // }

    // await redisClient.set('products', JSON.stringify(PEPPER_PRODUCTS));
    res.json(PEPPER_PRODUCTS);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

export const getProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const product = PEPPER_PRODUCTS.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};