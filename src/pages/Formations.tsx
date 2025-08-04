
import { Play, Clock, Users, Star, BookOpen, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Formations = () => {
  const formations = [
    {
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
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'Marketing Digital pour Startups',
      instructor: 'Mohamed Trabelsi',
      duration: '6 semaines',
      students: 189,
      rating: 4.6,
      price: '299 DT',
      level: 'Intermédiaire',
      type: 'Hybride',
      description: 'Maîtrisez les stratégies de marketing digital pour développer votre startup.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80'
    },
    {
      id: 3,
      title: 'Financement et Levée de Fonds',
      instructor: 'Sarah Gharbi',
      duration: '4 semaines',
      students: 156,
      rating: 4.9,
      price: '450 DT',
      level: 'Avancé',
      type: 'Présentiel',
      description: 'Découvrez les secrets de la levée de fonds et du financement des startups.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 4,
      title: 'Leadership et Management d\'équipe',
      instructor: 'Karim Mezghani',
      duration: '5 semaines',
      students: 203,
      rating: 4.7,
      price: '199 DT',
      level: 'Intermédiaire',
      type: 'En ligne',
      description: 'Développez vos compétences en leadership pour diriger efficacement votre équipe.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const categories = [
    { name: 'Tous', count: 48 },
    { name: 'Entrepreneuriat', count: 12 },
    { name: 'Marketing', count: 8 },
    { name: 'Finance', count: 6 },
    { name: 'Leadership', count: 9 },
    { name: 'Technologie', count: 13 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Formations & Programmes
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Développez vos compétences entrepreneuriales avec nos formations spécialisées
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`${index === 0 ? 'bg-primary hover:bg-primary/90' : 'hover:bg-gray-50'}`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {formations.map((formation) => (
              <Card key={formation.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={formation.image} 
                    alt={formation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      formation.price === 'Gratuit' ? 'bg-green-500' : 'bg-primary'
                    }`}>
                      {formation.price}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">
                      {formation.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{formation.level}</Badge>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-600">
                        {formation.rating}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {formation.title}
                  </CardTitle>
                  <div className="text-sm text-gray-600">
                    Par {formation.instructor}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {formation.description}
                  </CardDescription>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {formation.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {formation.students} étudiants
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link to="/inscription" className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <BookOpen className="w-4 h-4 mr-2" />
                        S'inscrire
                      </Button>
                    </Link>
                    <Link to={`/formations/${formation.id}`}>
                      <Button variant="outline">
                        Détails
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Voir toutes les formations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Devenez un expert reconnu
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Obtenez des certifications reconnues et rejoignez notre communauté d'entrepreneurs à succès
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Découvrir nos certifications
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Formations;
