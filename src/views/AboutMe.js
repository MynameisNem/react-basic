import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AboutMe() {

    function DelayRedirect() {
        const navigate = useNavigate();

        useEffect(() => {
            const delayTime = setTimeout(() => {
                navigate('/');
            }, 100);
            return () => clearTimeout(delayTime)
        }, [navigate])
    }

    DelayRedirect()

    return (
        <div>
            <span>My name is Tung, 23 years old</span> <br />
            <span>You can use two app developed by me</span>
        </div>
    )
}

export default AboutMe