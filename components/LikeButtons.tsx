"use client";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addLike, removeLike } from "@/lib/_actions/likes";

export const revalidate = 0;
export default function LikeButtons({ post, userLiked }) {
    const { user } = useUser();
    const userId = user?.id;
    const [found, setFound] = useState(userLiked);
    return (
        <Button
            onClick={() => {
                if (found) {
                    removeLike(post.id, userId);
                    setFound(false);
                } else {
                    addLike(post.id, userId);
                    setFound(true);
                }
            }}
            variant={found ? "default" : "outline"}
            className="text-xs"
        >
            ({post.likes.length}) Like
        </Button>
    );
}
