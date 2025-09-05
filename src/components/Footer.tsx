import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BuildMart</h3>
                <p className="text-sm text-gray-400">Construction Supply Store</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your one-stop destination for all construction materials and supplies. 
              Quality products, competitive prices, and reliable service since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.743 3.708 12.446s.49-2.449 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.415c.875.926 1.365 2.077 1.365 3.374s-.49 2.448-1.365 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/electronics" className="text-gray-400 hover:text-orange-500">Electronics</Link></li>
              <li><Link href="/category/plumbing" className="text-gray-400 hover:text-orange-500">Plumbing</Link></li>
              <li><Link href="/category/furniture" className="text-gray-400 hover:text-orange-500">Furniture</Link></li>
              <li><Link href="/category/tiles" className="text-gray-400 hover:text-orange-500">Tiles & Flooring</Link></li>
              <li><Link href="/category/bricks" className="text-gray-400 hover:text-orange-500">Bricks & Blocks</Link></li>
              <li><Link href="/category/cement" className="text-gray-400 hover:text-orange-500">Cement & Concrete</Link></li>
              <li><Link href="/category/hardware" className="text-gray-400 hover:text-orange-500">Hardware & Tools</Link></li>
              <li><Link href="/category/safety" className="text-gray-400 hover:text-orange-500">Safety Equipment</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-gray-400 hover:text-orange-500">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-orange-500">Returns & Exchanges</Link></li>
              <li><Link href="/warranty" className="text-gray-400 hover:text-orange-500">Warranty</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-orange-500">FAQ</Link></li>
              <li><Link href="/bulk-orders" className="text-gray-400 hover:text-orange-500">Bulk Orders</Link></li>
              <li><Link href="/project-consultation" className="text-gray-400 hover:text-orange-500">Project Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>123 Construction Avenue</p>
                  <p>Builder City, BC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>1-800-BUILD-MART</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>info@buildmart.com</p>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-medium mb-2">Business Hours</h4>
                <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                <p>Saturday: 8:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BuildMart Construction Supply Store. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-orange-500 text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-orange-500 text-sm">Terms of Service</Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-orange-500 text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}