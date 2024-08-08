import { connectDB } from "../_libs/mongodb";
import User from "../_models/User";
import type { NextAuthOptions } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google"
import crypto from "crypto";

export const authOptions: NextAuthOptions  = {
    providers: [
      credentials({
        name: "Credentials",
        id: "credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
            await connectDB();
            const user = await User.findOne({
            email: credentials?.email,
            }).select("+password");

            if (!user) throw new Error("Wrong Email");

            const passwordMatch = await bcrypt.compare(
                credentials!.password,
                user.password
            );

            if (!passwordMatch) throw new Error("Wrong Password");
            return user;
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        profile: async (profile) => {
          await connectDB();
          let user = await User.findOne({ email: profile.email });
  
          if (!user) {
            const randomPassword = crypto.randomBytes(16).toString("hex"); 
            const hashedPassword = await bcrypt.hash(randomPassword, 10); 

            user = new User({
              email: profile.email,
              name: profile.name,
              image: profile.picture,
              password: hashedPassword,
            });
            await user.save();
          }
  
          return {
            id: user._id,
            email: user.email,
            name: user.name,
            image: user.image,
          };
        },
      }),
    ],
    session: {
      strategy: "jwt",
    }
  };