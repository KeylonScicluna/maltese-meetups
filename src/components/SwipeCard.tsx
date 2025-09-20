import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, X, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SwipeCardProps {
  user: {
    id: string;
    name: string;
    age: number;
    photos: string[];
    bio: string;
    distance: number;
    locality: string;
    verified: boolean;
    interests: string[];
    languages: string[];
  };
  onLike: () => void;
  onPass: () => void;
  onSuperLike: () => void;
}

export default function SwipeCard({ user, onLike, onPass, onSuperLike }: SwipeCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % user.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + user.photos.length) % user.photos.length);
  };

  return (
    <div className="swipe-card relative w-full max-w-sm mx-auto">
      <Card className="relative overflow-hidden shadow-elevated bg-card border-0 rounded-3xl">
        {/* Photo Section */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={user.photos[currentPhotoIndex]}
            alt={`${user.name} photo ${currentPhotoIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Photo Navigation */}
          <div className="absolute inset-0 flex">
            <div 
              className="flex-1 cursor-pointer" 
              onClick={prevPhoto}
            />
            <div 
              className="flex-1 cursor-pointer" 
              onClick={nextPhoto}
            />
          </div>

          {/* Photo Indicators */}
          <div className="absolute top-4 left-4 right-4 flex gap-1">
            {user.photos.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-1 rounded-full transition-colors ${
                  index === currentPhotoIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {user.verified && (
              <Badge className="bg-success text-success-foreground">
                Verified ✓
              </Badge>
            )}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* User Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold">{user.name}</h3>
              <span className="text-xl">{user.age}</span>
            </div>
            
            <div className="flex items-center gap-1 mb-3 text-white/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{user.locality} • {user.distance}km away</span>
            </div>

            <p className="text-sm text-white/90 mb-3 line-clamp-2">
              {user.bio}
            </p>

            {/* Languages */}
            <div className="flex gap-1 mb-2">
              {user.languages.map((lang) => (
                <Badge 
                  key={lang} 
                  variant="secondary" 
                  className="text-xs bg-white/20 text-white border-white/30"
                >
                  {lang}
                </Badge>
              ))}
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-1">
              {user.interests.slice(0, 3).map((interest) => (
                <Badge 
                  key={interest} 
                  variant="outline" 
                  className="text-xs bg-white/10 text-white border-white/30"
                >
                  {interest}
                </Badge>
              ))}
              {user.interests.length > 3 && (
                <Badge 
                  variant="outline" 
                  className="text-xs bg-white/10 text-white border-white/30"
                >
                  +{user.interests.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          variant="outline"
          size="lg"
          className="w-14 h-14 rounded-full border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all"
          onClick={onPass}
        >
          <X className="w-6 h-6" />
        </Button>

        <Button
          size="lg"
          className="w-12 h-12 rounded-full gradient-sunset text-white hover:shadow-glow transition-all animate-pulse-glow"
          onClick={onSuperLike}
        >
          <Star className="w-5 h-5 fill-current" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="w-14 h-14 rounded-full border-2 border-success text-success hover:bg-success hover:text-success-foreground transition-all"
          onClick={onLike}
        >
          <Heart className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}