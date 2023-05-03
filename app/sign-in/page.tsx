import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
    return (
        <main className="flex justify-center items-center w-full h-screen">
            <SignIn redirectUrl={"/dashboard"} />
        </main>
    );
}
