import { Database, Layers3, Settings2, Bot } from 'lucide-react';
import { officeModules } from '@/data/business';

const icons = [Database, Layers3, Settings2, Bot];
export default function OfficeModules({ detailed = false }: { detailed?: boolean }) {
  return <div className="office-module-grid">{officeModules.map((module, index) => {
    const Icon = icons[index];
    return <article className="module-card" id={detailed ? module.id : undefined} key={module.id}>
      <div className="module-top"><Icon size={23} aria-hidden="true" /><span>0{index + 1}</span></div>
      <h3>{module.name}</h3><p className="module-role">{module.role}</p><p>{module.desc}</p>
      {detailed && <ul className="feature-list">{module.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>}
    </article>;
  })}</div>;
}
