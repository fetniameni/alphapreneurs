
import { useState } from 'react';
import { GalleryHorizontal, GalleryVertical, Eye, Download, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Galerie = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = [
    'Tous',
    'Événements',
    'Startups',
    'Formations',
    'Networking',
    'Conférences'
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Événement de networking startup',
      category: 'Événements',
      likes: 24,
      date: '2024-01-15'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Session de formation innovation',
      category: 'Formations',
      likes: 18,
      date: '2024-01-10'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Présentation startup tech',
      category: 'Startups',
      likes: 32,
      date: '2024-01-08'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Conférence entrepreneuriat',
      category: 'Conférences',
      likes: 45,
      date: '2024-01-05'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Atelier leadership',
      category: 'Formations',
      likes: 27,
      date: '2024-01-03'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Pitch des startups',
      category: 'Startups',
      likes: 38,
      date: '2024-01-01'
    }
  ];

  const filteredImages = selectedCategory === 'Tous' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Galerie
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Découvrez les moments forts de notre communauté d'entrepreneurs
            </p>
          </div>
        </div>
      </section>

      {/* Filters and View Controls */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-primary hover:bg-primary/90' : 'hover:bg-gray-50'}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <GalleryHorizontal className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'masonry' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('masonry')}
              >
                <GalleryVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'columns-1 md:columns-2 lg:columns-3'
          }`}>
            {filteredImages.map((image) => (
              <Card key={image.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-primary">
                    {image.category}
                  </Badge>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{image.date}</span>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{image.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucune image trouvée pour cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galerie;
