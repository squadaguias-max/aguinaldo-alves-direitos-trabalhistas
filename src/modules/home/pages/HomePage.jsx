import {
  ArrowRight, BadgeCheck, BriefcaseBusiness, ChevronDown, CircleDollarSign,
  Clock3, FileCheck2, HeartPulse, MessageCircle, Scale, ShieldCheck, UserRoundCheck,
} from "lucide-react";
import atendimento from "../../../assets/atendimento-trabalhista.jpg";
import analise from "../../../assets/analise-documentos.jpg";
import carteira from "../../../assets/carteira-trabalho.png";
import { whatsappUrl } from "../../../config/template.config";

const situations = [
  { icon: BriefcaseBusiness, number: "01", title: "Trabalhou sem carteira assinada", text: "Exerceu suas atividades com horário, ordens e rotina de trabalho, mas não teve o registro formal?", cta: "Quero orientação" },
  { icon: CircleDollarSign, number: "02", title: "Não recebeu corretamente", text: "Salários, horas extras, férias, 13º, FGTS ou outras verbas podem gerar dúvidas quando não são pagos corretamente.", cta: "Quero analisar meu caso" },
  { icon: FileCheck2, number: "03", title: "Foi demitido e tem dúvidas sobre a rescisão", text: "Não sabe se os valores pagos na saída estão corretos ou se existem outras questões a serem analisadas?", cta: "Quero orientação" },
  { icon: ShieldCheck, number: "04", title: "Sofreu acidente de trabalho", text: "Teve um acidente durante o trabalho ou em situação relacionada às atividades profissionais?", cta: "Quero analisar meu caso" },
  { icon: HeartPulse, number: "05", title: "Desenvolveu uma doença relacionada ao trabalho", text: "Problemas de saúde, afastamentos ou cirurgia podem estar relacionados às condições de trabalho e merecem análise individualizada.", cta: "Quero orientação" },
  { icon: Scale, number: "06", title: "Outras situações trabalhistas", text: "Desvio ou acúmulo de função, assédio, salário atrasado, jornada excessiva e outras irregularidades também podem ser analisadas.", cta: "Falar sobre meu caso" },
];

const services = [
  "Reconhecimento de vínculo empregatício", "Verbas trabalhistas", "Horas extras e jornada",
  "Rescisão e verbas rescisórias", "FGTS e férias", "Acidente de trabalho", "Doença ocupacional",
  "Assédio no ambiente de trabalho", "Desvio ou acúmulo de função", "Outras questões decorrentes da relação de trabalho",
];

const faqs = [
  ["Trabalhei sem carteira assinada. Posso buscar orientação?", "Sim. A situação pode ser analisada considerando a forma como o trabalho era realizado, documentos e demais elementos disponíveis."],
  ["Fui demitido. Posso verificar minha rescisão?", "Sim. É possível analisar os valores e as circunstâncias relacionadas ao encerramento do vínculo."],
  ["Acidente ou doença relacionada ao trabalho pode ser analisado?", "Sim. É importante avaliar a relação entre o problema apresentado e as atividades ou condições de trabalho."],
  ["Preciso ter documentos para conversar com o advogado?", "Os documentos disponíveis ajudam na análise, mas a orientação pode considerar também os demais fatos e informações apresentados."],
];

const Cta = ({ children, className = "" }) => <a className={`button ${className}`} href={whatsappUrl()} target="_blank" rel="noreferrer">{children}<ArrowRight aria-hidden="true" /></a>;

