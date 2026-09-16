import { createElement } from "react";
import { LayoutDashboard, Package, Settings, Users } from "lucide-react";
export function AdminPage() { return <section className="section container"><span className="eyebrow">ÁREA PROTEGIDA</span><h2>Painel administrativo</h2><div className="stats">{[[LayoutDashboard,"Visão geral","24"],[Package,"Itens","128"],[Users,"Usuários","842"],[Settings,"Configurações","12"]].map(([icon,label,value]) => <article className="stat" key={label}>{createElement(icon)}<span>{label}</span><strong>{value}</strong></article>)}</div></section>; }
