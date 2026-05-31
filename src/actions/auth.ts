import {signIn, signUp, twoFactor} from "@/lib/auth-client";
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

export const handleVerifyTotp = async (
    previousState: unknown,
    formData: FormData
) => {
    const code = formData.get("code") as string;

    const { error } = await twoFactor.verifyTotp({ code });

    if (error) {
        return { error: error.message ?? "Invalid code. Please try again." };
    }

    redirect("/dashboard");
};

export const handleVerifyBackupCode = async (
    previousState: unknown,
    formData: FormData
) => {
    const code = formData.get("code") as string;

    const { error } = await twoFactor.verifyBackupCode({ code });

    if (error) {
        return { error: error.message ?? "Invalid backup code. Please try again." };
    }

    redirect("/dashboard");
};