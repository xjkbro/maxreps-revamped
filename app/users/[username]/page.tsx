import { prisma } from "@/lib/db";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import StatusCard from "@/components/StatusCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePicker } from "@/components/DatePicker";
import { WorkoutLogs } from "@/components/WorkoutLogs";

export default async function User({
    params,
}: {
    params: { username: string };
}) {
    const user = await prisma.user.findUnique({
        where: {
            username: params.username,
        },
        include: { posts: true },
    });
    console.log(user);
    return (
        <div className="pb-12 max-w-[75%] mx-auto my-4 ">
            <section className="flex gap-12 items-center p-8">
                <Avatar className="w-56 h-56">
                    <AvatarImage src={user.avatar} height={100} width={100} />
                    <AvatarFallback>
                        {user.firstName.substr(0, 1)}
                        {user.lastName.substr(0, 1)}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-3xl font-semibold mb-2">
                        {user.username}
                    </h1>
                    <p>
                        {user?.bio
                            ? user?.bio
                            : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque perspiciatis impedit."}
                    </p>
                    <Separator className="my-2" />
                    <div className="flex h-5 items-center space-x-4 text-sm">
                        <div>190lbs</div>
                        <Separator orientation="vertical" />
                        <div>{`5' 10"`}</div>
                        <Separator orientation="vertical" />
                        <div>EOS Fitness</div>
                    </div>
                </div>
            </section>
            <section className="">
                <Tabs defaultValue="posts" className="">
                    <TabsList>
                        <TabsTrigger value="posts">Posts</TabsTrigger>
                        <TabsTrigger value="workouts">Workouts</TabsTrigger>
                        <TabsTrigger value="food">Food Diary</TabsTrigger>
                    </TabsList>
                    <TabsContent value="posts">
                        <Card className="">
                            <CardHeader>
                                <CardTitle>Posts</CardTitle>
                                {/* <CardDescription></CardDescription> */}
                            </CardHeader>
                            <CardContent>
                                {user?.posts.map((post) => (
                                    <div key={post.id} className="my-2">
                                        <StatusCard post={post} />
                                    </div>
                                ))}
                            </CardContent>
                            <CardFooter className="flex justify-between"></CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="workouts">
                        <Card className="">
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <CardTitle>Workouts</CardTitle>
                                    <CardDescription>
                                        <DatePicker />
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <WorkoutLogs />
                            </CardContent>
                            <CardFooter className="flex justify-between"></CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="food">
                        <Card className="">
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <CardTitle>Food Diary</CardTitle>
                                    <CardDescription>
                                        <DatePicker />
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {user?.posts.map((post) => (
                                    <div key={post.id} className="my-2">
                                        <StatusCard post={post} />
                                    </div>
                                ))}
                            </CardContent>
                            <CardFooter className="flex justify-between"></CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </section>
            <section className="flex gap-4"></section>
        </div>
    );
}
