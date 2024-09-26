// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signIn", // Redirect to custom login page
  },

  secret: process.env.NEXTAUTH_SECRET, // Secret for encrypting session tokens
  session: {
    strategy: "jwt", // Use JWT for session handling
  },
  callbacks: {
    async jwt({ token, user }) {
      // Store user ID in the token if the user object is present
      if (user) {
        token.id = user.id; // Ensure your user object has an id
      }
      return token;
    },
    async session({ session, token }) {
      // Attach user ID to session
      if (token.id) {
        session.user.id = token.id;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to the base URL after successful authentication
      return baseUrl; // Modify if you have a specific route to redirect to
    },
  },
  events: {
    async signIn(message) {
      // Optional: Add custom behavior on sign-in
      console.log("User signed in:", message);
    },
    async signOut(message) {
      // Optional: Add custom behavior on sign-out
      console.log("User signed out:", message);
    },
  },
});
