import { Link } from "react-router-dom";
export function AccessDeniedPage() { return <section className="section narrow"><span className="eyebrow">403</span><h2>Acesso não autorizado</h2><p className="lead">Seu perfil não tem permissão para esta área.</p><Link className="button" to="/">Voltar ao início</Link></section>; }
