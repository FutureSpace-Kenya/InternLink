import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { compare } from 'bcrypt'
// import {User} from "../../../../models/user";

import axios from 'axios';

const authOptions = {
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET,
        // }),
        // CredentialsProvider({
        //     name: 'Credentials',
        //     credentials: {
        //         username: { },
        //         password: { }
        //     },
        //     async authorize(credentials) {

        //         const password = credentials.password
        //         const email = credentials.email

        //         const user = await User.findOne({ where: { Email: email } })
        //         if (!user) return null
        //         const match = await compare(password, user.Password)
        //         if (match) {
        //             return {
        //                 id: user.UserID,
        //                 email: user.Email,
        //             }
        //         } else {
        //             return null
        //         }
        //     }
        // }),

        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            async authorize(token) {
                const { id_token } = token;
        
                try {
                    const response = await axios.post('http://localhost:8000/api/v2/login/', {
                        google_id: id_token
                    });
        
                    if (response.status === 200) {
                        return {
                            id: response.data.user_id,
                            email: response.data.email,
                        };
                    } else {
                        return null;
                    }
                } catch (error) {
                    return null;
                }
            }
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { },
                password: { }
            },
            async authorize(credentials) {
                const { username, password } = credentials;
        
                try {
                    const response = await axios.post('http://localhost:8000/api/v2/login/', {
                        username,
                        password
                    });
        
                    if (response.status === 200) {
                        return {
                            id: response.data.user_id,
                            email: username,
                        };
                    } else {
                        return null;
                    }
                } catch (error) {
                    return null;
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