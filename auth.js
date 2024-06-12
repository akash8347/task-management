import connectDB from "./app/lib/db-connect";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import user from "./app/lib/model/user";
import { userAgent } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ profile }) {
      const { sub, name, email, picture, iat, exp } = profile;
      await connectDB();
      const existing = await user.findOne({ email });
      if (!existing) {
        await user.create({
          sub, name, email, picture, iat, exp,
        });
      }
      return true;
    },
    async jwt({ token, account, profile,user }) {
      if (account && profile) 
        {
          // console.log("profile")
          // console.log(profile)
          // console.log("userr------")
          // console.log(user);

        token.sub = profile.sub;  // Add the sub attribute to the JWT token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        // console.log("token")
        // console.log(token)
        session.user.sub = token.sub;  // Add the sub attribute to the session
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});