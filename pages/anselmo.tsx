import { NextPage } from "next";
import Image from "next/image";

import WindowLayout from "@/components/WindowLayout";

const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center p-5 bg-zinc-900">
			<WindowLayout>
				<div className="flex flex-col gap-2 items-center justify-center w-full h-full">
					<h2 className="text-center text-xl text-green-500 select-none">Anselmo te ama S2</h2>
					<Image
						src="/352796922_1710194966089306_8989713870459742730_n.png"
						alt="😍"
						width={600}
						height={600}
						className="rounded-xl mb-5"
					/>
				</div>
			</WindowLayout>
		</div>
	);
};

export default Home;
