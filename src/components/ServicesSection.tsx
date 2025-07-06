
import { BookOpen, Briefcase, Users, DollarSign, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Opportunités d\'emploi',
      description: 'Découvrez des postes dans des startups innovantes et des entreprises en croissance.',
      color: 'text-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Formations spécialisées',
      description: 'Développez vos compétences avec nos programmes de formation en ligne et en présentiel.',
      color: 'text-green-500'
    },
    {
      icon: Users,
      title: 'Mise en relation',
      description: 'Connectez-vous avec des entrepreneurs, investisseurs et mentors de votre secteur.',
      color: 'text-purple-500'
    },
    {
      icon: DollarSign,
      title: 'Financement',
      description: 'Accédez à des opportunités de financement et d\'investissement pour vos projets.',
      color: 'text-yellow-500'
    },
    {
      icon: Calendar,
      title: 'Événements & Webinaires',
      description: 'Participez à des événements exclusifs, workshops et conférences d\'experts.',
      color: 'text-red-500'
    },
    {
      icon: Award,
      title: 'Accompagnement personnalisé',
      description: 'Bénéficiez d\'un accompagnement sur mesure pour développer votre startup.',
      color: 'text-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos services pour <span className="gradient-text">votre succès</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services conçus pour accompagner les entrepreneurs 
            tunisiens à chaque étape de leur parcours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 group-hover:bg-primary/10 transition-colors duration-300 mb-4 ${service.color}`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
