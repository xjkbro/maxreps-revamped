import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";

export default async function NewAccount() {
    const user = await currentUser();
    if (user != null) {
        const find = await prisma.user.findUnique({
            where: { userId: user.id },
        });
        if (find) redirect("/dashboard");
        else {
            await prisma.user.create({
                data: {
                    userId: user.id,
                    firstName: user?.firstName,
                    lastName: user?.lastName,
                    email: user?.emailAddresses[0].emailAddress,
                    avatar: user?.profileImageUrl,
                },
            });
            redirect("/dashboard");
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col item-center justify-center">
            <h1>Setting Up your account...</h1>
        </div>
    );
}
