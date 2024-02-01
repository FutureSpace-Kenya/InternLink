import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'
import {User} from "/models/user";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,

            callbackUrl: 'https://intern.co.ke/intern/dashboard',
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { },
                password: { }
            },
            async authorize(credentials) {

                const password = credentials.password
                const email = credentials.email

                const user = await User.findOne({ where: { Email: email } })
                if (!user) return null
                const match = await compare(password, user.Password)
                if (match) {
                    return {
                        id: user.UserID,
                        email: user.Email,
                    }
                } else {
                    return null
                }
            }
        })
    ],
    pages:{
        signIn: '/auth/login',
        error: '/auth/login',
        newUser: '/auth/register'
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
};

const handler = NextAuth(authOptions);

module.exports = { GET: handler, POST: handler };