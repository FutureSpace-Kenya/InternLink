import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { compare } from 'bcrypt'
// import {User} from "../../../../models/user";


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
                    const response = await fetch('http://localhost:8000/api/v2/auth/google-login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    google_id: id_token
                })
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
                const email = credentials.email;
                const password = credentials.password;
        
                try {
                    const response = await fetch('http://localhost:8000/api/v2/auth/login/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email,
                            password
                        })
                    });
        
                    if (response.ok) {
                        const data = await response.json();
                        return {
                            id: data.user_id,
                            email: email,
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