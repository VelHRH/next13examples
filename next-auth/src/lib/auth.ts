// @ts-nocheck
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

function getGoogleCredentials() {
 const clientId = process.env.GOOGLE_CLIENT_ID;
 const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

 if (!clientId || clientId.length === 0) {
  throw new Error("Missing client GOOGLE_CLIENT_ID");
 }

 if (!clientSecret || clientSecret.length === 0) {
  throw new Error("Missing client GOOGLE_CLIENT_SECRET");
 }
 return { clientId, clientSecret };
}

export const authOptions: NextAuthOptions = {
 adapter: PrismaAdapter(prisma),
 session: {
  strategy: "jwt",
 },
 pages: {
  signIn: "/login",
 },
 providers: [
  GoogleProvider({
   clientId: getGoogleCredentials().clientId,
   clientSecret: getGoogleCredentials().clientSecret,
  }),
  CredentialsProvider({
   type: "credentials",
   async authorize(credentials) {
    if (!credentials.email || !credentials.password) {
     return null;
    }
    const user = await prisma.user.findUnique({
     where: {
      email: credentials.email,
     },
    });

    if (!user) {
     return null;
    }

    const isPasswordValid = await compare(credentials.password, user.password);
    if (!isPasswordValid) {
     return null;
    }

    return {
     id: user.id,
     email: user.email,
     name: user.name,
    };
   },
  }),
 ],
 callbacks: {
  session: ({ session, token }) => {
   return {
    ...session,
    user: {
     ...session.user,
     id: token.id,
    },
   };
  },
  jwt: ({ token, user }) => {
   if (user) {
    const u = user as unknown as any;
    return {
     ...token,
     id: u.id,
    };
   }
   return token;
  },
 },
};
