import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export default async function Home() {
	const session = await getServerSession(authOptions);

	return <pre>{JSON.stringify(session)}</pre>;
}
