import React from "react";
import QuickAccess from "./QuickAccess";
import Notification from "./Notification";
// import Notes from "./Notes";
import TodoList from "./todo/TodoList";

const InfoColumn1 = () => {
    return (
        <div className="ui left aligned raised second segment">
            <h2 className="ui header">
                Good morning, <span className="emp-name">Alex </span>
            </h2>
            <Notification />
            <h3 className="ui header">Quick Access Tools</h3>
            <QuickAccess />
            <h3 className="ui header">My Notes</h3>
            <TodoList />
        </div>
    );
};
export default InfoColumn1;
