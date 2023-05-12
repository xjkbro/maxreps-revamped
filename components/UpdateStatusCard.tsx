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
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/app-beta";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { MultiUploader } from "./MultiUploader";

export default async function UpdateStatusCard() {
    const { userId } = auth();
    const user = await currentUser();

    async function addUpdate(data) {
        "use server";
        await prisma.post.create({
            data: { content: data.get("status"), userId: userId },
        });
        redirect("/dashboard");
    }
    return (
        <Card className="w-full">
            <div className="flex items-center justify-between gap-4 p-4">
                <div className="flex gap-4 items-center">
                    <Avatar className="">
                        <AvatarImage src={user?.profileImageUrl} />
                        <AvatarFallback>
                            {user?.firstName?.substr(0, 1)}
                            {user?.lastName?.substr(0, 1)}
                        </AvatarFallback>
                    </Avatar>
                    <CardHeader className="p-0">
                        <CardTitle className="flex gap-4">
                            <Link href="/dashboard">Update Status</Link>
                        </CardTitle>
                    </CardHeader>
                </div>
            </div>
            <hr />
            <form action={addUpdate} className="p-4">
                <CardContent className="p-0 mb-4 w-full">
                    <Textarea
                        name="status"
                        placeholder="Type your message here."
                    />
                    <MultiUploader />
                </CardContent>
                <CardFooter className="p-0 flex gap-4 w-full text-sm text-gray-500">
                    <Button type="submit" variant={"outline"}>
                        Update
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
