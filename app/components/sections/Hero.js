import { motion } from "framer-motion";

export default function Hero() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="scroll-mt-4 min-h-screen flex items-center justify-center bg-gradient-to-r from-[#f9edec] to-[#fbf8f7] pt-16 px-6"
			id="home"
		>
			<div className="container mx-auto px-4 text-center ">
				<h1 className="text-4xl md:text-6xl font-bold font-saturnus mb-8">
					Transformamos Momentos em Doces Memórias
				</h1>
				<p className="text-base text-justify md:text-2xl  mb-12">
					{/* Bolos artesanais que encantam olhos e paladares */}
                    Bem vindo à Saborear Doceria Salvador, onde transformamos
					sonhos em realidade com bolos e doces únicos que encantam todos os sentidos.
					Somos especialistas em confeitaria criativa, inclusive bolos com efeitos especiais.
                    Nossa equipe combina técnica impecável e inovação para criar pelas que são verdadeiras obras de arte comestiveis.
				</p>
				
				<a
					href="#contato"
					className="bg-[#802424] text-white px-8 py-4 rounded-full text-lg hover:bg-[#E6B0AA] transition-colors btn"
				>
					Faça seu Pedido
				</a>
			</div>
		</motion.section>
	);
}
