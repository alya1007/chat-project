import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: "https://pleasing-gazelle-39513.upstash.io",
  token:
    "AZpZASQgMzczYmQ0OTYtMDAyMC00MmExLTgwMTEtZGY0MmRjMTVhODIwNzY1Mjk4ZmM1ZmFhNGUzNTg5OTQ1MzA4NjNiNGRhYzY=",
});
