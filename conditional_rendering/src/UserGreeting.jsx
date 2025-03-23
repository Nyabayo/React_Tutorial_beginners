


function UserGreeting(props){
// if else
//     if(props.isLoggedIn){
//         return <h2>Welcome {props.username}</h2>
//     }
//     else{
//         return <h2>PLease log in to continue</h2>
//     }

    // You can use the ternary operator (? :) to simplify the if-else statement like this:more concise tha if else
        return (
                <h2 className={props.isLoggedIn ? "welcome-message" : "login-message"}>
            {props.isLoggedIn ? `Welcome ${props.username}` : "Please log in to continue"}
        </h2>
    );

}
export default UserGreeting