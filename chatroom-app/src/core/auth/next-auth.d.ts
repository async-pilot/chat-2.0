import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    image: string;
    pbToken: string;
  }

  interface Session {
    user: User;
  }
}
