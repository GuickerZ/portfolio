import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import WindowLayout from "@/components/WindowLayout";
import {
	AiOutlineInstagram as Instagram
} from "react-icons/ai";
const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center p-5 bg-zinc-900">
			<WindowLayout>
				<div className="flex flex-col gap-2 items-center justify-center w-full h-full">
					<h2 className="text-center text-xl text-white-500 select-none">Amor de mi vida 💍🫶</h2>
					<Image
						src="/amordimyvida.jpg"
						alt="😍"
						width={350}
						height={300}
						className="rounded-xl mb-5"
					/>
					<Link
						href="https://www.instagram.com/geovana_ferro_/"
						className="group flex items-center justify-center w-full px-2 py-3 border-x-2 border-transparent hover:bg-slate-700 transition-colors cursor-pointer"
					>
						<Instagram className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
					@geovana_ferro_
					</Link>
				</div>
			</WindowLayout>
		</div>
	);
};

export default Home;
