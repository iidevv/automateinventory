import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function loginIsRequired() {
    const session = await getServerSession();

    if (!session) return redirect("/api/auth/signin");
}