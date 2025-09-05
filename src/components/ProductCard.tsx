'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { useCart } from '@/hooks/use-cart';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product page
    setIsAdding(true);
    
    // Simulate a brief loading state
    await new Promise(resolve => setTimeout(resolve, 300));
    
    addToCart(product, 1);
    setIsAdding(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-500 overflow-hidden h-full flex flex-col">
      <Link href={`/product/${product.id}`} className="flex-1 flex flex-col">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/400x300?text=${encodeURIComponent(product.name)}`;
            }}
          />
          {discountPercentage > 0 && (
            <Badge className="absolute top-2 right-2 bg-red-500 text-white">
              -{discountPercentage}%
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="destructive" className="text-lg px-4 py-2">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>
        
        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                {product.brand}
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <svg className="w-3 h-3 text-yellow-400 fill-current mr-1" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span>{product.rating}</span>
                <span className="ml-1">({product.reviews})</span>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500">
                  SKU: {product.sku}
                </div>
              </div>
            </div>
          </div>
          
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            className={`w-full mt-auto ${
              product.inStock 
                ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isAdding ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Adding...
              </div>
            ) : product.inStock ? (
              'Add to Cart'
            ) : (
              'Out of Stock'
            )}
          </Button>
        </CardContent>
      </Link>
    </Card>
  );
}