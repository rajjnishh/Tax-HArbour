import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  feedback: string;
  image: string;
  rating?: number;
}

export const ReviewCarousel: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  // Duplicate the reviews array to create a seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="w-full overflow-hidden py-10 relative">
      {/* Gradient masks for smooth fade-in/out at the edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
        {duplicatedReviews.map((review, index) => (
          <div 
            key={index} 
            className="w-[300px] md:w-[400px] h-[320px] md:h-[350px] flex-shrink-0 mx-4 glass-card p-6 md:p-8 rounded-3xl flex flex-col border border-gray-100 hover:border-brand-red/20 transition-colors"
          >
            <div className="flex text-yellow-400 mb-4">
              {[...Array(review.rating || 5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 italic leading-relaxed flex-grow text-sm md:text-base mb-6">
              "{review.feedback}"
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
              <img 
                src={review.image} 
                alt={review.name} 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-brand-blue-dark/5" 
                referrerPolicy="no-referrer" 
              />
              <div>
                <h5 className="font-bold text-brand-blue-dark text-sm md:text-base">{review.name}</h5>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
