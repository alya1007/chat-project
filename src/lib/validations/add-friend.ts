import { z } from "zod";

export const addFriendValidationSchema = z.object({
	email: z.string().email(),
})