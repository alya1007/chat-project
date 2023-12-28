const upstashRedisRestUrl = process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL;
const authToken = process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN;

type Commands = 'zrange' | 'sismember' | 'get' | 'smembers'

export const fetchRedis = async (
  command: Commands,
  ...args: (string | number)[]
) => {
  const commandUrl = `${upstashRedisRestUrl}/${command}/${args.join('/')}`

  const response = await fetch(commandUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    cache: "no-cache"
  })

  if (!response.ok) {
    throw new Error(`Something went wrong when fetching from Redis: ${response.statusText}`)
  }

  const data = await response.json()

  return data
}