import { officeValues } from '@/data/business';

export default function OfficeValues({ detailed = false }: { detailed?: boolean }) {
  return <div className="three-grid">{officeValues.map(item => <article className="content-card" id={detailed ? item.id : undefined} key={item.id}>
    <p className="eyebrow">{item.tag}</p><h3>{item.title}</h3><p>{item.desc}</p><p className="card-footnote">{item.detail}</p>
  </article>)}</div>;
}
