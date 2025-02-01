import { motion } from "framer-motion";
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"


export default function MyCarousel() {
	return (
		<motion.section
			id="eventos"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="py-28 bg-white"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-saturnus">
					Nossos Eventos
				</h2>
				<Carousel
					showArrows={true}
					showStatus={false}
					showThumbs={false}
					infiniteLoop={true}
					autoPlay={true}
					interval={3000}
					className="max-w-xl mx-auto"
				>
					{[1, 2, 3, 4, 5].map((index) => (
						<div key={index} className="relative aspect-video">
							<Image
								src={`/gallery/carousel-${index}.jpg`}
								alt={`Evento Carrossel ${index}`}
								width={1080}
								height={768}
								className="rounded-lg"
							/>
						</div>
					))}
				</Carousel>
			</div>
		</motion.section>
	);
}
