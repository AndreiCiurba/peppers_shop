import redisClient from '../config/database.js';

export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice, customerDetails } = req.body;
    const orderId = `order:${Date.now()}`;

    const orderData = {
      id: orderId,
      items,
      totalPrice,
      customerDetails,
      createdAt: new Date().toISOString()
    };

    await redisClient.set(orderId, JSON.stringify(orderData));
    
    res.status(201).json({ 
      message: 'Order created successfully', 
      orderId 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error creating order', 
      error: error.message 
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const orderData = await redisClient.get(id);

    if (orderData) {
      res.json(JSON.parse(orderData));
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ 
      message: 'Error retrieving order', 
      error: error.message 
    });
  }
};