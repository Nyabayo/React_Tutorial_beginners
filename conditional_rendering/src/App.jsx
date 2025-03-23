

// Conditional rendering = allows yo to control what gets rendered in your application based on certaing conditions (show, hide, or change components)

import UserGreeting from "./UserGreeting.jsx";
function App() {


  return (
    <>
        <UserGreeting isLoggedIn={false} username="Ernest"></UserGreeting>

    </>
  );
}

export default App
