import { motion } from "framer-motion";

export default function Hero() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#f9edec] to-[#fbf8f7] pt-16"
			id="home"
		>
			<div className="container mx-auto px-4 text-center ">
				<h1 className="text-4xl md:text-6xl font-bold font-saturnus mb-6">
					Transformamos Momentos em Doces Memórias
				</h1>
				<h2 className="text-xl md:text-2xl  mb-8">
					{/* Bolos artesanais que encantam olhos e paladares */}
                    Bem vindo à Saborear Doceria Salvador, onde transformamos
					sonhos em realidade com bolos e doces únicos que encantam todos os sentidos.
					Somos especialistas em confeitaria criativa, inclusive bolos com efeitos especiais.
                    Nossa equipe combina técnica impecável e inovação para criar pelas que são verdadeiras obras de arte comestiveis.
				</h2>
				
				<a
					href="#contato"
					className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg hover:bg-pink-600 transition-colors "
				>
					Faça seu Pedido
				</a>
			</div>
		</motion.section>
	);
}
