import { useParams, Link } from 'react-router-dom';
import { Play, Clock, Users, Star, BookOpen, Award, ArrowLeft, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FormationDetails = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from database
  const formation = {
    id: 1,
    title: 'Entrepreneuriat Digital : De l\'idée au lancement',
    instructor: 'Dr. Amina Ben Salem',
    duration: '8 semaines',
    students: 245,
    rating: 4.8,
    price: 'Gratuit',
    level: 'Débutant',
    type: 'En ligne',
    description: 'Apprenez les fondamentaux de l\'entrepreneuriat digital et lancez votre startup.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    fullDescription: `Cette formation complète vous accompagne dans votre parcours entrepreneurial, de l'idée initiale jusqu'au lancement de votre startup digitale.

**Objectifs de la formation :**
- Développer une mentalité entrepreneuriale
- Identifier et valider des opportunités de marché
- Créer un business model viable
- Maîtriser les outils digitaux essentiels
- Construire une stratégie de lancement efficace

**Méthode pédagogique :**
Alternance entre cours théoriques, études de cas pratiques, et projets personnels. Chaque participant travaillera sur son propre projet entrepreneurial tout au long de la formation.`,
    modules: [
      {
        title: 'Introduction à l\'entrepreneuriat digital',
        duration: '1 semaine',
        lessons: 5
      },
      {
        title: 'Idéation et validation de concept',
        duration: '1.5 semaines',
        lessons: 7
      },
      {
        title: 'Business model et stratégie',
        duration: '2 semaines',
        lessons: 8
      },
      {
        title: 'Marketing digital et acquisition',
        duration: '2 semaines',
        lessons: 9
      },
      {
        title: 'Financement et levée de fonds',
        duration: '1 semaine',
        lessons: 6
      },
      {
        title: 'Lancement et croissance',
        duration: '0.5 semaine',
        lessons: 4
      }
    ],
    benefits: [
      'Accès à vie aux contenus',
      'Certificat de completion',
      'Communauté d\'entrepreneurs',
      'Sessions de mentoring',
      'Ressources téléchargeables'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/formations" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux formations
          </Link>
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-white/30">
                {formation.level}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                {formation.type}
              </Badge>
              <Badge className={`border-white/30 ${
                formation.price === 'Gratuit' 
                  ? 'bg-green-500/20 text-green-100' 
                  : 'bg-white/20 text-white'
              }`}>
                {formation.price}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {formation.title}
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              {formation.description}
            </p>
            <div className="flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {formation.duration}
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                {formation.students} étudiants
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400 fill-current" />
                {formation.rating} ({formation.students} avis)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">À propos de cette formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line text-gray-700">
                      {formation.fullDescription}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Programme de la formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {formation.modules.map((module, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">
                            Module {index + 1}: {module.title}
                          </h3>
                          <Badge variant="outline">{module.duration}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {module.lessons} leçons
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ce que vous obtiendrez</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {formation.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={formation.image} 
                    alt={formation.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4">
                      <Play className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {formation.price}
                    </div>
                    <p className="text-gray-600">Formation complète</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Link to="/inscription" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                        <BookOpen className="w-4 h-4 mr-2" />
                        S'inscrire maintenant
                      </Button>
                    </Link>
                    
                    <Button variant="outline" className="w-full" size="lg">
                      <Play className="w-4 h-4 mr-2" />
                      Aperçu gratuit
                    </Button>
                  </div>

                  <hr />

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée totale</span>
                      <span className="font-medium">{formation.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Niveau</span>
                      <span className="font-medium">{formation.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format</span>
                      <span className="font-medium">{formation.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Étudiants</span>
                      <span className="font-medium">{formation.students}</span>
                    </div>
                  </div>

                  <hr />

                  <div>
                    <h4 className="font-semibold mb-2">Instructeur</h4>
                    <p className="text-gray-700">{formation.instructor}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationDetails;