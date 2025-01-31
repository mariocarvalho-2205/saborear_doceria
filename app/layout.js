// app/layout.js
import './globals.css'


export const metadata = {
  title: 'Saborear Doceria - Bolos Artesanais para Momentos Especiais',
  description: 'Especialistas em bolos confeitados para aniversários, casamentos e formaturas. Transformamos seus momentos especiais em doces memórias inesquecíveis.',
  keywords: 'bolos confeitados, bolos de casamento, bolos de aniversário, bolos de formatura, confeitaria artesanal, doceria, bolos personalizados',
  openGraph: {
    title: 'Saborear Doceria - Bolos Artesanais para Momentos Especiais',
    description: 'Especialistas em bolos confeitados para aniversários, casamentos e formaturas.',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.cdnfonts.com/css/saturnus" rel="stylesheet" />
      </head>
      <body >{children}</body>
    </html>
  )
}