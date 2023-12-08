import * as z from "zod"

export const signUpValidation = z.object({
    name: z.string().min(2,{
        message: "Name must be at least 2 characters",
    }),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).max(50, {
      message: "Username must be at max 50 characters.",
    }),
    email:z.string().email(),
    password: z.string().min(8, {message: "Password must be at least 8 characters."}),
  })