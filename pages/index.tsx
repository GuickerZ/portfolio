import { NextPage } from "next";
import Image from "next/image";
import WindowLayout from "@/components/WindowLayout";
import styles from "@/styles/styles.module.css"; // Import the CSS file

const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center p-5 bg-zinc-900">
			<WindowLayout>
				<div className="flex flex-col gap-2 items-center justify-center w-full h-full">
					<div className={styles.avatarContainer}>
						<Image
							src="/avatar.jpeg"
							alt="Guilherme Matias Avatar"
							width={150}
							height={150}
							className="rounded-xl mb-5"
						/>
						<Image
							src="/38ba414ff8886af9e60389eaf61d5833.jpg" // Replace with the URL of the other image
							alt="Gato terno foda 2k23"
							width={150}
							height={150}
							className={`rounded-xl mb-5 ${styles.avatarBack}`} // Add the "hidden" class to hide the image
						/>
					</div>
					<h1 className="text-center text-4xl text-zinc-100 font-bold select-none">Guilherme Matias</h1>
					<h2 className="text-center text-xl text-blue-500 select-none">Back-end Developer</h2>
				</div>
			</WindowLayout>
		</div>
	);
};

export default Home;
