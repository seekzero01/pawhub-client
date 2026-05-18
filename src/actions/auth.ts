import {signIn, signUp} from "@/src/lib/auth-client";
import {redirect} from "next/navigation";
import { z } from 'zod'

const signUpSchema = z.object({
    email: z.email('Invalid email'),
    password: z.string().min(12, 'Password too short'),
    name: z.string().min(3, 'Name required')
})

const signInSchema = z.object({
    email: z.email('Invalid email'),
    password: z.string().min(12, 'Password too short'),
})

export const handleSignUp = async (previousState: unknown, formData: FormData) => {
    const rawData = {
        name: formData.get("fullName") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    }

    const validated = signUpSchema.safeParse(rawData);

    if (!validated.success) {
        return {
            errors: z.treeifyError(validated.error)
        }
    }

    const { error } = await signUp.email(rawData);

    if (error) {
        return { error: error.message };
    }

    redirect("/dashboard")
};

export const handleSignIn = async (previousState: unknown, formData: FormData) => {
    const rawData = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    }

    const validated = signInSchema.safeParse(rawData);

    if (!validated.success) {
        return {
            errors: z.treeifyError(validated.error)
        }
    }

    const { error } = await signIn.email(rawData);

    if (error) {
        return { error: error.message };
    }

    redirect("/dashboard")
};
