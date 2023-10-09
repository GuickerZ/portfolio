
import { NextPage } from "next";
import Image from "next/image";
import WindowLayout from "@/components/WindowLayout";
import styles from "@/styles/styles.module.css";

import React, { useState } from "react";


const Home: NextPage = () => {
	const [hoveredLogo, setHoveredLogo] = useState("");
	return (
		
		<div className="w-screen h-screen flex items-center justify-center p-5 bg-zinc-900">
			<WindowLayout>
				<div className="flex flex-col gap-2 items-center justify-center w-full h-full">
					<div className={styles.avatarContainer}>
						<Image
							src="https://cdn.discordapp.com/avatars/738200239395176499/7352bb80871429d9a306758682604bd2.webp"
							alt="guicker avatar"
							width={150}
							height={150}
							className="rounded-full mb-5"
						/>
					</div>
					<h1 className="text-center text-4xl text-zinc-100 font-bold select-none">
						Guicker
					</h1>
					<h2 className="text-center text-xl text-blue-500 select-none">
						@guicker
					</h2>

					<div className="flex gap-4 mt-4">
						<div
							className="text-center cursor-pointer"
							onMouseEnter={() => setHoveredLogo("HypeSquad")}
							onMouseLeave={() => setHoveredLogo("")}
						>
							<Image
								src="https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png"
								alt="Brilliance do HypeSquad"
								width={30}
								height={30}
							/>
							{hoveredLogo === "HypeSquad" && (
								<div className={styles.tooltip}>Brilliance do HypeSquad</div>
							)}
						</div>
						<div
							className="text-center cursor-pointer"
							onMouseEnter={() => setHoveredLogo("Nitro")}
							onMouseLeave={() => setHoveredLogo("")}
						>
							<Image
								src="https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png"
								alt="Assinante desde 9 de mai. de 2023"
								width={30}
								height={30}
							/>
							{hoveredLogo === "Nitro" && (
								<div className={styles.tooltip}>Assinante desde 9 de mai. de 2023</div>
							)}
						</div>
						<div
							className="text-center cursor-pointer"
							onMouseEnter={() => setHoveredLogo("Boost")}
							onMouseLeave={() => setHoveredLogo("")}
						>
							<Image
								src="https://cdn.discordapp.com/badge-icons/72bed924410c304dbe3d00a6e593ff59.png"
								alt="Impulsionando o servidor desde 9 de mai. de 2023"
								width={30}
								height={30}
							/>
							{hoveredLogo === "Boost" && (
								<div className={styles.tooltip}>Impulsionando o servidor desde 9 de mai. de 2023</div>
							)}
						</div>
						<div
							className="text-center cursor-pointer"
							onMouseEnter={() => setHoveredLogo("prefix")}
							onMouseLeave={() => setHoveredLogo("")}
						>
							<Image
								src="https://cdn.discordapp.com/badge-icons/6de6d34650760ba5551a79732e98ed60.png"
								alt="Originalmente Guicker#0001"
								width={30}
								height={30}
							/>
							{hoveredLogo === "prefix" && (
								<div className={styles.tooltip}>Originalmente Guicker#0001</div>
							)}

						</div>

					</div>
					<i className="text-center select-none">
4
					</i>
				</div>

			</WindowLayout>
		</div>


	);
};

export default Home;
