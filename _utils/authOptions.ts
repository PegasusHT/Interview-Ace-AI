import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { Adapter } from "next-auth/adapters";
import {env} from '../_libs/env';
import NextAuth from "next-auth/next";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    
  },
  events: {
    async signIn({user}) {
      
    },
    async signOut() {
        await prisma.$disconnect();
    },
  }
}
