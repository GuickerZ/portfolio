import { NextPage } from "next";
import Image from "next/image";

import WindowLayout from "@/components/WindowLayout";

const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center p-5 bg-zinc-900">
			<WindowLayout>
				<div className="flex flex-col gap-2 items-center justify-center w-full h-full">
					<h2 className="text-center text-xl text-green-500 select-none">Sla oque boto aqui :D</h2>
					<Image
						src="/9c9ef98e3e100787f2b25c52f8420266.jpg"
						alt="🤓"
						width={150}
						height={150}
						className="rounded-xl mb-5"
					/>
				</div>
				<Image
						src="/9c9ef98e3e100787f2b25c52f8420266.jpg"
						alt="🤓"
						width={150}
						height={150}
						className="rounded-xl mb-5"
					/>
				<div>
					
				</div>
			</WindowLayout>
		</div>
	);
};

export default Home;
