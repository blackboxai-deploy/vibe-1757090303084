"use client";

import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Category } from '@/lib/products';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link href={`/category/${category.id}`} className="group">
      <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 bg-white border-2 border-gray-100 group-hover:border-orange-200">
        <CardContent className="p-0">
          <div className="relative h-48 overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/300x200?text=${encodeURIComponent(category.name)}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Badge 
              variant="secondary" 
              className="absolute top-3 right-3 bg-white/90 text-gray-800 font-semibold"
            >
              {category.productCount} items
            </Badge>
          </div>
        </CardContent>
        
        <CardFooter className="p-4">
          <div className="w-full">
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
              {category.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {category.description}
            </p>
            
            {/* Subcategories */}
            {category.subcategories && category.subcategories.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {category.subcategories.slice(0, 3).map((sub) => (
                  <Badge 
                    key={sub} 
                    variant="outline" 
                    className="text-xs text-gray-500 border-gray-300 hover:border-orange-300 hover:text-orange-600 transition-colors"
                  >
                    {sub}
                  </Badge>
                ))}
                {category.subcategories.length > 3 && (
                  <Badge 
                    variant="outline" 
                    className="text-xs text-gray-400 border-gray-300"
                  >
                    +{category.subcategories.length - 3} more
                  </Badge>
                )}
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CategoryCard;