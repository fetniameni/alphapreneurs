
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Lancement du programme d\'accélération 2024',
      description: 'Découvrez notre nouveau programme d\'accélération destiné aux startups technologiques tunisiennes.',
      date: '15 Mars 2024',
      category: 'Programmes',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'Webinaire : Financement des startups en 2024',
      description: 'Rejoignez-nous pour un webinaire exclusif sur les nouvelles tendances du financement entrepreneurial.',
      date: '22 Mars 2024',
      category: 'Événements',
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      title: 'Success Story : TechInnovate lève 2M DT',
      description: 'Découvrez comment TechInnovate, membre de notre communauté, a réussi sa levée de fonds.',
      date: '18 Mars 2024',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Actualités & <span className="gradient-text">Événements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières nouvelles de l'écosystème entrepreneurial tunisien 
            et des événements à ne pas manquer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {article.description}
                </CardDescription>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  Lire la suite
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Voir toutes les actualités
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
