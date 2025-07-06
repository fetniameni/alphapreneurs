
import { Target, Users, Award, TrendingUp, Heart, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const APropos = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous sommes passionnés par l\'entrepreneuriat et l\'innovation en Tunisie.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous croyons en la force de la collaboration et du networking.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous encourageons l\'innovation et la créativité entrepreneuriale.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tout ce que nous entreprendrons.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Entrepreneurs connectés' },
    { number: '150+', label: 'Startups accompagnées' },
    { number: '50+', label: 'Investisseurs partenaires' },
    { number: '25M+', label: 'DT de financement facilité' }
  ];

  const team = [
    {
      name: 'Dr. Amina Benali',
      role: 'Fondatrice & CEO',
      bio: 'Experte en entrepreneuriat avec 15 ans d\'expérience dans l\'accompagnement de startups.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b152b75a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Mohamed Trabelsi',
      role: 'Directeur Technique',
      bio: 'Ingénieur passionné par l\'innovation technologique et le développement de plateformes.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Sarah Gharbi',
      role: 'Directrice Partenariats',
      bio: 'Spécialiste en développement de partenariats stratégiques et relations investisseurs.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            À propos d'Alphapreneurs
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Notre mission est de créer un écosystème entrepreneurial dynamique en Tunisie, 
            où les idées innovantes rencontrent les bonnes opportunités et les bons partenaires.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Alphapreneurs est née de la conviction que la Tunisie regorge de talents entrepreneuriaux 
                exceptionnels qui méritent d'être soutenus, connectés et propulsés vers le succès.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nous construisons une plateforme centralisée qui réunit tous les acteurs de l'écosystème 
                entrepreneurial : startups, investisseurs, incubateurs, mentors et talents, 
                pour créer des synergies et accélérer l'innovation.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                alt="Notre mission"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos <span className="gradient-text">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident nos actions et définissent notre approche de l'entrepreneuriat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Notre Impact en Chiffres
            </h2>
            <p className="text-xl opacity-90">
              Des résultats concrets qui témoignent de notre engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre <span className="gradient-text">Équipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe passionnée et expérimentée, dédiée au succès de l'entrepreneuriat tunisien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Notre <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Faire de la Tunisie un hub entrepreneurial reconnu au niveau international, 
            où chaque idée innovante a la possibilité de se transformer en succès durable. 
            Nous rêvons d'un écosystème où la collaboration, l'innovation et l'excellence 
            sont les piliers du développement économique et social.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APropos;
