export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="flex relative flex-col items-center">
            <div className="w-fit relative flex flex-col items-center">
                <h1 className="text-6xl font-bold">
                    InternLink
                </h1>
                <div className="absolute top-[55px] right-0 mb-4 text-xs font-medium text-orange-800">
                    By <a className={'text-blue-500'} href="https://futurespace.vercel.app">FutureSpace</a>
                </div>
            </div>
            <p className="text-2xl text-center">
                <br/>
                Welcome to the future of internships
            </p>

            {/*    Buttons */}
        <div className="flex space-x-4 mt-8">
            <button className="btn btn-outline btn-primary ring-1 ring-secondary ring-offset-1">
                <i className={'fas fa-sign-in-alt'}></i> Sign In
            </button>
            <button className="btn btn-secondary ring-1 ring-secondary ring-offset-1">
                <i className={'fas fa-user-plus'}></i> Sign Up
            </button>
        </div>
        </div>
    </main>
  )
}
