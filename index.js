import React from "react";

import ReactDom from "react-dom/client";

const head = React.createElement("div", { id: "parent"},
    [React.createElement("div", { id: "child1"},
    [React.createElement("h1", {}, "This is H1 from react!!"),
    React.createElement("h2", {}, "This is H2 from react!!")])], 
React.createElement("div", { id: "child2"},
    [React.createElement("h1", {}, "This is H1 from react!!"),
    React.createElement("h2", {}, "This is H2 from react!!")]))


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(head);