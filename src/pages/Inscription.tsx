
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Building, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Inscription = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileType: '',
    company: '',
    position: '',
    experience: '',
    interests: '',
    education: '',
    skills: '',
    investmentFocus: '',
    investmentRange: '',
    supportServices: ''
  });

  const profileTypes = [
    { value: 'entrepreneur', label: 'Entrepreneur', icon: Briefcase },
    { value: 'investor', label: 'Investisseur', icon: Building },
    { value: 'incubator', label: 'Incubateur', icon: Building },
    { value: 'student', label: 'Stagiaire/Étudiant', icon: GraduationCap }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Inscription data:', formData);
      // Ici, vous ajouteriez la logique d'inscription
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="Votre prénom"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Votre nom"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse e-mail
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="pl-10"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="pl-10 pr-10"
                  placeholder="Créer un mot de passe"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirmer le mot de passe
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="pl-10 pr-10"
                  placeholder="Confirmer le mot de passe"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-4">
                Type de profil
              </Label>
              <div className="grid grid-cols-2 gap-4">
                {profileTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => handleSelectChange('profileType', type.value)}
                    className={`p-4 border-2 rounded-lg transition-all duration-200 ${
                      formData.profileType === type.value
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <type.icon className={`w-8 h-8 mx-auto mb-2 ${
                      formData.profileType === type.value ? 'text-primary' : 'text-gray-400'
                    }`} />
                    <div className={`font-medium ${
                      formData.profileType === type.value ? 'text-primary' : 'text-gray-700'
                    }`}>
                      {type.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            {formData.profileType === 'entrepreneur' && (
              <>
                <div>
                  <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise/Projet
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nom de votre entreprise ou projet"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                    Domaine d'activité
                  </Label>
                  <Input
                    id="interests"
                    name="interests"
                    type="text"
                    placeholder="Ex: Tech, E-commerce, Agriculture..."
                    value={formData.interests}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {formData.profileType === 'investor' && (
              <>
                <div>
                  <Label htmlFor="investmentFocus" className="block text-sm font-medium text-gray-700 mb-2">
                    Secteurs d'investissement
                  </Label>
                  <Input
                    id="investmentFocus"
                    name="investmentFocus"
                    type="text"
                    placeholder="Ex: Fintech, Healthtech, E-commerce..."
                    value={formData.investmentFocus}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="investmentRange" className="block text-sm font-medium text-gray-700 mb-2">
                    Fourchette d'investissement
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange('investmentRange', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une fourchette" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-25k">5K - 25K DT</SelectItem>
                      <SelectItem value="25k-100k">25K - 100K DT</SelectItem>
                      <SelectItem value="100k-500k">100K - 500K DT</SelectItem>
                      <SelectItem value="500k+">500K+ DT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            {formData.profileType === 'incubator' && (
              <div>
                <Label htmlFor="supportServices" className="block text-sm font-medium text-gray-700 mb-2">
                  Services d'accompagnement
                </Label>
                <Input
                  id="supportServices"
                  name="supportServices"
                  type="text"
                  placeholder="Ex: Mentoring, Financement, Formation..."
                  value={formData.supportServices}
                  onChange={handleChange}
                />
              </div>
            )}

            {formData.profileType === 'student' && (
              <>
                <div>
                  <Label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                    Formation/Université
                  </Label>
                  <Input
                    id="education"
                    name="education"
                    type="text"
                    placeholder="Votre formation actuelle"
                    value={formData.education}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                    Compétences/Intérêts
                  </Label>
                  <Input
                    id="skills"
                    name="skills"
                    type="text"
                    placeholder="Ex: Développement, Marketing, Design..."
                    value={formData.skills}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <img 
              src="/lovable-uploads/b2da59bd-3d13-4b57-9c77-a9d73697807f.png" 
              alt="Alphapreneurs Logo" 
              className="mx-auto h-16 w-auto"
            />
            <h2 className="mt-6 text-3xl font-bold gradient-text">
              Créer votre compte
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Rejoignez l'écosystème entrepreneurial tunisien
            </p>
          </div>

          {/* Progress bar */}
          <div className="flex items-center justify-center space-x-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {renderStepContent()}

              <div className="flex justify-between">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    Précédent
                  </Button>
                )}
                <Button
                  type="submit"
                  className={`${currentStep === 1 ? 'w-full' : 'ml-auto'} bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white`}
                >
                  {currentStep < 3 ? 'Suivant' : 'Créer mon compte'}
                </Button>
              </div>
            </form>

            {currentStep === 1 && (
              <>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Ou s'inscrire avec</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-gray-300 hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-gray-300 hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 mr-2" fill="#0077B5" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </Button>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Vous avez déjà un compte ?{' '}
                    <Link to="/connexion" className="text-primary hover:text-accent font-medium transition-colors">
                      Se connecter
                    </Link>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Inscription;
