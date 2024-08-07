import GoogleProvider from "next-auth/providers/google"
import {env} from '../_libs/env';
import { connectMongoDB } from "../_libs/mongodb";
import User from '../_models/user';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account }: { user: any, account: any }) {
      if (account && account.provider === "google") {
        const { name, email } = user;
        try {
          await connectMongoDB();
          const userExists = await User.findOne({ email });
    
          if (!userExists) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
              }),
            });
            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.error('Error in signIn event:', error);
        }
      }
    },
  },
  events: {

  },
};