import NextAuth, {User} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import fetchClient from "@/lib/fetch-client";
import {JWT} from "next-auth/jwt";
import {jwt} from "@/lib/utils";


const handler = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    pages: {
        signIn: "/login",
        error: '/login'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                phone: {
                    label: "Phone",
                    type: "phone",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },

            async authorize(credentials) {
                try {
                    const response = await fetchClient({
                        method: "POST",
                        url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/auth/credentialsLogin",
                        body: JSON.stringify(credentials),
                    });

                    if (!response.ok) {
                        throw response;
                    }

                    const responseJson = await response.json();
                    const data: { user: User; access_token: string } = responseJson.data;

                    if (!data?.access_token) {
                        throw response;
                    }

                  //  console.log('blablaq2222', { ...data.user, accessToken: data?.access_token });

                    return { ...data.user, accessToken: data?.access_token };
                } catch (error) {
                    if (error instanceof Response) {

                        return null;

                    }

                    throw new Error(`An error has occurred during login request (${error})`);
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (trigger === "update") {
                if (session.type === "MANUAL") {
                    const response = await fetchClient({
                        url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/auth/me",
                        token: token.accessToken,
                    });
                    const user = await response.json();

                    return { ...token, ...user };
                }

                return { ...token, ...session };
            }

            if (user) {
                return { ...token, ...user };
            }

            const { exp: accessTokenExpires } = jwt.decode(token.accessToken);

            if (!accessTokenExpires) {
                return token;
            }

            const currentUnixTimestamp = Math.floor(Date.now() / 1000);
            const accessTokenHasExpired = currentUnixTimestamp > accessTokenExpires;

            if (accessTokenHasExpired) {
                return await refreshAccessToken(token);
            }

            return token;
        },
        async session({ session, token }) {
            if (token.error) {
                throw new Error("Refresh token has expired");
            }

            session.accessToken = token.accessToken;
            session.user.id = token.id || "";
            session.user.phone = token.phone || "";

            return session;
        },
    },
    events: {
        async signOut({ token }) {
            await fetchClient({
                method: "POST",
                url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/auth/logout",
                token: token.accessToken,
            });
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
})

async function refreshAccessToken(token: JWT) {
    try {
        const response = await fetchClient({
            method: "POST",
            url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/auth/refresh",
            token: token.accessToken,
        });

        if (!response.ok) throw response;

        const refreshedAccessToken: { access_token: string } = await response.json();
        const { exp } = jwt.decode(refreshedAccessToken.access_token);

        return {
            ...token,
            accessToken: refreshedAccessToken.access_token,
            exp,
        };
    } catch (error) {
        return {
            ...token,
            error: "RefreshAccessTokenError",
        };
    }
}

export { handler as GET, handler as POST }