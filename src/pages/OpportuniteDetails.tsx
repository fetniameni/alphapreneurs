import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Building2, Users, Calendar, ArrowLeft, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const OpportuniteDetails = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from database
  const opportunity = {
    id: 1,
    title: 'Développeur Full-Stack',
    company: 'TechStart Tunisia',
    location: 'Tunis',
    type: 'CDI',
    salary: '2500-3500 DT',
    description: 'Rejoignez notre équipe dynamique pour développer des solutions innovantes dans le domaine de la technologie financière.',
    posted: '2 jours',
    fullDescription: `Nous recherchons un développeur full-stack passionné pour rejoindre notre équipe en pleine croissance. 

**Responsabilités :**
- Développer et maintenir des applications web modernes
- Collaborer avec l'équipe de design pour implémenter des interfaces utilisateur
- Optimiser les performances et la sécurité des applications
- Participer aux décisions techniques et à l'architecture du produit

**Compétences requises :**
- Maîtrise de React, Node.js, et TypeScript
- Expérience avec les bases de données (PostgreSQL, MongoDB)
- Connaissance des outils de déploiement (Docker, AWS)
- Esprit d'équipe et capacité d'adaptation

**Avantages :**
- Environnement de travail flexible
- Opportunités de formation continue
- Participation aux bénéfices
- Assurance santé complète`,
    requirements: [
      '3+ années d\'expérience en développement web',
      'Maîtrise de React et Node.js',
      'Expérience avec TypeScript',
      'Connaissance des bases de données',
      'Anglais technique'
    ],
    benefits: [
      'Salaire compétitif',
      'Télétravail possible',
      'Formation continue',
      'Assurance santé',
      'Tickets restaurant'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/opportunites" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux opportunités
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {opportunity.title}
            </h1>
            <div className="flex items-center text-white/90 mb-4">
              <Building2 className="w-5 h-5 mr-2" />
              <span className="text-xl">{opportunity.company}</span>
            </div>
            <div className="flex flex-wrap gap-4 text-white/80">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {opportunity.location}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Publié il y a {opportunity.posted}
              </div>
              <Badge className="bg-white/20 text-white border-white/30">
                {opportunity.type}
              </Badge>
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
                  <CardTitle className="text-2xl">Description du poste</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line text-gray-700">
                      {opportunity.fullDescription}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Exigences</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {opportunity.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Avantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {opportunity.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
                <CardHeader>
                  <CardTitle>Informations de l'offre</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Salaire</span>
                    <div className="flex items-center text-primary font-semibold">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {opportunity.salary}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Type de contrat</span>
                    <Badge variant="outline">{opportunity.type}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Localisation</span>
                    <span className="font-medium">{opportunity.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Publié</span>
                    <span className="font-medium">Il y a {opportunity.posted}</span>
                  </div>

                  <hr className="my-6" />

                  <div className="space-y-3">
                    <Link to="/inscription" className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                        <Send className="w-4 h-4 mr-2" />
                        Postuler maintenant
                      </Button>
                    </Link>
                    
                    <Link to="/contact" className="block">
                      <Button variant="outline" className="w-full" size="lg">
                        Contacter l'entreprise
                      </Button>
                    </Link>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-2">Partager cette offre</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        LinkedIn
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Email
                      </Button>
                    </div>
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

export default OpportuniteDetails;