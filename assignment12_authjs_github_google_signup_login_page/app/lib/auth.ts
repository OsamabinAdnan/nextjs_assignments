// Importing the next auth
// NextAuth.js library is a popular authentication library for Next.js.

import NextAuth from "next-auth";
import gitHubProvider from "next-auth/providers/github";
import googleProvider from "next-auth/providers/google";

// destructure and export specific components from the NextAuth library

export const {handlers, signIn, signOut, auth} =NextAuth({
    providers:[
        gitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET
        }),
        googleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
})