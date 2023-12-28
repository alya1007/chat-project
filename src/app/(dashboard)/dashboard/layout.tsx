import { Icon, Icons } from "@/components/Icons";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FC, ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}

type SideBarOption = {
	id: number;
	name: string;
	href: string;
	icon: Icon;
	// current: boolean;
};

const sideBarOptions: SideBarOption[] = [
	{
		id: 1,
		name: "Add Friend",
		href: "/dashboard/add",
		icon: "UserPlus",
	},
	{
		id: 2,
		name: "Chats",
		href: "/dashboard/add",
		icon: "UserPlus",
	},
	{
		id: 3,
		name: "Settings",
		href: "/dashboard/add",
		icon: "UserPlus",
	},
];
const Layout = async ({ children }: LayoutProps) => {
	const session = getServerSession(authOptions);

	if (!session) notFound();

	return (
		<div className="w-full flex h-screen">
			<div className="flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 ">
				<Link href="/dashboard" className="flex h-16 shrink-0 items-center">
					<Icons.Logo className="h-8 w-auto text-indigo-600" />
				</Link>
				<div className="text-xs font-semibold leading-6 text-gray-400">
					Your Chats
				</div>

				<nav className="flex flex-1 flex-col">
					<ul role="list" className="flex flex-1 flex-col gap-y-7">
						<li>Chats that the user has</li>
						<li>
							<div className="text-sm font-semibold leading-6 text-gray-400">
								Overview
							</div>
							<ul role="list" className="-mx-2 mt-2 space-y-1">
								{sideBarOptions.map((option) => {
									const Icon = Icons[option.icon];

									return (
										<li key={option.id}>
											<Link href={option.href} className=""></Link>
										</li>
									);
								})}
							</ul>
						</li>
					</ul>
				</nav>
			</div>
			{children}
		</div>
	);
};

export default Layout;
