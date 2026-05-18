import {NextRequest, NextResponse} from "next/server";

const protectedRoutes = ["/dashboard", "/profile"];

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isProtected = protectedRoutes.some(route => pathname.startsWith(route));

    if (!isProtected) return NextResponse.next();

    const sessionCookie = request.cookies.get("better-auth.session_token");

    if (!sessionCookie) {
        const signInUrl = new URL("/auth/login", request.url);
        signInUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};