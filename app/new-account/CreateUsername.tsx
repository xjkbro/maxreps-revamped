"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

export default function CreateUsername() {
    const { user } = useUser();
    const [username, setUsername] = useState("");
    async function createUser(e: { preventDefault: () => void }) {
        e.preventDefault();
        const data = await fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: user?.id,
                username,
                firstname: user?.firstName,
                lastname: user?.lastName,
            }),
        });
        console.log(data);
        if (data.status == 200) redirect("/dashboard");
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <div className="text-left">
                <h1>
                    Welcome {user?.firstName} {user?.lastName}!{" "}
                </h1>
                <p>Please create a username to finish creating your account.</p>
            </div>
            <form className="w-96">
                <Label>Username</Label>
                <Input
                    name="username"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={createUser}>Create User</button>
            </form>
        </div>
    );
}
