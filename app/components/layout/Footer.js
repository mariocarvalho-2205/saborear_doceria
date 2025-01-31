import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-[#FADBD8] text-[#802424] py-8">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-8">
					<div>
						<p className="text-lg font-bold mb-4">
							Saborear Doceria
						</p>

						<p>Confeitaria Criativa</p>
						<p>&copy; 2025 Todos os direitos reservados.</p>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">Contato</h3>
						<p>Email: saboreardoceria.ssa@gmail.com</p>
						<div className="flex items-center">
							<FaWhatsapp className="mr-2" />{" "}
							{/* Adiciona uma margem à direita do ícone */}
							<p>Tel: (71) 98244-7297</p>
						</div>
						<div className="flex items-center">
							<FaInstagram className="mr-2" />{" "}
							{/* Adiciona uma margem à direita do ícone */}
							<a href="https://www.instagram.com/saboreardoceria.ssa/" target="_blank">
								<p>saboreardoceria.ssa</p>
							</a>
						</div>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">
							Desenvolvido por
						</h3>
						<p>
							<span>MM Systems and Solutions</span>
						</p>
						<p>&copy; 2025 Todos os direitos reservados.</p>

						<div className="flex items-center">
							<FaWhatsapp className="mr-2" />{" "}
							{/* Adiciona uma margem à direita do ícone */}
							<p>Tel: (71) 99187-0586</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
