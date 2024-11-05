import { CredentialsProvider } from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcrypt";
import { dbConnect } from "./dbConnect";
import { NextAuthOptions } from "next-auth";
import { NextApiRequest } from "next";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req: NextApiRequest) {
        await dbConnect();

        // Check for null or undefined credentials to satisfy TypeScript's strict typing
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required.");
        }

        const { email, password } = credentials;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Invalid email or password.");
        }

        // Check if passwords match
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
          throw new Error("Invalid email or password.");
        }

        return user;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
