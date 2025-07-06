
import { MapPin, Building2, Users, MessageCircle, Star, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Utilisateurs = () => {
  const users = [
    {
      id: 1,
      name: 'Amina Benali',
      role: 'Entrepreneur',
      company: 'EcoTech Solutions',
      location: 'Tunis',
      bio: 'Fondatrice d\'une startup spécialisée dans les technologies vertes et l\'innovation durable.',
      rating: 4.9,
      connections: 234,
      verified: true,
      specialties: ['CleanTech', 'IoT', 'Sustainability'],
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b152b75a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    {
      id: 2,
      name: 'Mohamed Trabelsi',
      role: 'Investisseur',
      company: 'Tunisia Ventures',
      location: 'Sfax',
      bio: 'Investisseur expérimenté spécialisé dans le financement de startups technologiques en phase de croissance.',
      rating: 4.8,
      connections: 456,
      verified: true,
      specialties: ['FinTech', 'E-commerce', 'SaaS'],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    {
      id: 3,
      name: 'Sarah Gharbi',
      role: 'Incubateur',
      company: 'StartupLab Tunisia',
      location: 'Tunis',
      bio: 'Directrice d\'incubateur avec 8 ans d\'expérience dans l\'accompagnement de startups innovantes.',
      rating: 4.9,
      connections: 312,
      verified: true,
      specialties: ['Mentoring', 'Business Development', 'Fundraising'],
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    {
      id: 4,
      name: 'Karim Mezghani',
      role: 'Entrepreneur',
      company: 'HealthTech Innovations',
      location: 'Sousse',
      bio: 'Co-fondateur d\'une startup révolutionnant les soins de santé grâce à l\'intelligence artificielle.',
      rating: 4.7,
      connections: 189,
      verified: false,
      specialties: ['HealthTech', 'AI', 'Machine Learning'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    {
      id: 5,
      name: 'Leila Khelifi',
      role: 'Stagiaire/Étudiant',
      company: 'ESPRIT',
      location: 'Tunis',
      bio: 'Étudiante en informatique passionnée par l\'entrepreneuriat et à la recherche d\'opportunités de stage.',
      rating: 4.5,
      connections: 67,
      verified: false,
      specialties: ['Development', 'UI/UX', 'Mobile Apps'],
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    {
      id: 6,
      name: 'Youssef Hamdi',
      role: 'Investisseur',
      company: 'Angel Network Tunisia',
      location: 'Monastir',
      bio: 'Business angel actif dans l\'écosystème entrepreneurial tunisien, spécialisé dans les startups early-stage.',
      rating: 4.8,
      connections: 298,
      verified: true,
      specialties: ['Early Stage', 'Retail', 'AgriTech'],
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    }
  ];

  const roleColors = {
    'Entrepreneur': 'bg-blue-100 text-blue-800',
    'Investisseur': 'bg-green-100 text-green-800',
    'Incubateur': 'bg-purple-100 text-purple-800',
    'Stagiaire/Étudiant': 'bg-orange-100 text-orange-800'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Communauté d'entrepreneurs
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Connectez-vous avec des entrepreneurs, investisseurs, incubateurs et talents de toute la Tunisie
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-3">
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Tous
              </Button>
              <Button variant="outline">Entrepreneurs</Button>
              <Button variant="outline">Investisseurs</Button>
              <Button variant="outline">Incubateurs</Button>
              <Button variant="outline">Étudiants</Button>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtres avancés
            </Button>
          </div>
        </div>
      </section>

      {/* Users Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {users.map((user) => (
              <Card key={user.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {user.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {user.name}
                  </CardTitle>
                  
                  <div className="flex flex-col items-center gap-2">
                    <Badge className={roleColors[user.role as keyof typeof roleColors]}>
                      {user.role}
                    </Badge>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Building2 className="w-4 h-4 mr-1" />
                      {user.company}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {user.location}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 text-center mb-4 line-clamp-3">
                    {user.bio}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {user.specialties.slice(0, 3).map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                      {user.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {user.connections} connexions
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-sm">
                      Se connecter
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Voir plus de profils
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Utilisateurs;
