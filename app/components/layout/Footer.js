export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">
							Saborear Doceria
						</h3>
						<p>
							Confeitaria Criativa
						</p>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">Contato</h3>
						<p>Email: saboreardoceria.ssa@gmail.com</p>
						<p>Tel: (71) 98244-7297</p>
                        <p>@saboreardoceria.ssa</p>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">
							Desenvolvido por
						</h3>
						<p>MM Systems and Solutions</p>
						<p>Tel: (71) 99187-0586</p>

					</div>
				</div>
			</div>
		</footer>
	);
}
