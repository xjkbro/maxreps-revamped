import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import format from "date-fns/format";
import { formatDistance } from "date-fns";
import { auth } from "@clerk/nextjs/app-beta";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/db";
import LikeButtons from "./LikeButtons";

import { addLike, removeLike } from "@/lib/_actions/likes";
import { getPost } from "@/lib/_actions/posts";
export default async function StatusCard({ post: status }) {
    console.log(status);
    const { userId } = auth();
    const post = await getPost(status.id);
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
                            <Link href={`/users/${post.user.username}`}>
                                {post.user.username}
                            </Link>
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
                        <LikeButtons
                            post={post}
                            userLiked={
                                post.likes.find(
                                    (likedUsers) => likedUsers.likeId === userId
                                )
                                    ? true
                                    : false
                            }
                        />

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={"outline"} className="text-xs">
                                    ({post.comments.length}) Comment
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Comments</DialogTitle>

                                    <DialogDescription className=" flex flex-col gap-2 pt-2 my-2">
                                        <div className="h-96 overflow-y-scroll my-2">
                                            {[1, 2, 3, 4, 5].map((comment) => (
                                                <p
                                                    key={comment}
                                                    className="m-4"
                                                >
                                                    <Link
                                                        className="font-semibold hover:underline"
                                                        href={`/users/${post.user.username}`}
                                                    >
                                                        {post.user.username}
                                                    </Link>
                                                    {": "}
                                                    <span>
                                                        Lorem ipsum dolor sit
                                                        amet consectetur
                                                        adipisicing elit.
                                                        Sapiente nobis id harum
                                                        nulla corporis, nemo
                                                        fuga odit nam maxime
                                                        doloribus veritatis
                                                        incidunt quidem
                                                        repellendus voluptate
                                                        velit cumque omnis
                                                        minima necessitatibus
                                                        aspernatur aperiam.
                                                    </span>
                                                </p>
                                            ))}
                                        </div>
                                        <h3 className="font-bold">
                                            Add a Comment
                                        </h3>
                                        <Textarea maxLength={255} />
                                        <Button
                                            variant={"outline"}
                                            className="text-xs w-fit self-end "
                                        >
                                            Comment
                                        </Button>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                        {/* <Button variant={"outline"} className="text-xs">
                            ({post.comments.length}) Comment
                        </Button> */}
                    </div>
                    <span>
                        {formatDistance(new Date(post.createdAt), new Date(), {
                            addSuffix: true,
                        })}
                    </span>
                    {/* <span>Feb 23, 2023 @ 10:45am</span> */}
                </CardFooter>
                {/* <div className="border-t mt-2">
                    <div className="p-4">
                        <div className="flex gap-3">
                            <Avatar className="">
                                <AvatarImage src={post.user.avatar} />
                                <AvatarFallback>
                                    {post.user.firstName.substr(0, 1)}
                                    {post.user.lastName.substr(0, 1)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="mb-2 font-semibold">
                                    <Link href={`/users/${post.user.username}`}>
                                        @{post.user.username}
                                    </Link>
                                </span>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sapiente nobis id harum
                                    nulla corporis, nemo fuga odit nam maxime
                                    doloribus veritatis incidunt quidem
                                    repellendus voluptate velit cumque omnis
                                    minima necessitatibus aspernatur aperiam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </Card>
    );
}

// async function getPost();
