
import { Search, MapPin, Clock, DollarSign, Building2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Opportunites = () => {
  const opportunities = [
    {
      id: 1,
      title: 'Développeur Full-Stack',
      company: 'TechStart Tunisia',
      location: 'Tunis',
      type: 'CDI',
      salary: '2500-3500 DT',
      description: 'Rejoignez notre équipe dynamique pour développer des solutions innovantes.',
      posted: '2 jours'
    },
    {
      id: 2,
      title: 'Chef de Projet Marketing Digital',
      company: 'Digital Innovation',
      location: 'Sfax',
      type: 'Stage',
      salary: '800-1000 DT',
      description: 'Opportunité de stage dans une startup spécialisée en marketing digital.',
      posted: '1 semaine'
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'AI Solutions',
      location: 'Remote',
      type: 'Freelance',
      salary: '150 DT/jour',
      description: 'Mission freelance pour analyser et traiter des données complexes.',
      posted: '3 jours'
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      company: 'Creative Hub',
      location: 'Tunis',
      type: 'CDI',
      salary: '2000-2800 DT',
      description: 'Créez des expériences utilisateur exceptionnelles pour nos clients.',
      posted: '5 jours'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Opportunités d'emploi
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Découvrez des postes passionnants dans des startups innovantes et des entreprises en croissance
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Rechercher des opportunités..." 
                className="pl-10 h-12"
              />
            </div>
            <div className="flex gap-2">
              <Button className="bg-primary hover:bg-primary/90 h-12 px-8">
                Rechercher
              </Button>
              <Button variant="outline" className="h-12 px-6">
                Filtres
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {opportunities.map((opportunity) => (
              <Card key={opportunity.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {opportunity.title}
                      </CardTitle>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building2 className="w-4 h-4 mr-2" />
                        {opportunity.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        opportunity.type === 'CDI' ? 'bg-green-100 text-green-800' :
                        opportunity.type === 'Stage' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {opportunity.type}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {opportunity.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {opportunity.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Publié il y a {opportunity.posted}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link to="/inscription">
                      <Button className="bg-primary hover:bg-primary/90">
                        Postuler maintenant
                      </Button>
                    </Link>
                    <Link to={`/opportunites/${opportunity.id}`}>
                      <Button variant="outline">
                        Voir les détails
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
                Charger plus d'opportunités
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Opportunites;
