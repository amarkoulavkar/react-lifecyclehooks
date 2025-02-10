"use client";
import React, { useReducer, useState } from "react";

const initialData = [
    { id: Date.now(), name: "Amar", email: "amarkoulavkar@gmail.com" },
];

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "remove":
            return state.filter((ele) => ele.id !== action.payload);
        default:
            throw new Error();
    }
}

const ComponentUseReducer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [state, dispatch] = useReducer(reducer, initialData);
    const cardStyle = {
        border: "1px solid gray",
    };

    function addUser(e) {
        e.preventDefault();
        // Check if the inputs are blank
        if (!name || !email) {
            setError("All fields are required!");
            return;
        }
        const contact = {
            id: Date.now(),
            name,
            email,
        };
        setName("");
        setEmail("");
        setError("");
        dispatch({ type: "add", payload: contact });
    }

    return (
        <>
            <form>
                <input
                    style={cardStyle}
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <input
                    style={cardStyle}
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <button onClick={addUser}>Add user</button>
                <div>{error}</div>
            </form>
            <div>
                {state.map((ele) => {
                    return (
                        <li key={ele.id}>
                            {ele.name}{" "}
                            <span
                                onClick={() => {
                                    dispatch({ type: "remove", payload: ele.id });
                                }}
                            >
                                Delete
                            </span>
                        </li>
                    );
                })}
            </div>
        </>
    );
};
export default ComponentUseReducer;
