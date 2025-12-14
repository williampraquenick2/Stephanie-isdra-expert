import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Scale, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  GraduationCap,
  ChevronRight,
  Instagram,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { Lightbox } from './components/Lightbox';
import { EXPERT_INFO, IMAGES } from './constants';

const App: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen text-brand-dark antialiased">
      {/* 1. HERO */}
      <header className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Image Mobile First: Top on mobile */}
            <div className="w-full max-w-[400px] lg:max-w-[450px] lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-accent/20 rounded-[2rem] rotate-3 transform translate-x-2 translate-y-2"></div>
                <img 
                  src={IMAGES.hero} 
                  alt={EXPERT_INFO.name} 
                  className="relative w-full h-auto rounded-[2rem] shadow-2xl object-cover border-4 border-white aspect-[3/4]"
                />
                
                {/* Float Badge */}
                <div className="absolute -bottom-6 -left-4 bg-white p-4 rounded-xl shadow-lg border border-stone-100 flex items-center gap-3">
                  <div className="bg-brand-accent/10 p-2 rounded-full">
                    <Scale className="text-brand-accent w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">OAB/SC</p>
                    <p className="text-sm font-bold text-brand-dark">Regular</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left lg:order-1 mt-8 lg:mt-0">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold mb-4 tracking-wide">
                Direito Imobiliário e Ambiental
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-brand-dark">
                Eu sou <span className="text-brand-accent">{EXPERT_INFO.name}</span>, Advogada em Balneário Camboriú.
              </h1>
              <p className="text-lg lg:text-xl text-stone-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Protejo seu patrimônio e garanto segurança jurídica para seus negócios imobiliários. Análise técnica, transparente e sem "juridiquês".
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button 
                  text="Agendar Primeira Consulta Gratuita" 
                  subtext="Resposta rápida • Sem compromisso"
                  href={EXPERT_INFO.whatsappLink}
                  fullWidth={true}
                  className="sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. QUEM SOU EU */}
      <Section dark id="sobre">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group cursor-pointer" onClick={() => openLightbox(IMAGES.about)}>
             <img 
              src={IMAGES.about} 
              alt="Stephanie Isdra no escritório" 
              className="rounded-lg shadow-xl w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
               <span className="text-white bg-black/50 px-4 py-2 rounded-full text-sm">Ver foto</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-brand-accent pl-4">
              Mais que uma advogada, uma parceira do seu negócio.
            </h2>
            <div className="space-y-4 text-stone-700 text-lg leading-relaxed">
              <p>
                Olá! Meu nome é <strong>Stephanie Isdra</strong>. Atuo diretamente de Balneário Camboriú, um dos mercados imobiliários mais aquecidos do Brasil.
              </p>
              <p>
                Entendo que lidar com questões imobiliárias e ambientais envolve sonhos e investimentos altos. Por isso, meu atendimento não é padronizado. Eu mesma cuido do seu caso, do início ao fim.
              </p>
              <p>
                Minha missão é trazer <strong>clareza e segurança</strong> para que você não tenha dores de cabeça no futuro.
              </p>
              
              <ul className="mt-6 space-y-3">
                {[
                  "Especialista em Direito Imobiliário e Urbanístico",
                  "Atendimento presencial e online para todo o Brasil",
                  "Foco total na resolução ágil de conflitos"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="text-brand-accent w-5 h-5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS (Certificados) */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Especialização Comprovada</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            O direito imobiliário muda constantemente. Mantenho-me sempre atualizada para oferecer a melhor defesa técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[IMAGES.cert1, IMAGES.cert2].map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white aspect-[4/3]"
              onClick={() => openLightbox(img)}
            >
              <img 
                src={img} 
                alt={`Certificado ou Conteúdo Informativo ${idx + 1}`} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium flex items-center gap-2">
                  <ExternalLink size={18} /> Ver detalhes
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-center text-stone-400 mt-6 uppercase tracking-wider">
          * A atuação jurídica depende da análise individual de cada caso.
        </p>
      </Section>

      {/* 4. POR QUE CONFIAR */}
      <Section dark className="bg-stone-900 text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Por que agendar comigo?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Avaliação Honesta",
              desc: "Não prometo causa ganha. Analiso os riscos reais e te dou a melhor estratégia."
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Especialista Local",
              desc: "Conhecimento profundo das leis de zoneamento e ambientais de SC."
            },
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: "Autoridade Técnica",
              desc: "Formação contínua nas áreas mais complexas do direito imobiliário."
            },
            {
              icon: <MessageCircle className="w-8 h-8" />,
              title: "Contato Direto",
              desc: "Você fala diretamente comigo no WhatsApp, sem intermediários inexperientes."
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Agilidade",
              desc: "Respostas rápidas para que você não perca o tempo do seu negócio."
            },
            {
              icon: <Scale className="w-8 h-8" />,
              title: "Transparência",
              desc: "Honorários e custos explicados de forma clara antes de qualquer contratação."
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <div className="text-brand-accent mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-stone-300 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-16 bg-brand-accent/5 px-4 text-center border-y border-brand-accent/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ainda com dúvidas sobre seu imóvel ou contrato?</h2>
          <p className="mb-8 text-stone-600">
            Não tome decisões importantes sem orientação profissional. Uma conversa de 15 minutos pode economizar anos de dor de cabeça.
          </p>
          <Button 
            text="Tirar minhas dúvidas no WhatsApp" 
            subtext="Clique para falar com a Stephanie"
            href={EXPERT_INFO.whatsappLink}
          />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Como funciona a Primeira Consulta</h2>
          <p className="text-stone-500 mt-2">Simples, rápido e sem burocracia</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-stone-200 -z-10"></div>

          {[
            { step: 1, title: "Toque no Botão", desc: "Clique no link do WhatsApp nesta página." },
            { step: 2, title: "Breve Relato", desc: "Conte resumidamente seu caso para mim." },
            { step: 3, title: "Agendamento", desc: "Definimos o melhor horário para nossa conversa gratuita." }
          ].map((item, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center text-center bg-white md:bg-transparent p-6 rounded-xl shadow-sm md:shadow-none border border-stone-100 md:border-none">
              <div className="w-14 h-14 bg-brand-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-white">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-stone-600">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-4 bg-green-50 rounded-lg text-center max-w-xl mx-auto border border-green-100">
          <p className="text-green-800 font-medium text-sm">
            <span className="font-bold">Nota:</span> A consulta inicial serve para entender a viabilidade do seu caso e te dar um direcionamento estratégico.
          </p>
        </div>
      </Section>

      {/* 7. MAIS PROVAS / GALERIA */}
      <Section dark>
        <div className="flex flex-col md:flex-row items-center gap-8">
           <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Atendimento Personalizado</h2>
              <p className="text-stone-600 mb-6">
                Meu escritório está localizado no coração de Balneário Camboriú, mas a tecnologia me permite atender clientes de todo o mundo que possuem interesses no Brasil.
              </p>
              <div className="flex flex-col gap-3">
                 <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="bg-stone-100 p-2 rounded">
                      <MapPin className="text-brand-accent" size={20} />
                    </div>
                    <div>
                       <p className="font-bold text-sm text-stone-800">Endereço Físico</p>
                       <p className="text-xs text-stone-500">{EXPERT_INFO.address}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="bg-stone-100 p-2 rounded">
                      <Instagram className="text-brand-accent" size={20} />
                    </div>
                    <div>
                       <p className="font-bold text-sm text-stone-800">Instagram Profissional</p>
                       <a href={EXPERT_INFO.instagram} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline">
                         @stephanie.isdra
                       </a>
                    </div>
                 </div>
              </div>
           </div>
           <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src={IMAGES.hero} 
                className="rounded-lg shadow w-full h-40 object-cover object-top cursor-pointer hover:opacity-90"
                onClick={() => openLightbox(IMAGES.hero)}
                alt="Foto Escritório"
              />
              <img 
                src={IMAGES.about} 
                className="rounded-lg shadow w-full h-40 object-cover object-center cursor-pointer hover:opacity-90"
                onClick={() => openLightbox(IMAGES.about)}
                alt="Foto Atendimento"
              />
              <div className="col-span-2 bg-brand-primary rounded-lg p-6 text-white flex flex-col justify-center items-center text-center">
                 <p className="font-serif italic text-lg">"O direito não socorre aos que dormem."</p>
                 <p className="text-xs mt-2 opacity-70">Agende agora e proteja seus direitos.</p>
              </div>
           </div>
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <section className="py-20 px-4 bg-brand-dark text-white text-center relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
            Não espere o problema aumentar.
          </h2>
          <p className="text-xl text-stone-300 mb-10">
            Garanta agora sua primeira consulta gratuita e tenha a segurança jurídica que você precisa.
          </p>
          <div className="flex flex-col items-center">
            <Button 
              text="QUERO AGENDAR AGORA" 
              subtext="Consulta Gratuita • Vagas Limitadas na Semana"
              href={EXPERT_INFO.whatsappLink}
              className="bg-brand-accent hover:bg-amber-800 animate-pulse hover:animate-none"
            />
            <p className="mt-6 text-sm text-stone-500">
              Ao clicar, você será redirecionado para o meu WhatsApp pessoal.
            </p>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <h3 className="text-white text-xl font-bold font-serif mb-1">{EXPERT_INFO.name}</h3>
            <p className="text-sm">{EXPERT_INFO.fullTitle}</p>
          </div>
          
          <div className="text-sm space-y-2">
            <p>{EXPERT_INFO.location}</p>
            <p>{EXPERT_INFO.address}</p>
          </div>

          <div className="flex justify-center gap-6 pt-4">
            <a href={EXPERT_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href={EXPERT_INFO.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>

          <div className="pt-8 border-t border-white/5 text-xs text-stone-600">
            <p>&copy; {new Date().getFullYear()} Stephanie Isdra. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA (Visible only on scroll potentially, but kept simple here) */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <a 
          href={EXPERT_INFO.whatsappLink} 
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <MessageCircle size={28} fill="white" />
        </a>
      </div>

      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        imageSrc={selectedImage} 
      />
    </div>
  );
};

export default App;