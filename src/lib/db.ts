import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL,
  token:
    "AZpZASQgMzczYmQ0OTYtMDAyMC00MmExLTgwMTEtZGY0MmRjMTVhODIwNzY1Mjk4ZmM1ZmFhNGUzNTg5OTQ1MzA4NjNiNGRhYzY=",
});
