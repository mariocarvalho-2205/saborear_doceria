import { motion } from "framer-motion";
import Image from 'next/image'
import img1 from '../../../public/gallery/img1.jpg'

export default function Gallery() {
	return (
		<motion.section
			id="galeria"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="py-28 bg-gradient-to-r from-[#f9edec] to-[#fbf8f7]"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-saturnus">
					Nossos Momentos Especiais
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{/* Add multiple gallery images */}
					{[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
							className="relative aspect-square overflow-hidden rounded-lg"
						>
							<Image
								src={`/gallery/gallery-${index}.jpg`}
								alt={`Evento ${index}`}
								layout="fill"
								objectFit="cover"
								className="transform transition-transform hover:scale-110"
							/>
						</motion.div>
					))}
					{/* <Image
						src={`/public/gallery/img1.jpg`}
						alt={`Evento`}
						layout="fill"
						objectFit="cover"
						className="transform transition-transform hover:scale-110"
					/> */}
				</div>
			</div>
		</motion.section>
	);
}
