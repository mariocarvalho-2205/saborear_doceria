"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css"
/*
Vinho profundo #802424
Rosa Claro Blush #FADBD8
Rosa Pastel Antigo #E6B0AA
Banco Perola #FDFEFE
Cinza Suave #D5D8DC

Fonte - Saturnus
*/
export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="fixed w-full bg-[#FADBD8] backdrop-blur-sm z-50 shadow-md text-[#802424] font-bold font-saturnus">
			<div className="container mx-auto px-4 py-5 flex justify-between items-center text-xl">
				<div className={`${styles.navbar_container} `}>
					<Image
						src="/gallery/logo.png"
						alt="Saborear Doceria"
						width={46}
						height={20}
						className="mr-4"
					/>
					<h1 ><a href="#home">Saborear Doceria</a></h1>
				</div>
				<div className="hidden md:flex space-x-6">
					<a
						href="#sobre"
						className=" hover:text-[#E6B0AA] transition-colors"
					>
						Sobre
					</a>
					<a
						href="#galeria"
						className=" hover:text-[#E6B0AA] transition-colors"
					>
						Galeria
					</a>
					<a
						href="#eventos"
						className=" hover:text-[#E6B0AA] transition-colors"
					>
						Eventos
					</a>
					<a
						href="#videos"
						className=" hover:text-[#E6B0AA] transition-colors"
					>
						Videos
					</a>
					<a
						href="#contato"
						className=" hover:text-[#E6B0AA] transition-colors"
					>
						Contato
					</a>
				</div>
				<button
					className="md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>

			{/* Menu mobile */}
			{isMenuOpen && (
				<div className="md:hidden bg-white border-t">
					<div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
						<a
							href="#sobre"
							className="text-gray-600 hover:text-pink-500"
						>
							Sobre
						</a>
						<a
							href="#galeria"
							className="text-gray-600 hover:text-pink-500"
						>
							Galeria
						</a>
						<a
							href="#eventos"
							className="text-gray-600 hover:text-pink-500"
						>
							Eventos
						</a>
						<a
							href="#contato"
							className="text-gray-600 hover:text-pink-500"
						>
							Contato
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}
