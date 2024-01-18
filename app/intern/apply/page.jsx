'use client'
import NavBar from "/app/components/NavBar";
import {useEffect} from "react";

const ApplyPage = () => {

    useEffect(() => {
        document.title = "InternLink™"

    }, []);

    return (
        <div>
            <NavBar/>
            <div className="grid place-items-center">
                <h1 className="text-4xl font-bold text-center">Apply</h1>
            </div>
        </div>
    )
}

export default ApplyPage;