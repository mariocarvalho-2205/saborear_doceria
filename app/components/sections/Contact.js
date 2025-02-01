// Contact.js
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		eventType: "",
		message: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await emailjs.send(
			  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
			  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
			  formData
			);
			alert("Mensagem enviada com sucesso!")
			setFormData({name: "", email: "", phone: "", eventType: "", message: ""});
		  } catch (error) {
			console.error(error);
		  }
	};

	return (
		<motion.section
			id="contato"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="py-28 bg-white"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-saturnus">
					Faça seu Orçamento
				</h2>
				<form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label className="block  mb-2">Nome</label>
							<input
								type="text"
								required
								className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424]"
								value={formData.name}
								onChange={(e) =>
									setFormData({
										...formData,
										name: e.target.value,
									})
								}
							/>
						</div>
						<div>
							<label className="block  mb-2">Email</label>
							<input
								type="email"
								required
								className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424]"
								value={formData.email}
								onChange={(e) =>
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
							/>
						</div>
						<div>
							<label className="block  mb-2">Telefone</label>
							<input
								type="tel"
								required
								className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424]"
								value={formData.phone}
								onChange={(e) =>
									setFormData({
										...formData,
										phone: e.target.value,
									})
								}
							/>
						</div>
						<div>
							<label className="block  mb-2">
								Tipo de Evento
							</label>
							<select
								required
								className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424]"
								value={formData.eventType}
								onChange={(e) =>
									setFormData({
										...formData,
										eventType: e.target.value,
									})
								}
							>
								<option value="">Selecione...</option>
								<option value="casamento">Casamento</option>
								<option value="aniversario">Aniversário</option>
								<option value="formatura">Formatura</option>
								<option value="outro">Outro</option>
							</select>
						</div>
						<div className="md:col-span-2">
							<label className="block  mb-2">Mensagem</label>
							<textarea
								required
								rows="4"
								className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424]"
								value={formData.message}
								onChange={(e) =>
									setFormData({
										...formData,
										message: e.target.value,
									})
								}
							></textarea>
						</div>
					</div>
					<button
						type="submit"
						className="mt-6 w-full bg-[#802424] text-white py-3 rounded-lg hover:bg-[#E6B0AA] transition-colors btn"
					>
						Enviar Pedido
					</button>
				</form>
			</div>
		</motion.section>
	);
}
