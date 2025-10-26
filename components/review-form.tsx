'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reviewData = { ...formData, rating };
    console.log('Review submitted:', reviewData);
    // TODO: Send to backend API
    alert('Thank you for your review!');
    // Reset form
    setFormData({ name: '', email: '', review: '' });
    setRating(0);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-serif mb-6 text-center text-emerald-800">
        Write Your Feedback
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Star Rating */}
        <div>
          <label className="block text-sm font-medium mb-3 text-center text-gray-700">
            Rate Your Experience
          </label>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-10 h-10 ${
                    star <= (hoveredRating || rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-center text-sm text-gray-600 mt-2">
              You rated {rating} out of 5 stars
            </p>
          )}
        </div>

        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Review Text */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Your Review *
          </label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Share your experience..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={rating === 0}
          className="w-full bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}