export async function POST(request: Request) {
    const res = await request.json();
    console.log(res);
    return new Response("Hello, Next.js!");
}
