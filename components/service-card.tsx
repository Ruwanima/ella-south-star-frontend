import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="text-center group cursor-pointer">
      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-700 transition-colors duration-300">
        <Icon className="w-10 h-10 text-emerald-700 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-700 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}