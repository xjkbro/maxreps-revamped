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

export default function UpdateStatusCard() {
    return (
        <Card className="w-full">
            <div className="flex items-center justify-between gap-4 p-4">
                <div className="flex gap-4 items-center">
                    <Avatar className="">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardHeader className="p-0">
                        <CardTitle className="flex gap-4">
                            <Link href="/dashboard">@shadcn</Link>
                        </CardTitle>
                    </CardHeader>
                </div>
            </div>
            <hr />
            <div className="p-4">
                <CardContent className="p-0 mb-4 w-full">
                    <Textarea placeholder="Type your message here." />
                </CardContent>
                <CardFooter className="p-0 flex gap-4 w-full text-sm text-gray-500">
                    <Button variant={"outline"}>Update</Button>
                </CardFooter>
            </div>
        </Card>
    );
}
