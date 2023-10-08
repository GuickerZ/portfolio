import { NextPage } from "next";

import WindowLayout from "@/components/WindowLayout";

const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center p-5 bg-zinc-900">
			<WindowLayout>
				<div className="flex flex-col gap-2 items-center justify-center w-full h-full">
					<h2 className="text-center text-xl text-green-500 select-none">TOP 10 PORTFOLIOS</h2>
					{/* Add the iframe to embed the YouTube video with autoplay */}
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/oowBXzfcl90?autoplay=1" // URL of the video with autoplay
						title="YouTube Video"
						allowFullScreen
					/>
				</div>
			</WindowLayout>
		</div>
	);
};

export default Home;
