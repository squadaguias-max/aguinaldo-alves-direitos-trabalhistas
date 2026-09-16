import { ArrowUpRight } from "lucide-react";
import { items } from "../data/items";
import { Section } from "../../../shared/ui/Section";
export function CatalogPage() { return <Section eyebrow="MÓDULO DE EXEMPLO" title="Catálogo agnóstico de categoria"><p className="lead">Troque esta fonte local por uma API no serviço do módulo, mantendo a interface intacta.</p><div className="card-grid">{items.map((item) => <article className="card item-card" key={item.id}><span className="tag">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><div><strong>{item.price}</strong><ArrowUpRight /></div></article>)}</div></Section>; }
