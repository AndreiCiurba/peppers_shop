import { createClient } from "redis"
import 'dotenv/config'; 

const client = createClient ({
  url : process.env.REDIS_URL
});

client.on("error", function(err) {
  throw err;
});

export const initializeRedis = async () => {
  try {
    await client.connect()
    console.log('Connected to Redis');
  } catch (error) {
    console.error('Failed to connect to Redis', error);
  }
};

export default client;