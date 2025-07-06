
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@alphapreneurs.tn',
      description: 'Nous vous répondons sous 24h'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: '+216 XX XXX XXX',
      description: 'Lun-Ven, 9h-18h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: 'Centre-ville, Tunis, Tunisie',
      description: 'Rendez-vous sur demande'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: '9h00 - 18h00',
      description: 'Du lundi au vendredi'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl opacity-90">
            Nous sommes là pour vous accompagner dans votre parcours entrepreneurial. 
            N'hésitez pas à nous contacter !
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    {info.details}
                  </p>
                  <CardDescription className="text-gray-600">
                    {info.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Envoyez-nous un message
                </CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="votre.email@exemple.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <Input placeholder="+216 XX XXX XXX" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <Input placeholder="Sujet de votre message" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Décrivez votre demande ou votre projet..."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 py-3">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </Button>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Notre localisation
                </CardTitle>
                <CardDescription>
                  Venez nous rendre visite à notre bureau de Tunis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-medium">Carte interactive</p>
                    <p className="text-sm">Centre-ville, Tunis</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Adresse complète</p>
                      <p className="text-gray-600">123 Avenue Habib Bourguiba<br />1000 Tunis, Tunisie</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Horaires d'ouverture</p>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 9h00 - 18h00<br />
                        Samedi: 9h00 - 13h00<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions <span className="gradient-text">Fréquentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez rapidement les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Comment rejoindre la plateforme Alphapreneurs ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  L'inscription est gratuite et simple. Cliquez sur "Connexion" puis "S'inscrire" 
                  et choisissez votre profil (Entrepreneur, Investisseur, Incubateur, ou Étudiant).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quels services proposez-vous aux startups ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nous offrons un accompagnement complet : mise en relation avec des investisseurs, 
                  formations spécialisées, opportunités de financement, et accès à notre réseau d'experts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Comment devenir investisseur partenaire ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Contactez-nous directement pour discuter des opportunités de partenariat. 
                  Nous évaluons chaque demande selon des critères précis d'expertise et d'engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
