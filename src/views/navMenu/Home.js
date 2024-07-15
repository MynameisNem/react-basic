import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    function DelayRedirect() {
        const navigate = useNavigate();

        useEffect(() => {
            const delayTime = setTimeout(() => {
                navigate('/aboutme');
            }, 100);
            return () => clearTimeout(delayTime)
        }, [navigate])
    }

    DelayRedirect()

    return (
        <div>
            <span>This is Home Page</span> <br />
            <span>This page will redirect to page About Me after 3s. Feel free to use another page.</span>
        </div>
    )
}

export default Home