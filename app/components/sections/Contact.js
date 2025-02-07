import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

// Definição do esquema de validação com Zod
const contactSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(1, "O telefone é obrigatório"),
  eventType: z.string().min(1, "Selecione um tipo de evento"),
  message: z.string().min(1, "A mensagem não pode estar vazia"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data
      );
      alert("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-28 bg-white scroll-mt-2 px-6"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-saturnus">
          Faça seu Orçamento
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nome */}
            <div>
              <label className="block mb-2">Nome</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424]"
                {...register("name")}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424]"
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Telefone */}
            <div>
              <label className="block mb-2">Telefone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424]"
                {...register("phone")}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            {/* Tipo de Evento */}
            <div>
              <label className="block mb-2">Tipo de Evento</label>
              <select
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424]"
                {...register("eventType")}
              >
                <option value="">Selecione...</option>
                <option value="casamento">Casamento</option>
                <option value="aniversario">Aniversário</option>
                <option value="formatura">Formatura</option>
                <option value="outro">Outro</option>
              </select>
              {errors.eventType && <p className="text-red-500 text-sm">{errors.eventType.message}</p>}
            </div>

            {/* Mensagem */}
            <div className="md:col-span-2">
              <label className="block mb-2">Mensagem</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424]"
                {...register("message")}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
          </div>

          {/* Botão de Enviar */}
          <button
            type="submit"
            className="mt-6 w-full bg-[#802424] text-white py-3 rounded-lg hover:bg-[#E6B0AA] transition-colors btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Pedido"}
          </button>
        </form>
      </div>
    </motion.section>
  );
}
