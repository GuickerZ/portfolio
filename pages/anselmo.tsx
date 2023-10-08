import { NextPage } from "next";
import Image from "next/image";

import WindowLayout from "@/components/WindowLayout";

const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center p-5 bg-zinc-900">
			<WindowLayout>
				<div className="flex flex-col gap-2 items-center justify-center w-full h-full">
					<h2 className="text-center text-xl text-white-500 select-none">ANSELMO & MARILHA 😍</h2>
					<Image
						src="/anselmo.png"
						alt="😍"
						width={500}
						height={500}
						className="rounded-xl mb-5"
					/>
					<Image
						src="/352796922_1710194966089306_8989713870459742730_n.png"
						alt="😍"
						width={500}
						height={500}
						className="rounded-xl mb-5"
					/>
				</div>
			</WindowLayout>
		</div>
	);
};

export default Home;
