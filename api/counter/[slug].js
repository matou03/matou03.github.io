import Redis from 'ioredis';

const redis = new Redis(process.env.UPSTASH_REDIS_URL);

export default async function handler(req, res) {
  const { slug } = req.query; // 动态路由参数

  try {
    const views = (await redis.get(`pageviews:${slug}`)) || 0;
    return res.status(200).json({ views: Number(views) });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to get views' });
  }
}