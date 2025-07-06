
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, BookOpen, Briefcase, Info, MessageCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', href: '/', icon: null },
    { name: 'Opportunités', href: '/opportunites', icon: Briefcase },
    { name: 'Formations', href: '/formations', icon: BookOpen },
    { name: 'Utilisateurs', href: '/utilisateurs', icon: Users },
    { name: 'À propos', href: '/a-propos', icon: Info },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/b2da59bd-3d13-4b57-9c77-a9d73697807f.png" 
                alt="Alphapreneurs Logo" 
                className="w-8 h-8"
              />
            </div>
            <span className="text-xl font-bold gradient-text">Alphapreneurs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <Link to="/connexion">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Connexion
                </Button>
              </Link>
              <Link to="/inscription">
                <Button className="bg-primary hover:bg-primary/90">
                  <User className="w-4 h-4 mr-2" />
                  Inscription
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <Link to="/connexion" className="block">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Connexion
                  </Button>
                </Link>
                <Link to="/inscription" className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <User className="w-4 h-4 mr-2" />
                    Inscription
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
