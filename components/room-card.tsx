import Image from 'next/image';

interface RoomCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  price?: string;
}

export default function RoomCard({
  title,
  description,
  image,
  features,
  price,
}: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
        />
        {price && (
          <div className="absolute top-4 right-4 bg-emerald-700 text-white px-4 py-2 rounded-md">
            {price}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-serif mb-3 text-emerald-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Features List */}
        <ul className="space-y-2 text-sm text-gray-600 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-emerald-700 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition">
            View Details
          </button>
          <button className="flex-1 border border-emerald-700 text-emerald-700 py-3 rounded-md hover:bg-emerald-50 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}