import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  initials: string;
  rating: number;
  comment: string;
  date?: string;
}

export default function ReviewCard({
  name,
  initials,
  rating,
  comment,
  date,
}: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-semibold mr-3">
          {initials}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? 'fill-current' : 'stroke-current fill-none'
                  }`}
                />
              ))}
            </div>
            {date && <span className="text-xs text-gray-500">{date}</span>}
          </div>
        </div>
      </div>

      {/* Comment */}
      <p className="text-gray-600 text-sm leading-relaxed">{comment}</p>
    </div>
  );
}