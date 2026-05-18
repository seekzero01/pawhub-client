import {ReactNode} from "react";
import {AppleIcon, FacebookIcon, GoogleIcon} from "@/src/app/auth/components/icons/Icons";

interface OAuthProvider {
    strategy: any;
    name: string;
    icon: ReactNode;
}

export const providers: OAuthProvider[] = [
    { strategy: 'oauth_google' as const, name: 'Google', icon: <GoogleIcon /> },
    { strategy: 'oauth_apple' as const, name: 'Apple', icon: <AppleIcon /> },
    { strategy: 'oauth_facebook' as const, name: 'Facebook', icon: <FacebookIcon /> },
]