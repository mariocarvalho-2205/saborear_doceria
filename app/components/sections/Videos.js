import { motion } from "framer-motion";


export default function Videos() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="py-28 bg-gradient-to-r from-[#f9edec] to-[#fbf8f7]"
			id="videos"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-saturnus">
					Processo de Criação
				</h2>
				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<div className="aspect-video">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/watch?v=Fd7pgu4Hne0&list=PLscIPm8DKw173OR-kAcWXR16CJ0nGIAHg&index=16&ab_channel=MiguelBozer"
							title="Processo de Confeitaria"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="rounded-lg shadow-lg"
						></iframe>
					</div>
					<div className="aspect-video">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/watch?v=A-pcSL2_-1U&list=PLDQQhuqcaSWITyhq7rBkL_J4IRqU4Y5be&index=28&ab_channel=Dk-Trader"
							title="Decoração de Bolos"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="rounded-lg shadow-lg"
						></iframe>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
