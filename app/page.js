'use client'

import React, { useEffect, useState } from "react";
import LoginButton from "./components/LoginButton";
import TypewriterEffect from "/app/components/TypewriterEffect";

export default function Home() {

    const types = ['Attachments', 'Internships', 'Opportunities'];

    useEffect(() => {
        const canvas = document.getElementById("canvas"),
            ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let stars = [], // Array that contains the stars
            FPS = 120, // Frames per second
            x = 100, // Number of stars
            resolution = window.devicePixelRatio || 1,
            mouse = {
                x: 0,
                y: 0
            };  // mouse location

        // Push stars to array

        for (let i = 0; i < x; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() + 1,
                vx: Math.floor(Math.random() * 50) - 25,
                vy: Math.floor(Math.random() * 50) - 25
            });
        }

        // Draw the scene

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = "lighter";


            for (let i = 0, x = stars.length; i < x; i++) {
                let s = stars[i];

                ctx.fillStyle = 'blue';
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = 'blue';
                ctx.stroke();
            }

            ctx.beginPath();
            for (let i = 0, x = stars.length; i < x; i++) {
                let starI = stars[i];
                ctx.moveTo(starI.x, starI.y);
                if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
                for (let j = 0, x = stars.length; j < x; j++) {
                    let starII = stars[j];
                    if (distance(starI, starII) < 150) {
                        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
                        ctx.lineTo(starII.x, starII.y);
                    }
                }
            }
            ctx.lineWidth = 0.05;
            ctx.strokeStyle = 'blue';
            ctx.stroke();
        }

        function distance(point1, point2) {
            let xs = 0;
            let ys = 0;

            xs = point2.x - point1.x;
            xs = xs * xs;

            ys = point2.y - point1.y;
            ys = ys * ys;

            return Math.sqrt(xs + ys);
        }

        // Update star locations

        function update() {
            for (let i = 0, x = stars.length; i < x; i++) {
                let s = stars[i];

                s.x += s.vx / FPS;
                s.y += s.vy / FPS;

                if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
                if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
            }
        }

        function mouseMoveHandler(e) {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            console.log(mouse);
        }

        canvas.addEventListener('mousemove', mouseMoveHandler);

        // Update and draw

        function tick() {
            draw();
            update();
            requestAnimationFrame(tick);
        }

        tick();

        // Return a cleanup function to remove the event listener
        return () => {
            canvas.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center">
                <section className="absolute opacity-40 sm:opacity-50 bg-white bottom-2 filter h-full overflow-hidden md:w-full object-cover">
                    <canvas id="canvas"></canvas>
                </section>
                <div className="absolute custom-gradient top-0 left-0 w-full h-full">

                </div>
                <div className="flex bg-student w-fit m-2 mb-8 relative flex-col items-center">
                    <div className="w-fit relative flex flex-col items-center">
                        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold">
                            <span className="text-green-400">
                                 Intern
                            </span>
                            Link&trade;
                        </h1>
                        <div
                            className="absolute top-[40px] sm:top-[55px] right-0 mb-4 text-xs md:text-sm font-semibold text-orange-800">
                            By <a className={'text-blue-900'} href="https://futurespace.vercel.app">FutureSpace</a>
                        </div>
                    </div>
                    <p className="text-sm md:text-xl font-normal text-center">
                        <br/>
                        Welcome to the future of  <TypewriterEffect types={types} />
                    </p>


                    <div className="flex w-full items-center justify-center space-x-4 mt-4 sm:mt-8">
                        <a href="auth/login">
                            <button className="btn btn-outline btn-primary ring-1 ring-secondary ring-offset-1">
                                <i className={'fas fa-sign-in-alt'}></i> Sign In
                            </button>
                        </a>
                        <a href="auth/register">
                            <button className="btn btn-secondary ring-1 ring-secondary ring-offset-1">
                                <i className={'fas fa-user-plus'}></i> Sign Up
                            </button>
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-0 flex flex-col items-center justify-center scroll">
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                    <div className=" -mt-2 sm:mt-0 text-rgba text-xs font-semibold">
                        Scroll Down
                    </div>
                </div>
            </main>

            <div className="flex flex-col mt-8 sm:flex-row items-center justify-center overflow-clip w-full">
                <div className="right w-full p-4 sm:p-6 md:p-8 sm:w-1/2">
                    <h1 className={'my-2'}>Discover <span className={'text-green-500'}>Intern</span>Link<span
                        className={''}>&trade;</span>
                    </h1>
                    <p>
                        InternLink streamlines the journey for students to secure internships and attachments. Our
                        platform simplifies the application process, enabling students to effortlessly explore and apply
                        for opportunities. Simultaneously, it empowers employers to effortlessly discover and recruit
                        top talent for their internship programs and attachment roles. With InternLink, connecting the
                        potential of tomorrow with the innovations of today just got easier.
                    </p>
                </div>


                <div
                    className="left text-green-800 flex items-center justify-center pt-4 gap-2 sm:gap-6 w-full p-4 sm:w-1/2">

                    <div className="right flex mt-10 flex-col gap-2 sm:gap-4 md:gap-6">
                        <div className="custom-c-mod relative">
                            <div
                                className="cicle grid place-items-center  from-green-700 to-transparent rounded-full w-20 h-20">
                                <i className="fa-solid text-3xl fa-shield"></i>
                            </div>
                            <svg className="w-24 top-6 absolute h-24">
                                <defs>
                                    <linearGradient id="gradientStroke1" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="5%" style={{stopColor: "rgb(206,112,25,0)", stopOpacity: 0}}/>
                                        <stop offset="70%"
                                              style={{stopColor: "rgb(206,112,25)", stopOpacity: 0.5}}/>
                                        <stop offset="100%"
                                              style={{stopColor: "rgba(206,112,25,0.9)", stopOpacity: 1}}/>
                                    </linearGradient>
                                </defs>
                                <circle cx="50%" cy="50%" r="40%" stroke="url(#gradientStroke1)" strokeWidth="4"
                                        fill="transparent"/>
                            </svg>

                            <span className={'text-sm font-semibold'}>
                                Safe & Reliable
                            </span>
                        </div>

                        <div className="custom-c relative">
                            <div
                                className="cicle grid place-items-center  from-green-700 to-transparent rounded-full w-20 h-20">
                                <i className="fa-solid text-3xl fa-rocket"></i>
                            </div>
                            <svg className="w-24 top-6 absolute h-24">
                                <defs>
                                    <linearGradient id="gradientStroke2" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="5%" style={{stopColor: "rgb(74, 222, 128,0)", stopOpacity: 0}}/>
                                        <stop offset="70%"
                                              style={{stopColor: "rgb(74, 222, 128,0.5)", stopOpacity: 0.5}}/>
                                        <stop offset="100%"
                                              style={{stopColor: "rgb(74, 222, 128,0.9)", stopOpacity: 1}}/>
                                    </linearGradient>
                                </defs>

                                <circle cx="50%" cy="50%" r="40%" stroke="url(#gradientStroke2)" strokeWidth="4"
                                        fill="transparent"/>
                            </svg>

                            <span className={'text-sm font-semibold'}>
                            A FutureSpace product
                        </span>
                        </div>
                    </div>

                    <div className="right sm:-mt-14 flex flex-col gap-2 sm:gap-6">
                        <div className="custom-c relative">
                            <div
                                className="cicle grid place-items-center  from-green-700 to-transparent rounded-full w-20 h-20">
                                <i className="fa-solid text-3xl fa-clock-rotate-left"></i>
                            </div>
                            <svg className="w-24 top-6 absolute h-24">
                                <defs>
                                    <linearGradient id="gradientStroke3" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="5%" style={{stopColor: "rgb(74, 222, 128,0)", stopOpacity: 0}}/>
                                        <stop offset="70%"
                                              style={{stopColor: "rgb(74, 222, 128,0.5)", stopOpacity: 0.5}}/>
                                        <stop offset="100%"
                                              style={{stopColor: "rgb(74, 222, 128,0.9)", stopOpacity: 1}}/>
                                    </linearGradient>
                                </defs>
                                <circle cx="50%" cy="50%" r="40%" stroke="url(#gradientStroke3)" strokeWidth="4"
                                        fill="transparent"/>
                            </svg>


                            <span className={'text-sm font-semibold'}>
                            Time saving
                        </span>
                        </div>

                        <div className="custom-c-mod relative">
                            <div
                                className="cicle grid place-items-center  from-green-700 to-transparent rounded-full w-20 h-20">
                                <i className="fa-regular text-3xl fa-face-grin-beam"></i>
                            </div>
                            <svg className="w-24 top-6 absolute h-24">
                                <defs>
                                    <linearGradient id="gradientStroke4" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="5%" style={{stopColor: "rgb(206,112,25,0)", stopOpacity: 0}}/>
                                        <stop offset="70%"
                                              style={{stopColor: "rgb(206,112,25)", stopOpacity: 0.5}}/>
                                        <stop offset="100%"
                                              style={{stopColor: "rgba(206,112,25,0.9)", stopOpacity: 1}}/>
                                    </linearGradient>
                                </defs>

                                <circle cx="50%" cy="50%" r="40%" stroke="url(#gradientStroke4)" strokeWidth="4"
                                        fill="transparent"/>
                            </svg>
                            <span className={'text-sm font-semibold'}>
                            Free to use
                        </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
