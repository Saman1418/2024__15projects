import React from "react";
import Card from "./Components/Card";
import SignIn from "./Components/SignIn";
import Route from "./Components/Route";
import Forgetpass from "./Components/Forgetpass";

const App = () => {
    return (
        <div className="App">

            {/* <Card></Card> */}
            {/* <SignIn></SignIn> */}

            <Route
                path="/">
                <Card></Card>
            </Route>

            <Route
                path="/SignIn">
                <SignIn></SignIn>
            </Route>

            <Route
                path="/Forget">
                <Forgetpass></Forgetpass>
            </Route>


        </div>
    )
}
export default App;