"use client";

import Image from "next/image";
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  { id: 1, image: "/gallery/testimonial-1.jpg", name: "Lindiara", text: "Esse bolo foi surreal!" },
  { id: 2, image: "/gallery/testimonial-2.jpg", name: "Erica", text: "Que bolo maravilhoso! Todos elogiaram." },
  { id: 3, image: "/gallery/testimonial-3.jpg", name: "Preta", text: "A saborear é caprichosa, detalhista, perfeccionista, pontual e humana!" },
  { id: 4, image: "/gallery/testimonial-4.jpg", name: "Patricia Reis", text: "Eu sou apaixonada por recheio de maracuja. É serio, Amei!" },
  { id: 5, image: "/gallery/testimonial-5.jpg", name: "Amanda", text: "Ahhhh que amor. Ficou lindo!" },
  { id: 6, image: "/gallery/testimonial-6.jpg", name: "Dai Amaral", text: "Tava lindo, gostoso, voce arrasou, serão sempre esses!" },
  { id: 7, image: "/gallery/testimonial-7.jpg", name: "Nice", text: "Foi tudo lindo, recheio uma delícia, o bolo maravilhoso!" },
];

export default function Testimonials() {
    const [selectedImage, setSelectedImage] = useState(null);
  
    return (
      <section className="bg-gradient-to-bbg-gradient-to-r from-[#893535] to-[#a55454]  py-20" id="testimonials">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold text-center text-[#FADBD8] mb-12"
          >
            O que nossos clientes dizem ❤️
          </motion.h2>
  
          {/* Grid de Imagens */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {testimonials.map(({ id, image, name, text }) => (
              <motion.div
                key={id}
                className="group relative bg-[#FADBD8] shadow-lg rounded-2xl p-4 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-md cursor-pointer">
                  <Image 
                    src={image} 
                    alt={name} 
                    width={300} 
                    height={300} 
                    className="w-full h-40 object-cover rounded-xl"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-30 rounded-xl"
                    initial={{ opacity: 0.3 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-[#802424]">{name}</h3>
                  <p className="text-sm text-[#802424] mt-1">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
  
          {/* Modal de Imagem */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.div 
                  className="relative w-[400px] h-[800px] max-w-full max-h-screen flex items-center justify-center"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={selectedImage} 
                    alt="Depoimento expandido" 
                    width={300} 
                    height={600} 
                    className="rounded-lg shadow-xl object-cover"
                  />
                  {/* Botão de Fechar */}
                  <button
                    className="absolute top-4 right-4 bg-white text-[#802424] p-2 rounded-full shadow-md"
                    onClick={() => setSelectedImage(null)}
                  >
                    ✖
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
  
        </div>
      </section>
    );
  }
