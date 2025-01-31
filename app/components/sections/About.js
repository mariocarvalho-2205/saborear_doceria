import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
	{
		/* About Section */
	}
	return (
		<motion.section
			id="sobre"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="py-28 bg-white"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-saturnus">
                A doce arte de saborear a vida
				</h2>
				<div className="grid md:grid-cols-2 gap-16 ml-20 items-center">
					<div>
						<p className="text-base text-justify text-gray-600 leading-relaxed">
							Era uma vez uma engenheira com um sonho no coração:
							levar ao mundo a arte de saborear a vida. Sua
							jornada começou no universo exato da engenharia,
							onde cada detalhe e cálculo eram fundamentais. Mas,
							dentro dela, havia uma chama criativa que ansiava
							por mais. Foi então que ela descobriu a confeitaria
							criativa, um mundo onde a precisão da engenharia se
							encontrava com a doçura da vida.
						</p>
						<p className="text-base text-justify text-gray-600 leading-relaxed mt-4">
							Assim nasceu nossa empresa, um lugar onde bolos não
							são apenas sobremesas, mas verdadeiras obras de arte
							com efeitos especiais, encantando e maravilhando.
							Cada criação é uma celebração, uma lembrança de que
							a vida, com suas surpresas e desafios, pode ser
							doce. Aqui, misturamos a exatidão da engenharia com
							a magia da confeitaria, criando experiências que
							tocam o coração.
						</p>
						<p className="text-base text-justify text-gray-600 leading-relaxed mt-4">
							Nossa missão vai além de criar doces. Queremos
							despertar nas pessoas a consciência de que a vida é
							uma jornada de sabores, onde cada momento, por mais
							amargo que possa parecer, tem sua doçura. Através de
							nossos bolos e doces, desejamos ensinar a todos a
							saborear os pratos que a vida nos oferece, com
							gratidão e alegria.
						</p>
					</div>
					<Image
						src="/gallery/foto_emily2.jpg"
						alt="Nossa confeiteira"
						width={400}
						height={300}
						className="rounded-lg shadow-xl "
					/>
				</div>
			</div>
		</motion.section>
	);
}
