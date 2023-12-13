import Link from "next/link";

export default function Login() {
    return (
        <main className="min-h-screen grid place-items-center w-full">
            <div className="w-full max-w-md m-4 p-4 ">
                <center>
                    <div className="w-fit relative flex flex-col items-center">
                        <h2 className="">
                            InternLink Auth
                        </h2>
                        <div className="absolute top-[35px] right-0 mb-4 text-xs font-medium text-orange-800">
                            By <a className={'text-blue-500'} href="https://futurespace.vercel.app">FutureSpace</a>
                        </div>
                    </div>
                </center>

                <div className="w-full mt-8">
                    <form className="shadow-sm p-6 rounded">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md"
                                   id="email" required type="email" placeholder="Email"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md" id="password"
                                   type="password" placeholder="******************"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="btn btn-outline btn-secondary ring-2  ring-offset-1 w-full"
                                    type="button">
                                Sign In
                            </button>
                        </div>
                        <div class="flex text-[12px] underline underline-offset-2 gap-3">
                            <a className="inline-block align-baseline my-2 text-blue-500 hover:text-blue-800"
                               href="#">
                                Forgot Password?
                            </a>
                            <Link className={'inline-block align-baseline my-2 text-blue-500 hover:text-blue-800'}
                                  href={'/auth/register'}>
                                New User? Sign Up
                            </Link>
                        </div>

                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2021 FutureSpace. All rights reserved.
                    </p>
                </div>
            </div>


        </main>
    )
}