export function HomePage() {
  return <>
    <section className="hero" id="inicio"><div className="hero-grain" /><div className="container hero-grid">
      <div className="hero-copy"><span className="eyebrow light"><span>Direito trabalhista</span></span><h1>Seus direitos trabalhistas <em>não foram respeitados?</em></h1><p className="hero-lead">Problemas com registro, salário, jornada, demissão ou condições de trabalho?</p><p>Situações que acontecem no dia a dia do trabalhador podem exigir uma análise jurídica para entender quais caminhos podem ser avaliados no seu caso.</p><div className="hero-actions"><Cta className="gold-button">Quero analisar meu caso</Cta><a className="text-button" href="#situacoes">Ver situações comuns <ArrowRight /></a></div><div className="hero-assurance"><BadgeCheck /><span>Orientação clara</span><span>•</span><span>Análise individualizada</span></div></div>
      <div className="hero-visual"><div className="hero-photo"><img src={atendimento} alt="Atendimento jurídico com análise de documentos" /></div><div className="hero-note"><span>Atendimento</span><strong>cível e trabalhista</strong></div></div>
    </div><a className="scroll-cue" href="#situacoes" aria-label="Ir para as situações"><span>Role para conhecer</span><ArrowRight /></a></section>

    <section className="situations" id="situacoes"><div className="container"><header className="section-heading"><div><span className="eyebrow">Situações frequentes</span><h2>Você passou por alguma<br />destas situações?</h2></div><p>Cada relação de trabalho tem suas particularidades. Identifique o que aconteceu e converse com nossa equipe.</p></header><div className="situation-grid">{situations.map(({ icon: Icon, number, title, text, cta }) => <article key={number}><div className="card-top"><span>{number}</span><Icon /></div><h3>{title}</h3><p>{text}</p><a href={whatsappUrl(`Olá! Gostaria de orientação sobre: ${title}.`)} target="_blank" rel="noreferrer">{cta}<ArrowRight /></a></article>)}</div></div></section>

    <section className="services" id="atuacao"><div className="services-photo"><img src={carteira} alt="Carteira de Trabalho e Previdência Social" /></div><div className="services-copy"><span className="eyebrow light">Como podemos auxiliar</span><h2>Atuação jurídica em situações relacionadas ao trabalho.</h2><div className="service-list">{services.map((item) => <div key={item}><BadgeCheck /><span>{item}</span></div>)}</div><Cta className="gold-button">Quero analisar meu caso</Cta></div></section>

    <section className="process" id="como-funciona"><div className="container process-grid"><div className="process-intro"><span className="eyebrow">Como funciona</span><h2>Um caminho simples para você entender sua situação.</h2><p>O atendimento começa pela escuta e pela análise cuidadosa das informações disponíveis.</p><Cta className="navy-button">Quero analisar meu caso</Cta></div><div className="process-steps"><article><span>01</span><MessageCircle /><div><h3>Conte o que aconteceu</h3><p>Você apresenta sua situação e as principais informações do vínculo de trabalho.</p></div></article><article><span>02</span><UserRoundCheck /><div><h3>Analisamos o caso</h3><p>São avaliados os documentos e as circunstâncias apresentadas.</p></div></article><article><span>03</span><Scale /><div><h3>Receba orientação jurídica</h3><p>Você entende quais caminhos podem ser considerados para a sua situação.</p></div></article></div></div></section>

    <section className="about" id="escritorio"><div className="about-photo"><img src={analise} alt="Profissional analisando documentos com cliente" /></div><div className="about-copy"><span className="eyebrow light">Sobre o escritório</span><h2>Orientação jurídica clara e individualizada.</h2><p>Atuação jurídica voltada à assessoria de pessoas e empresas, com atendimento nas áreas cível e trabalhista.</p><p>Nos casos trabalhistas, a análise considera as particularidades de cada relação de trabalho, os documentos disponíveis e as circunstâncias apresentadas pelo cliente.</p><p>O objetivo é oferecer orientação jurídica clara e individualizada para que o trabalhador compreenda sua situação e os caminhos que podem ser avaliados.</p><div className="about-facts"><span><Clock3 />Atendimento com hora marcada</span><span><ShieldCheck />Sigilo e responsabilidade</span></div></div></section>

    <section className="faq" id="duvidas"><div className="container faq-grid"><header><span className="eyebrow">Perguntas frequentes</span><h2>Antes de conversar, esclareça algumas dúvidas.</h2><p>As respostas são informativas. A análise jurídica depende dos fatos e documentos de cada caso.</p></header><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><ChevronDown /></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="final-cta" id="contato"><div className="container final-grid"><div><span className="eyebrow light">Fale com o escritório</span><h2>Seu caso merece ser ouvido com atenção.</h2><p>Conte brevemente o que aconteceu e receba orientação sobre os caminhos que podem ser avaliados.</p></div><Cta className="gold-button">Quero analisar meu caso</Cta></div></section>
    <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Falar com Aguinaldo Alves Advogados pelo WhatsApp"><MessageCircle /><span>Fale conosco</span></a>
  </>;
}
