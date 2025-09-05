"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface HeaderProps {
  onSearch?: (query: string) => void;
  searchQuery?: string;
}

const Header = ({ onSearch, searchQuery = '' }: HeaderProps) => {
  const { totalItems, totalPrice } = useCart();
  const [searchInput, setSearchInput] = useState(searchQuery);
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchInput.trim());
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    // Trigger search on input change for real-time search
    if (onSearch && value.trim().length > 2) {
      onSearch(value.trim());
    } else if (onSearch && value.trim().length === 0) {
      onSearch('');
    }
  };

  return (
    <header className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">BuildMart</h1>
                <p className="text-xs text-gray-500">Construction Supplies</p>
              </div>
            </Link>
          </div>

          {/* Search Bar and Location - First Row as requested */}
          <div className="flex-1 max-w-2xl mx-6">
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <form onSubmit={handleSearchSubmit} className="flex-1">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search for construction supplies, tools, materials..."
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </form>

              {/* Location Selector */}
              <div className="min-w-48">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="border-2 border-gray-200 focus:border-orange-500">
                    <div className="flex items-center">
                      <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <SelectValue placeholder="Delivery Location" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="downtown">Downtown District</SelectItem>
                    <SelectItem value="north">North Side</SelectItem>
                    <SelectItem value="south">South Side</SelectItem>
                    <SelectItem value="east">East Side</SelectItem>
                    <SelectItem value="west">West Side</SelectItem>
                    <SelectItem value="suburbs">Suburban Areas</SelectItem>
                    <SelectItem value="industrial">Industrial Zone</SelectItem>
                    <SelectItem value="construction">Construction Sites</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Cart and Navigation */}
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
                Home
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-orange-600 font-medium">
                Categories
              </Link>
              <Link href="/deals" className="text-gray-700 hover:text-orange-600 font-medium">
                Deals
              </Link>
            </nav>

            {/* Cart Icon */}
            <Link href="/cart">
              <Button variant="outline" className="relative border-2 border-gray-200 hover:border-orange-500">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m.6 0L6 6.2M7 13L5.4 5H3m4 8L7 13v6a1 1 0 001 1h8a1 1 0 001-1v-6m-9 0L7 13" />
                  </svg>
                  <span className="hidden sm:inline mr-2">Cart</span>
                  {totalItems > 0 && (
                    <Badge variant="destructive" className="ml-1">
                      {totalItems}
                    </Badge>
                  )}
                </div>
                {totalPrice > 0 && (
                  <span className="hidden lg:inline text-sm font-semibold ml-2">
                    ${totalPrice.toFixed(2)}
                  </span>
                )}
              </Button>
            </Link>

            {/* User Account (placeholder) */}
            <Button variant="ghost" className="text-gray-700 hover:text-orange-600">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="hidden sm:inline">Account</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200">
          <div className="flex justify-around py-2">
            <Link href="/" className="text-gray-700 hover:text-orange-600 text-sm font-medium py-2">
              Home
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-orange-600 text-sm font-medium py-2">
              Categories
            </Link>
            <Link href="/deals" className="text-gray-700 hover:text-orange-600 text-sm font-medium py-2">
              Deals
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;