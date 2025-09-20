import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Star, MessageCircle, Calendar, Shield, Globe } from 'lucide-react';
import SwipeCard from '@/components/SwipeCard';
import OnboardingFlow from '@/components/OnboardingFlow';
import heroImage from '@/assets/hero-malta-sunset.jpg';

// Mock user data for the demo
const MOCK_USERS = [
  {
    id: '1',
    name: 'Maria',
    age: 26,
    photos: ['https://images.unsplash.com/photo-1494790108755-2616b5b47906?w=400&h=600&fit=crop&crop=face'],
    bio: 'Love exploring Valletta\'s hidden gems and weekend trips to Gozo. Always up for a good pastizzi and sunset at Dingli Cliffs! 🌅',
    distance: 3,
    locality: 'Valletta',
    verified: true,
    interests: ['Beach life', 'Valletta walks', 'Photography', 'Local cuisine'],
    languages: ['English', 'Maltese']
  },
  {
    id: '2',
    name: 'Alex',
    age: 29,
    photos: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face'],
    bio: 'Diving instructor who knows all the best spots around Malta. Let\'s explore the Blue Lagoon together! 🏊‍♂️',
    distance: 5,
    locality: 'Sliema',
    verified: true,
    interests: ['Diving', 'Boat trips', 'Beach life', 'Swimming'],
    languages: ['English', 'Italian']
  }
];

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'onboarding' | 'app'>('landing');
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const handleGetStarted = () => {
    setCurrentView('onboarding');
  };

  const handleOnboardingComplete = (userData: any) => {
    console.log('User data:', userData);
    setCurrentView('app');
  };

  const handleLike = () => {
    console.log('Liked user');
    setCurrentUserIndex((prev) => (prev + 1) % MOCK_USERS.length);
  };

  const handlePass = () => {
    console.log('Passed user');
    setCurrentUserIndex((prev) => (prev + 1) % MOCK_USERS.length);
  };

  const handleSuperLike = () => {
    console.log('Super liked user');
    setCurrentUserIndex((prev) => (prev + 1) % MOCK_USERS.length);
  };

  if (currentView === 'onboarding') {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  if (currentView === 'app') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/10">
        {/* Header */}
        <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                Flirt Island
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Calendar className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Shield className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <SwipeCard
              user={MOCK_USERS[currentUserIndex]}
              onLike={handleLike}
              onPass={handlePass}
              onSuperLike={handleSuperLike}
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/10">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Beautiful Malta sunset with couple silhouettes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Heart className="w-16 h-16 text-white" />
              <h1 className="text-6xl md:text-8xl font-bold">
                Flirt Island
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
              Malta's Premier Dating Experience
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Find love, friendship, and connection in the heart of the Mediterranean. 
              From Valletta's ancient streets to Gozo's pristine beaches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-glow"
                onClick={handleGetStarted}
              >
                Get Started
                <Heart className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Matches Daily</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Localities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Flirt Island?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for Malta's unique culture and geography
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-shadow">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Malta-Focused</h3>
              <p className="text-muted-foreground">
                Filter by locality, distance, and even plan trips to Gozo together.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-shadow">
              <Shield className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Safety First</h3>
              <p className="text-muted-foreground">
                Verified profiles, photo moderation, and comprehensive safety features.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-shadow">
              <Globe className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Bilingual</h3>
              <p className="text-muted-foreground">
                Full support for English and Maltese speakers with cultural context.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-shadow">
              <Calendar className="w-12 h-12 text-warning mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Local Events</h3>
              <p className="text-muted-foreground">
                Join dating mixers, beach parties, and cultural events across Malta.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-shadow">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Features</h3>
              <p className="text-muted-foreground">
                Boost your profile, get super likes, and unlock advanced matching.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-elevated transition-shadow">
              <MessageCircle className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-time Chat</h3>
              <p className="text-muted-foreground">
                Connect instantly with matches through our advanced messaging system.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Match?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of singles in Malta who have already found love, friendship, and meaningful connections.
          </p>
          
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-glow"
            onClick={handleGetStarted}
          >
            Start Your Journey
            <Heart className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">Flirt Island</span>
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Safety</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Flirt Island. Made with ❤️ in Malta.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;