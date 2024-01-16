'use client';
import Link from "next/link";
import LoginButton from "../../components/LoginButton";
import React, {useEffect, useState} from "react";
import {signIn, signOut, useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import Notification from "/app/Notification";

export default function Login() {
    const {data: session} = useSession()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const url = window.location.href;
        console.log(url)
        //if the url ends with /auth/signin
        if (url.endsWith('error=CredentialsSignin')) {
            // Show an error notification
            notifications.push({type: 'error', content: 'Invalid email or password'});
            filterNotifications(notifications);
            window.history.replaceState({}, null, url.split('?')[0]);
        }
    }, []);

    const validateEmail = (email) => {
        // Simple email validation
        const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        // Password must be at least 8 characters
        return password.length >= 1;
    };

    const handleSubmit = async (e) => {
        removeNotifications(notifications)
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError('Invalid email');
            return;
        }
        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters');
            return;
        }

        setIsLoading(true);

        const data = {
            email: email,
            password: password,
        };

        const res = await signIn('credentials', {
            email: email,
            password: password,
            redirect: true,
            callbackUrl: '/intern/dashboard'
        })

        setIsLoading(false);
    }

    function filterNotifications(notifications) {
        // Convert the notifications to strings for comparison
        const stringNotifications = notifications.map(JSON.stringify);

        // Create a new Set from the array to remove duplicates
        const uniqueStringNotifications = new Set(stringNotifications);

        // Convert the strings back to objects and set the state
        const uniqueNotifications = Array.from(uniqueStringNotifications, JSON.parse);
        setNotifications(uniqueNotifications);
    }

    function removeNotifications(notifications) {
        //remove all notifications
        notifications.splice(0, notifications.length);
        filterNotifications(notifications);
    }

    if (isLoading) {
        return (
            <main className="min-h-screen grid place-items-center w-full">
                <span className="loading loading-ring loading-lg"></span>
            </main>
        );
    }

    if (session) {
        return (
            <main className="min-h-screen grid place-items-center w-full">
                <div className="w-full max-w-md m-4 p-4 ">
                    <Notification notifications={notifications}/>
                    <center>
                        <div className="w-fit relative flex flex-col items-center">
                            <h2 className="">
                            <span className="text-green-400">
                                 Intern
                            </span>
                                Link&trade; Auth
                            </h2>
                            <div className="absolute top-[35px] right-0 mb-4 text-xs font-medium text-orange-800">
                                By <a className={'text-blue-500'} href="https://futurespace.vercel.app">FutureSpace</a>
                            </div>
                        </div>
                    </center>
                    <div className="w-full flex justify-center items-center flex-col mt-8">
                        <center>
                            <div className="flex w-full items-center justify-center rounded-lg bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                                <div className="max-w-md w-full space-y-8">
                                    <div>
                                        <div className="avatar">
                                            <i className={'fas fa-user-circle fa-5x'}></i>
                                        </div>
                                        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                                           You are signed in as
                                        </h2>
                                        <p className="mt-2 text-center text-sm text-gray-600">
                                            {session.user.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 w-full gap-3 items-center justify-between">
                            <div className="w-full">
                                <button className={'btn btn-outline text-red-600 ring-2  ring-offset-1 w-full'}  onClick={() => signOut()}>
                                    Sign Out <i className="fas fa-sign-out-alt"> </i>
                                </button>
                            </div>
                            <Link className={'w-full'} href={'/intern/dashboard'}>
                                <button className={'btn btn-outline btn-secondary ring-2  ring-offset-1 w-full'}>
                                    Dashboard <i className="fas fa-arrow-right"> </i>
                                </button>
                            </Link>
                        </div>
                        </center>

                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen grid place-items-center w-full">
            <div className="w-full max-w-md m-4 p-4 ">
                <Notification notifications={notifications}/>
                <center>
                    <div className="w-fit relative flex flex-col items-center">
                        <h2 className="">
                            <span className="text-green-400">
                                 Intern
                            </span>
                            Link&trade; Auth
                        </h2>
                        <div className="absolute top-[35px] right-0 mb-4 text-xs font-medium text-orange-800">
                            By <a className={'text-blue-500'} href="https://futurespace.vercel.app">FutureSpace</a>
                        </div>
                    </div>
                </center>

                <div className="w-full mt-8">
                    <form className="shadow-sm p-6 rounded" onSubmit={handleSubmit}>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md"
                                   id="email" required type="email" placeholder="Email"
                                   value={email}
                                   onChange={(e) => {
                                       setEmail(e.target.value);
                                       if (!validateEmail(e.target.value)) {
                                           setEmailError('Invalid email');
                                       } else {
                                           setEmailError('');
                                       }
                                   }}
                            />
                            {emailError && <p className="text-red-500">{emailError}</p>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md" id="password"
                                   type="password" placeholder="******************"
                                   value={password}
                                   onChange={(e) => {
                                       setPassword(e.target.value);
                                       if (!validatePassword(e.target.value)) {
                                           setPasswordError('Password must be at least 8 characters');
                                       } else {
                                           setPasswordError('');
                                       }
                                   }}
                            />
                            {passwordError && <p className="text-red-500">{passwordError}</p>}
                        </div>
                        <div className="flex flex-col gap-3 items-center justify-between">
                            <input type={'submit'}
                                   className="btn btn-outline btn-secondary ring-2  ring-offset-1 w-full"
                                   value={'Sign In'}/>
                            <div className="flex w-full items-center justify-center">
                                {/*Line*/}
                                <hr className="w-full border-gray-300"/>
                                {/*Text*/}
                                <span className="text-gray-500 mx-3">or</span>
                                {/*Line*/}
                                <hr className="w-full border-gray-300"/>
                            </div>
                            <LoginButton/>
                        </div>
                        <div className="flex text-[12px] underline underline-offset-2 gap-3">
                            <Link className="inline-block align-baseline my-2 text-blue-500 hover:text-blue-800"
                                  href={"/auth/recovery"}>
                                Forgot Password?
                            </Link>
                            <Link className={'inline-block align-baseline my-2 text-blue-500 hover:text-blue-800'}
                                  href={'/auth/register'}>
                                New User? Sign Up
                            </Link>
                        </div>

                    </form>
                </div>
            </div>

        </main>
    )
}