'use client'
import React, {useState} from 'react';
import Link from "next/link";

const validateInput = (input, setInputError, validationFunction) => {
    setInputError(validationFunction(input) ? '' : 'Invalid input');
};

const setInput = (value, setState, setInputError, validationFunction) => {
    setState(value);
    validateInput(value, setInputError, validationFunction);
}

const RegisterPage = () => {
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

    return (
        <main className="min-h-screen grid place-items-center w-full">
            <div className="w-full max-w-md m-4 p-4 ">
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