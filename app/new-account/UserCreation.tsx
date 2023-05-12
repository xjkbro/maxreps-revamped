"use client";
import React, { useState } from "react";
import { addUser } from "./actions";
import { useRouter } from "next/navigation";

export default function UserCreation({ user }) {
    const [error, setError] = useState(null);
    const [username, setUsername] = useState("");
    const router = useRouter();
    console.log(user);
    return (
        <div>
            <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button
                onClick={() => {
                    addUser(user, username).then((data) => {
                        console.log(data);
                        if (data.success) router.push("/dashboard");
                        else setError(true);
                    });
                }}
            >
                add
            </button>
            {error ? "User exists" : "Username good"}
        </div>
    );
}
