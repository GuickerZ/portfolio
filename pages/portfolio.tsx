import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPython, BiLogoNodejs, BiLogoVisualStudio } from "react-icons/bi";
import { DiNpm, DiMysql } from "react-icons/di";
import { useState } from "react"; // Import useState

import { NextPage } from "next";
import Image from "next/image";
import WindowLayout from "@/components/WindowLayout";
import styles from "@/styles/styles.module.css";


const Home: NextPage = () => {
	const [hoveredLogo, setHoveredLogo] = useState(""); // Estado para controlar qual logo está sendo hover

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
							src="/38ba414ff8886af9e60389eaf61d5833.jpg"
							alt="Gato terno foda 2k23"
							width={150}
							height={150}
							className={`rounded-xl mb-5 ${styles.avatarBack}`}
						/>
					</div>
					<h1 className="text-center text-4xl text-zinc-100 font-bold select-none">
						Guilherme Matias
					</h1>
					<h2 className="text-center text-xl text-blue-500 select-none">
						Back-end Developer
					</h2>

					<div className="flex gap-4 mt-4">
						<div
							className="text-center cursor-pointer"
							onMouseEnter={() => setHoveredLogo("JavaScript")}
							onMouseLeave={() => setHoveredLogo("")}
						>
							<RiJavascriptFill className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
							{hoveredLogo === "JavaScript" && (
								<div className={styles.tooltip}>JavaScript</div>
							)}
						</div>
						<div
							className="text-center cursor-pointer"
							onMouseEnter={() => setHoveredLogo("BiLogoNodejs")}
							onMouseLeave={() => setHoveredLogo("")}
						>
							<BiLogoNodejs className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
							{hoveredLogo === "BiLogoNodejs" && (
								<div className={styles.tooltip}>Node.js</div>
							)}
						</div>
						<div
							className="text-center cursor-pointer"
							onMouseEnter={() => setHoveredLogo("DiNpm")}
							onMouseLeave={() => setHoveredLogo("")}
						>
							<DiNpm className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
							{hoveredLogo === "DiNpm" && (
								<div className={styles.tooltip}>npm</div>
							)}
						</div>
						<div
							className="text-center cursor-pointer"
							onMouseEnter={() => setHoveredLogo("BiLogoPython")}
							onMouseLeave={() => setHoveredLogo("")}
						>
							<BiLogoPython className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
							{hoveredLogo === "BiLogoPython" && (
								<div className={styles.tooltip}>Python</div>
							)}
						</div>
						<div
							className="text-center cursor-pointer"
							onMouseEnter={() => setHoveredLogo("DiMysql")}
							onMouseLeave={() => setHoveredLogo("")}
						>
							<DiMysql className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
							{hoveredLogo === "DiMysql" && (
								<div className={styles.tooltip}>Mysql</div>
							)}
						</div>
						<div
							className="text-center cursor-pointer"
							onMouseEnter={() => setHoveredLogo("BiLogoVisualStudio")}
							onMouseLeave={() => setHoveredLogo("")}
						>
							<BiLogoVisualStudio className="text-zinc-400 text-2xl group-hover:text-zinc-100" />
							{hoveredLogo === "BiLogoVisualStudio" && (
								<div className={styles.tooltip}>VSCode</div>
							)}
						</div>
					</div>
				</div>
			</WindowLayout>
		</div>
	);
};

export default Home;
