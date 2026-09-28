import { officePractices } from '@/data/business';

export default function CustomerPractices() {
  return <div className="three-grid">{officePractices.map((item, index) => <article className="content-card" key={item.name}>
    <p className="eyebrow">0{index + 1} / {item.sector}</p><h3>{item.name}</h3><p>{item.desc}</p>
  </article>)}</div>;
}
