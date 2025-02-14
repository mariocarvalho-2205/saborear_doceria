// app/layout.js
import "./globals.css";

const url = "https://saboreardoceria.vercel.app";
export const metadata = {
	title: "Saborear Doceria - Bolos Artesanais para Momentos Especiais",
	description: `Bem vindo à Saborear Doceria Salvador, onde transformamos
					sonhos em realidade com bolos e doces únicos que encantam todos os sentidos.
					Somos especialistas em confeitaria criativa, inclusive bolos com efeitos especiais.
                    Nossa equipe combina técnica impecável e inovação para criar verdadeiras obras de arte comestiveis.`,
	metadataBase: new URL("https://saboreardoceria.vercel.app"),
	icons: {
		icon: "/favicon.png", // ou "/favicon.png" se for PNG
	},
	keywords: `bolos confeitados, bolos de casamento, bolos de aniversário, bolos de formatura, confeitaria artesanal, doceria, bolos personalizados, bolos em salvador, bolos deliciosos, bolo artesanal`,
	openGraph: {
		title: "Saborear Doceria - Bolos Artesanais para Momentos Especiais",
		description:
			"Especialistas em bolos confeitados para aniversários, casamentos e formaturas.",
		images: [
			`${url}/gallery/gallery-1.jpg`,
			`${url}/gallery/gallery-2.jpg`,
			`${url}/gallery/gallery-3.jpg`,
			`${url}/gallery/gallery-4.jpg`,
			`${url}/gallery/gallery-5.jpg`,
			`${url}/gallery/gallery-6.jpg`,
			`${url}/gallery/gallery-7.jpg`,
			`${url}/gallery/gallery-8.jpg`,
			`${url}/gallery/gallery-9.jpg`,
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<head>
				<link
					href="https://fonts.cdnfonts.com/css/saturnus"
					rel="stylesheet"
				/>
				<meta name="robots" content="index,follow" />
			</head>
			<body>{children}</body>
		</html>
	);
}
