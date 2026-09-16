import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-aguinaldo.svg";
import { whatsappUrl } from "../../config/template.config";

export function Header() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 36); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  const close = () => setOpen(false);
  return <header className={`site-header ${scrolled ? "scrolled" : ""}`}><div className="container header-inner"><Link className="brand" to="/" aria-label="Aguinaldo Alves Advogados Associados — início"><img src={logo} alt="Aguinaldo Alves Advogados Associados" /></Link><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button><nav className={open ? "nav open" : "nav"} aria-label="Navegação principal"><a href="#inicio" onClick={close}>Início</a><a href="#situacoes" onClick={close}>Situações</a><a href="#atuacao" onClick={close}>Atuação</a><a href="#como-funciona" onClick={close}>Como funciona</a><a href="#escritorio" onClick={close}>O escritório</a><a href="#duvidas" onClick={close}>Dúvidas</a><a className="header-cta" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />Fale conosco</a></nav></div></header>;
}
