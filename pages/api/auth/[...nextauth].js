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
    async jwt({ token, user, account }) {
      // Add user information to token when user is first created
      if (user) {
        token.id = user.id; // Store user ID in the token
        token.image = user.image; // Store user image in the token
        token.name = user.name; // Store user name in the token
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id; // Attach user ID to session
      session.user.image = token.image; // Attach user image to session
      session.user.name = token.name; // Attach user name to session
      return session;
    },

    async redirect({ url, baseUrl }) {
      // Redirect to home page after successful authentication
      return baseUrl; // or '/' depending on your needs
    },
  },
});
