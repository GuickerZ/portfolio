
import { NextPage } from "next";
import Image from "next/image";
import WindowLayout from "@/components/WindowLayout";
import styles from "@/styles/styles.module.css";

import React, { useState, useRef } from "react";


const Home: NextPage = () => {
	const [hoveredLogo, setHoveredLogo] = useState(""); // Estado para controlar qual logo está sendo hover
	const [muted, setMuted] = useState(true); // Estado para controlar o mudo
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const handleSpaceBar = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === " ") {
			event.preventDefault(); // Evitar o scroll da página ao pressionar a barra de espaço
			if (videoRef.current) {
				if (videoRef.current.paused) {
					videoRef.current.play();
				} else {
					videoRef.current.pause();
				}
			}
		}
	};

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted;
			setMuted(videoRef.current.muted);
		}
	};
	return (

		<div
			className="w-screen h-screen flex items-center justify-center p-5 bg-black/20"
			onKeyDown={handleSpaceBar}
			tabIndex={0}
		>
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

					</i>
				</div>

			</WindowLayout>
			<video
				ref={videoRef}
				autoPlay
				loop
				muted={muted}
				className="fixed inset-0 w-full h-full object-cover z-[-1]"
			>
				<source src="https://cdn.discordapp.com/attachments/1099519182648918026/1160791461537796106/FUNK_CIRCULATION.mp4" type="video/mp4" />
				Seu navegador não suporta o elemento de vídeo.
			</video>

			{/* Botão de mute */}
			<button
				onClick={toggleMute}
				className="fixed top-4 right-4 bg-gray-900/80 p-2 rounded-full shadow-md"
			>
				{muted ? "🔈" : "🔊"}
			</button>
		</div>
	);
};

export default Home;
