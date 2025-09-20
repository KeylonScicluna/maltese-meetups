import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, Users, Coffee } from 'lucide-react';

const MALTA_LOCALITIES = [
  'Valletta', 'Sliema', "St Julian's", 'Gżira', 'Msida', 'Birkirkara', 'Mosta', 'Qormi',
  'Rabat', 'Mdina', 'Mellieħa', "St Paul's Bay", 'Naxxar', 'Żebbuġ', 'Żejtun', 'Marsascala',
  'Marsaxlokk', 'Paola', 'Ħamrun', 'Floriana', 'Pembroke', 'Swieqi', 'San Ġwann',
  'Victoria (Gozo)', 'Xagħra', 'Xewkija', 'Nadur', 'Għajnsielem'
];

const INTERESTS = [
  'Beach life', 'Pastizzi', 'Diving', 'Festa culture', 'Gozo trips', 'Wine tasting',
  'Valletta walks', 'Clubbing', 'Art galleries', 'Hiking', 'Boat trips', 'Photography',
  'Music festivals', 'Local cuisine', 'History', 'Swimming', 'Dancing', 'Traveling'
];

interface OnboardingFlowProps {
  onComplete: (userData: any) => void;
}

export default function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    orientation: '',
    locality: '',
    bio: '',
    interests: [] as string[],
    languages: [] as string[],
    intent: '',
    photos: [] as string[]
  });

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleLanguageToggle = (language: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Welcome to Flirt Island</h2>
              <p className="text-muted-foreground">Let's create your profile to find your perfect match in Malta</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">First Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  min="18"
                  max="100"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  placeholder="18"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Users className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">About You</h2>
              <p className="text-muted-foreground">Help us understand who you are</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label>Gender</Label>
                <Select value={formData.gender} onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="woman">Woman</SelectItem>
                    <SelectItem value="man">Man</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Interested in</Label>
                <Select value={formData.orientation} onValueChange={(value) => setFormData(prev => ({ ...prev, orientation: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Who are you interested in?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="women">Women</SelectItem>
                    <SelectItem value="men">Men</SelectItem>
                    <SelectItem value="everyone">Everyone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Coffee className="w-16 h-16 text-warning mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Your Location</h2>
              <p className="text-muted-foreground">Where in Malta can we find you?</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label>Locality</Label>
                <Select value={formData.locality} onValueChange={(value) => setFormData(prev => ({ ...prev, locality: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your locality" />
                  </SelectTrigger>
                  <SelectContent>
                    {MALTA_LOCALITIES.map((locality) => (
                      <SelectItem key={locality} value={locality}>
                        {locality}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>What are you looking for?</Label>
                <Select value={formData.intent} onValueChange={(value) => setFormData(prev => ({ ...prev, intent: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your intention" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dating">Dating</SelectItem>
                    <SelectItem value="friends">New Friends</SelectItem>
                    <SelectItem value="serious">Serious Relationship</SelectItem>
                    <SelectItem value="unsure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Languages You Speak</h2>
              <p className="text-muted-foreground">Malta is bilingual - what languages do you speak?</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {['English', 'Maltese', 'Italian', 'French', 'German', 'Spanish'].map((language) => (
                <div key={language} className="flex items-center space-x-2">
                  <Checkbox
                    id={language}
                    checked={formData.languages.includes(language)}
                    onCheckedChange={() => handleLanguageToggle(language)}
                  />
                  <Label htmlFor={language} className="text-sm font-medium">
                    {language}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Your Interests</h2>
              <p className="text-muted-foreground">What do you love about life in Malta?</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <Badge
                  key={interest}
                  variant={formData.interests.includes(interest) ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    formData.interests.includes(interest) 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-accent'
                  }`}
                  onClick={() => handleInterestToggle(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Camera className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Tell Your Story</h2>
              <p className="text-muted-foreground">Add photos and write a bio that shows your personality</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                  placeholder="Tell us about yourself... What makes you unique? What do you love about Malta?"
                  rows={4}
                />
              </div>
              
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Add your photos</p>
                <p className="text-sm text-muted-foreground">Upload up to 6 photos to show your best self</p>
                <Button variant="outline" className="mt-4">
                  Choose Photos
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg p-8 shadow-elevated">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        {renderStep()}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            className="gradient-primary text-primary-foreground"
          >
            {currentStep === totalSteps ? 'Complete Profile' : 'Next'}
          </Button>
        </div>
      </Card>
    </div>
  );
}