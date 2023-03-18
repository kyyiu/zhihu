import React from "react";
import { HashRouter } from "react-router-dom";
import Router from "./router";
function App() {
    // HashRouter 通过 http://localhost:3000/#/detail/a 这种形式访问
    return <HashRouter>
        <Router/>
    </HashRouter>
}

export default App