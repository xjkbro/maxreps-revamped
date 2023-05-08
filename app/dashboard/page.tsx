import StatusCard from "@/components/StatusCard";
import UpdateStatusCard from "@/components/UpdateStatusCard";
import { LocationPicker } from "@/components/LocationPicker";
import { Skeleton } from "@/components/ui/skeleton";
import { prisma } from "@/lib/db";

export default async function Dashboard() {
    const posts = await getPosts();

    return (
        <div className="pb-12 max-w-[75%] mx-auto">
            <div className="flex items-center gap-4">
                <h1 className="my-4 text-4xl font-bold">Dashboard</h1>
                <LocationPicker />
            </div>
            <section className="flex gap-4">
                <div className="w-2/3 flex flex-col gap-4 overflow-y-hidden h-fit">
                    {posts?.length > 0 ? (
                        posts.map((post, index) => (
                            <StatusCard key={index} post={post} />
                        ))
                    ) : (
                        <div>No Posts Available</div>
                    )}
                </div>
                <div className="w-1/3">
                    <UpdateStatusCard />
                </div>
            </section>
        </div>
    );
}

const getPosts = async () => {
    // "use server";
    // const prisma = new PrismaClient();
    const posts = await prisma.post.findMany({
        include: { user: true, likes: true, comments: true },
        take: 20,
        orderBy: {
            createdAt: "desc",
        },
    });
    console.log(posts[0]);
    return posts;
};
