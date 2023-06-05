// @ts-nocheck
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
   authorize(credentials) {
    if (!credentials.email || !credentials.password) {
     return null;
    }
   },
  }),
 ],
};
