import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "MaxReps",
    description: "Generated by create next app",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="h-full bg-gray-50">
            <Navbar />
            <section>{children}</section>
        </main>
    );
}