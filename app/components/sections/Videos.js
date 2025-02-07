import { motion } from "framer-motion";

export default function Videos() {
 return (
   <motion.section
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8 }}
     className="py-28 bg-gradient-to-r from-[#f9edec] to-[#fbf8f7] scroll-mt-16 px-6"
     id="videos"
   >
     <div className="container mx-auto px-4">
       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-saturnus">
         Processo de Criação
       </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="aspect-video text-center">
           <iframe
             width="100%"
             height="100%"
             src="https://www.youtube.com/embed/6W76Wa-GvGU"
             title="Processo de Confeitaria Linha Mimosa"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
             className="rounded-lg shadow-lg mb-4"
           ></iframe>
           <p className="font-semibold">Linha Mimosa</p>
         </div>
         <div className="aspect-video text-center">
           <iframe
             width="100%"
             height="100%"
             src="https://www.youtube.com/embed/NKfhrp_Jmlk"
             title="Processo de Confeitaria Linha Memoravel"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
             className="rounded-lg shadow-lg mb-4"
           ></iframe>
           <p className="font-semibold">Linha Memoravél</p>
         </div>
       </div>
     </div>
   </motion.section>
 );
}