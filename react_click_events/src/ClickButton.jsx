import { useState } from "react"; // Import React state

function ClickButton() {
    // 🏠 This is our state (like a magic box)
    const [message, setMessage] = useState("Click the button! 🚀");

    // 🎯 This function runs when the button is clicked
    function handleClick() {
        setMessage("You clicked me! 🎉"); // Changes the message
    }

    return (
        <div>
            <h2>{message}</h2> {/* Displays the message */}
            <button onClick={handleClick}>Click Me!</button> {/* Click event */}
        </div>
    );
}

export default ClickButton;
