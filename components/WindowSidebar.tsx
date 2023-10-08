import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
	VscHome as Home,
	VscSearch as About,
	VscSourceControl as SourceCode,
	VscAccount as Account,
	VscSettingsGear as SettingsGear,
} from "react-icons/vsc";
import {
	AiOutlineWhatsApp as WhatsApp,
	AiOutlineInstagram as Instagram,
	AiOutlineLinkedin as Linkedin,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const WindowSidebar: React.FC = () => {
	const router = useRouter();

	return (
		<div className="col-span-1 flex flex-col justify-between bg-slate-800">
			<div className="flex flex-col items-center">
				<Link
					href="/"
					className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${
						router.route == "/" ? "border-l-slate-500" : ""
					} hover:bg-slate-700 transition-colors cursor-pointer`}
				>
					<Home className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</Link>
				<Link
					href="/about"
					className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${
						router.route.startsWith("/about") ? "border-l-slate-500" : ""
					} hover-bg-slate-700 transition-colors cursor-pointer`}
				>
					<About className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</Link>

				<Link
					href="/source-code"
					className={`group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent ${
						router.route.startsWith("/source-code") ? "border-l-slate-500" : ""
					} hover:bg-slate-700 transition-colors cursor-pointer`}
				>
					<SourceCode className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</Link>
				<Link
					href="https://x.com/guicker_"
					className="group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent hover:bg-slate-700 transition-colors cursor-pointer"
				>
					<FaXTwitter className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</Link>
				<Link
					href="https://wa.me/5587999084193"
					className="group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent hover:bg-slate-700 transition-colors cursor-pointer"
				>
					<WhatsApp className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</Link>
				<Link
					href="https://www.instagram.com/guilhermematiasss/"
					className="group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent hover:bg-slate-700 transition-colors cursor-pointer"
				>
					<Instagram className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</Link>
				<Link
					href="https://www.linkedin.com/in/guicker/"
					className="group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent hover:bg-slate-700 transition-colors cursor-pointer"
				>
					<Linkedin className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
				</Link>
			</div>
			<div className="flex flex-col items-center px-2 py-3 gap-5">
				<Link
					href="/perfil"
					className={`${
						router.route.startsWith("/perfil") ? "border-l-slate-500" : ""
					} hover:bg-slate-700 transition-colors cursor-pointer`}
				>
					<Account className="text-zinc-400 text-2xl hover:text-zinc-200 cursor-pointer" />
				</Link>

				<SettingsGear className="text-zinc-400 text-2xl hover:text-zinc-200 cursor-pointer" />
			</div>
		</div>
	);
};

export default WindowSidebar;
