
import { useState } from 'react';
import { Briefcase, Building, GraduationCap, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProfileType {
  value: 'entrepreneur' | 'investor' | 'incubator' | 'student';
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const profileTypes: ProfileType[] = [
  {
    value: 'entrepreneur',
    label: 'Entrepreneur',
    description: 'Créer et développer votre startup',
    icon: Briefcase
  },
  {
    value: 'investor',
    label: 'Investisseur',
    description: 'Investir dans des projets prometteurs',
    icon: TrendingUp
  },
  {
    value: 'incubator',
    label: 'Incubateur',
    description: 'Accompagner les entrepreneurs',
    icon: Building
  },
  {
    value: 'student',
    label: 'Stagiaire/Étudiant',
    description: 'Apprendre et acquérir de l\'expérience',
    icon: GraduationCap
  }
];

interface ProfileTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProfileTypeSelect({ value, onChange }: ProfileTypeSelectProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {profileTypes.map((type) => (
        <Card
          key={type.value}
          className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
            value === type.value
              ? 'ring-2 ring-primary bg-primary/5'
              : 'hover:bg-gray-50'
          }`}
          onClick={() => onChange(type.value)}
        >
          <CardContent className="p-6 text-center">
            <type.icon className={`w-12 h-12 mx-auto mb-4 ${
              value === type.value ? 'text-primary' : 'text-gray-400'
            }`} />
            <h3 className={`font-semibold mb-2 ${
              value === type.value ? 'text-primary' : 'text-gray-900'
            }`}>
              {type.label}
            </h3>
            <p className="text-sm text-gray-600">
              {type.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
