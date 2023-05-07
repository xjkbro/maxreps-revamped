import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import format from "date-fns/format";
import { formatDistance } from "date-fns";
import { auth } from "@clerk/nextjs/app-beta";

export default function StatusCard({ post }) {
    // console.log(post);
    const { userId } = auth();
    return (
        <Card className="">
            <div className="flex items-center justify-between gap-4 p-4">
                <div className="flex gap-4 items-center">
                    <Avatar className="">
                        <AvatarImage src={post.user.avatar} />
                        <AvatarFallback>
                            {post.user.firstName.substr(0, 1)}
                            {post.user.lastName.substr(0, 1)}
                        </AvatarFallback>
                    </Avatar>
                    <CardHeader className="p-0">
                        <CardTitle className="flex gap-4">
                            <Link href="/dashboard">@{post.user.username}</Link>
                        </CardTitle>
                    </CardHeader>
                </div>
                <Button variant={"outline"} disabled={post.userId == userId}>
                    <Heart />
                    <span className="pl-2">Follow</span>
                </Button>
            </div>
            <hr />
            <div className="p-4">
                <CardContent className="p-0 mb-4 min-h-[2rem]">
                    <p>{post.content}</p>
                </CardContent>
                <CardFooter className="p-0 flex justify-between w-full text-sm text-gray-500">
                    <div className="gap-4 flex ">
                        <Button variant={"outline"} className="text-xs">
                            ({post.likes}) Like
                        </Button>
                        <Button variant={"outline"} className="text-xs">
                            ({post.comments.length}) Comment
                        </Button>
                    </div>
                    <span>
                        {formatDistance(new Date(post.createdAt), new Date(), {
                            addSuffix: true,
                        })}
                    </span>
                    {/* <span>Feb 23, 2023 @ 10:45am</span> */}
                </CardFooter>
            </div>
        </Card>
    );
}

// async function getPost();
