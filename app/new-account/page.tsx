import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";
import CreateUsername from "./CreateUsername";
import UserCreation from "./UserCreation";
export default async function NewAccount() {
    const user = await currentUser();

    if (user != null) {
        const find = await prisma.user.findUnique({
            where: { userId: user.id },
        });
        if (find) redirect("/dashboard");
    }
    const usernames = await prisma.user.findMany({
        select: { username: true },
    });

    console.log(usernames);
    return (
        <div className="w-screen h-screen flex flex-col item-center justify-center">
            <h1>Setting Up your account...</h1>
            <CreateUsername
                user={user}
                usernames={Array.from(usernames.map((user) => user.username))}
            />
            <span>================</span>
            <UserCreation user={user} />
        </div>
    );
}
