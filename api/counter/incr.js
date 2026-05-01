import Redis from 'ioredis';

const redis = new Redis(process.env.UPSTASH_REDIS_URL);

export default async function handler(req, res) {
  // 只允许 POST 请求，避免被浏览器预加载误触发
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { slug } = req.body;  // 客户端传来文章的 slug
  if (!slug) {
    return res.status(400).json({ error: 'Missing slug' });
  }

  try {
    const key = `pageviews:${slug}`;
    const views = await redis.incr(key);
    return res.status(200).json({ views });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to increment views' });
  }
}