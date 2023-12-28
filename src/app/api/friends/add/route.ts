import { fetchRedis } from "@/helpers/redis"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { addFriendValidationSchema } from "@/lib/validations/add-friend"
import { getServerSession } from "next-auth"
import { z } from "zod"

export async function POST(req: Request) {
    try {
        const body = await req.json()

        const { email: emailToAdd } = addFriendValidationSchema.parse(body)

        const idToAdd = await fetchRedis('get', `user:email:${emailToAdd}`) as string

        if (!idToAdd) {
            return new Response("User not found", {
                status: 404
            })
        }

        const session = await getServerSession(authOptions)

        if (!session) {
            return new Response("Unauthorized", {
                status: 401
            })
        }

        if (idToAdd === session.user.id) {
            return new Response("You can't add yourself as a friend", {
                status: 400
            })
        }

        // check if user already added this friend

        const isAlreadyAdded = await fetchRedis('sismember', `user:${idToAdd}:incoming_friend_requests`, session.user.id) as 0 | 1

        if (isAlreadyAdded) {
            return new Response("You already added this friend", {
                status: 400
            })
        }

        // check if user already has this friend

        const isAlreadyFriend = await fetchRedis('sismember', `user:${session.user.id}:friends`, idToAdd) as 0 | 1

        if (isAlreadyFriend) {
            return new Response("You already have this friend", {
                status: 400
            })
        }

        // add friend

        db.sadd(`user:${idToAdd}:incoming_friend_requests`, session.user.id)

        return new Response("Friend added", {
            status: 200
        })

    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response('Invalid request payload', {
                status: 422
            })
        }

        return new Response('Invalid request', {
            status: 400
        })
    }
}