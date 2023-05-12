"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect, useRouter } from "next/navigation";
import { useTransition } from "react";
import { createUser, testUser } from "@/lib/_actions/user";
import { Button } from "@/components/ui/button";

export default function CreateUsername({ user, usernames }) {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [exists, setExists] = useState(false);

    const validateUsername = (input) => {
        setExists(false);
        const found = usernames.find((item) => item == input);
        if (found) setExists(true);
    };

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
                    minLength={5}
                    maxLength={20}
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        validateUsername(e.target.value);
                    }}
                />
                <Label>{exists ? "Username already exists" : ""}</Label>
                <br />

                <Button
                    variant={"outline"}
                    disabled={exists || username.length < 5}
                    onClick={async (e) => {
                        e.preventDefault();
                        // console.log("yoo");
                        const newuser = await createUser(
                            username,
                            user.id,
                            user.firstName,
                            user.lastName,
                            user.emailAddresses[0].emailAddress,
                            user.profileImageUrl
                        );
                        // console.log(newuser);
                        setExists(!newuser);
                        if (newuser) router.push("/dashboard");
                    }}
                >
                    Create User
                </Button>
            </form>
        </div>
    );
}
