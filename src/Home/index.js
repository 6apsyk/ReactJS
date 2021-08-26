import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Chat from "../Chat";
import Profile from "../Profile";

export default function Home (){
    return (
        <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/chat">Chat</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>

                    <hr />

                    <Switch>
                    <Route path="/chat">
                        <Chat />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    </Switch>
                </div>
    </Router>
    )
}