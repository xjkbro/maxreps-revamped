"use client";
import { prisma } from "@/lib/db";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LikeButtons({ post }) {
    const { user } = useUser();
    const userId = user?.id;
    const [found, setFound] = useState(
        post?.likes.find((likedUsers) => likedUsers.likeId == userId)
            ? true
            : false
    );
    const addLike = async () => {
        const { status } = await fetch(
            "http://localhost:3000/api/posts/likes",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    action: "add",
                    userId,
                    postId: post.id,
                }),
            }
        );
        if (status == 200) setFound(true);
    };
    const removeLike = async () => {
        const { status } = await fetch(
            "http://localhost:3000/api/posts/likes",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    action: "remove",
                    userId,
                    postId: post.id,
                }),
            }
        );
        if (status == 200) setFound(false);
    };

    if (found)
        return (
            <Button onClick={removeLike} className="text-xs">
                ({post.likes.length}) Like
            </Button>
        );
    else
        return (
            <Button onClick={addLike} variant={"outline"} className="text-xs">
                ({post.likes.length}) Like
            </Button>
        );
}
