'use client'
import React, {useState} from 'react';
import Link from "next/link";
import Notification from "/app/Notification";
import {signOut, useSession} from "next-auth/react";

const validateInput = (input, setInputError, validationFunction) => {
    setInputError(validationFunction(input) ? '' : 'Invalid input');
};

const setInput = (value, setState, setInputError, validationFunction) => {
    setState(value);
    validateInput(value, setInputError, validationFunction);
}

const RegisterPage = () => {
    const {data: session} = useSession()
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [secondName, setSecondName] = useState('');
    const [secondNameError, setSecondNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [university, setUniversity] = useState('');
    const [universityError, setUniversityError] = useState('');
    const [courseOfStudy, setCourseOfStudy] = useState('');
    const [courseOfStudyError, setCourseOfStudyError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [idNumberError, setIdNumberError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [notifications, setNotifications] = useState([]);

    function filterNotifications(notifications) {
    // Convert the notifications to strings for comparison
    const stringNotifications = notifications.map(JSON.stringify);

    // Create a new Set from the array to remove duplicates
    const uniqueStringNotifications = new Set(stringNotifications);

    // Convert the strings back to objects and set the state
    const uniqueNotifications = Array.from(uniqueStringNotifications, JSON.parse);
    setNotifications(uniqueNotifications);
}

    function validateAll() {
        if (firstName.trim() === '') {
            setFirstNameError('First name is required');
        }
        if (secondName.trim() === '') {
            setSecondNameError('Second name is required');
        }
        if (email.trim() === '') {
            setEmailError('Email is required');
        }
        if (university.trim() === '') {
            setUniversityError('University is required');
        }
        if (courseOfStudy.trim() === '') {
            setCourseOfStudyError('Course of study is required');
        }
        if (phoneNumber.trim() === '') {
            setPhoneNumberError('Phone number is required');
        }
        if (idNumber.trim() === '') {
            setIdNumberError('ID number is required');
        }
        if (password.trim() === '') {
            setPasswordError('Password is required');
        }

        //if any error is present, return false
        if (firstNameError.trim() !== '' || secondNameError.trim() !== '' || emailError.trim() !== '' || universityError.trim() !== '' || courseOfStudyError.trim() !== '' || phoneNumberError.trim() !== '' || idNumberError.trim() !== '' || passwordError.trim() !== '') {
            return false;
        }

        return firstName.trim() !== '' && secondName.trim() !== '' && email.trim() !== '' && university.trim() !== '' && courseOfStudy.trim() !== '' && phoneNumber.trim() !== '' && idNumber.trim() !== '' && password.trim() !== '';
    }

    function removeNotifications(notifications) {
       //remove all notifications
         notifications.splice(0, notifications.length);
            filterNotifications(notifications);
    }

    const submitForm = (e) => {
        removeNotifications(notifications);
        e.preventDefault();
        if (!validateAll()) {
            notifications.push({type: 'error', content: 'Please fill in all the required fields'});
            return;
        }

        setIsLoading(true);

        const formData = {
            firstName: firstName,
            secondName: secondName,
            email: email,
            university: university,
            courseOfStudy: courseOfStudy,
            phoneNumber: phoneNumber,
            idNumber: idNumber,
            password: password,
        }

        fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        }).then((response) => {
            setIsLoading(false);
            if (response.ok) {
                return response.json();
            } else {
                notifications.push({type: 'error', content: 'An error occurred while processing your request'});
            }
        }).then((data) => {
            setIsLoading(false);
            // Handle the data
            if (data.message) {
                // Show a success notification
                notifications.push({type: 'success', content: data.message});
                filterNotifications(notifications)
                location.href = '/auth/login';
            } else if (data.error) {
                // Show an error notification
                notifications.push({type: 'error', content: data.error});
                filterNotifications(notifications);
            }
        }).catch((error) => {
            console.log(error)
            alert('An error occurred: ' + error.message);
        });
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
                        </center>
                        <div className="flex mt-4 flex-col sm:flex-row w-9/12 gap-3 items-center justify-between">
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
                    </div>
                </div>
            </main>
        );
    }

    if (isLoading) {
        return (
            <main className="min-h-screen grid place-items-center w-full">
                <span className="loading loading-ring loading-lg"></span>
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
                        <div className="absolute top-[35px] right-0 mb-2 text-sm font-semibold text-orange-800">
                            By <a className={'text-blue-500'} href="https://futurespace.vercel.app">FutureSpace</a>
                        </div>
                    </div>
                </center>

                <div className="w-full mt-8">
                    <form className="shadow-sm p-6 rounded">
                        <div className="flex gap-3">
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                    First Name
                                </label>
                                <input className="input input-bordered input-md w-full max-w-md"
                                       id="firstName" required type="text" placeholder="Future"
                                       value={firstName}
                                       onChange={(e) => {
                                           setInput(e.target.value, setFirstName, setFirstNameError, (input) => {
                                               return input.trim() !== '';
                                           })
                                       }}
                                />
                                <p className={'text-red-400 text-sm font-semibold p-1 ' + (firstNameError ? '' : 'none')}>
                                    {firstNameError}
                                </p>
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="secondName">
                                    Second Name
                                </label>
                                <input className="input input-bordered input-md w-full max-w-md"
                                       id="secondName" required type="text" placeholder="Space"
                                       value={secondName}
                                       onChange={(e) => {
                                           setInput(e.target.value, setSecondName, setSecondNameError, (input) => {
                                               return input.trim() !== '';
                                           })
                                       }}
                                />
                                <p className={'text-red-400 text-sm font-semibold p-1 ' + (secondNameError ? '' : 'none')}>
                                    {secondNameError}
                                </p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md"
                                   id="email" required type="email" placeholder="user@gmail.com"
                                   value={email}
                                   onChange={(e) => {
                                       setInput(e.target.value, setEmail, setEmailError, (input) => {
                                           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                           return emailRegex.test(input);
                                       })
                                   }}
                            />
                            <p className={'text-red-400 text-sm font-semibold p-1 ' + (emailError ? '' : 'none')}>
                                {emailError}
                            </p>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="university">
                                University
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md"
                                   id="university" required type="text" placeholder="ie: Chuka University"
                                   value={university}
                                   onChange={(e) => {
                                       setInput(e.target.value, setUniversity, setUniversityError, (input) => {
                                           return input.trim() !== '';
                                       })
                                   }}
                            />
                            <p className={'text-red-400 text-sm font-semibold p-1 ' + (universityError ? '' : 'none')}>
                                {universityError}
                            </p>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="courseOfStudy">
                                Course of Study
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md"
                                   id="courseOfStudy" required type="text" placeholder="Computer Science"
                                   value={courseOfStudy}
                                   onChange={(e) => {
                                       setInput(e.target.value, setCourseOfStudy, setCourseOfStudyError, (input) => {
                                           return input.trim() !== '';
                                       })
                                   }}
                            />
                            <p className={'text-red-400 text-sm font-semibold p-1 ' + (courseOfStudyError ? '' : 'none')}>
                                {courseOfStudyError}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input className="input input-bordered input-md w-full max-w-md"
                                       id="phoneNumber" required type="text" placeholder="07********"
                                       value={phoneNumber}
                                       onChange={(e) => {
                                           let value = e.target.value;
                                           if (value.startsWith('0')) {
                                               value = '254' + value.slice(1);
                                           }
                                           setInput(value, setPhoneNumber, setPhoneNumberError, (input) => {
                                               const phoneRegex = /^254\d{9}$/;
                                               return phoneRegex.test(input);
                                           })
                                       }}
                                />
                                <p className={'text-red-400 text-sm font-semibold p-1 ' + (phoneNumberError ? '' : 'none')}>
                                    {phoneNumberError}
                                </p>
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="idNumber">
                                    ID Number
                                </label>
                                <input className="input input-bordered input-md w-full max-w-md"
                                       id="idNumber" required type="text" placeholder="ID Number"
                                       value={idNumber}
                                       onChange={(e) => {
                                           setInput(e.target.value, setIdNumber, setIdNumberError, (input) => {
                                               return input.trim() !== '';
                                           })
                                       }}
                                />
                                <p className={'text-red-400 text-sm font-semibold p-1 ' + (idNumberError ? '' : 'none')}>
                                    {idNumberError}
                                </p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md" id="password"
                                   type="password" placeholder="******************"
                                   value={password}
                                   onChange={(e) => {
                                       setInput(e.target.value, setPassword, setPasswordError, (input) => {
                                           return input.trim() !== '';
                                       })
                                   }}
                            />
                            <p className={'text-red-400 text-sm font-semibold p-1 ' + (passwordError ? '' : 'none')}>
                                {passwordError}
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="btn btn-outline btn-secondary ring-2  ring-offset-1 w-full"
                                    onClick={submitForm}
                                    type="button">
                                Register
                            </button>
                        </div>
                        <div className="flex text-[12px] underline underline-offset-2 gap-3">
                            <Link className="inline-block align-baseline my-2 text-blue-500 hover:text-blue-800"
                                  href={"/auth/recovery"}>
                                Forgot Password?
                            </Link>
                            <Link className={'inline-block align-baseline my-2 text-blue-500 hover:text-blue-800'}
                                  href={'/auth/login'}>
                                Already have an account? Sign In
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default RegisterPage;