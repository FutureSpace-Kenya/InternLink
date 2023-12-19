'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                {/*Signed in as {session.user.email} <br />*/}
                <button className={'btn btn-secondary ring-secondary ring-offset-1 btn-outline'} onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            {/*Not signed in <br />*/}
            <button className={'btn btn-secondary ring-secondary ring-offset-1 btn-outline'} onClick={() => signIn('google')}>Sign in</button>
        </>
    )
}