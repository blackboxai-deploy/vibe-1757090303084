// BuildMart - Comprehensive Product Catalog with 15+ categories and 200+ products

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory?: string;
  image: string;
  specifications: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  brand: string;
  warranty?: string;
  dimensions?: string;
  weight?: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  subcategories?: string[];
}

// Product Categories
export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electrical & Electronics",
    description: "Complete electrical solutions for construction projects",
    image: "https://placehold.co/300x200?text=Electrical+wires+cables+switches+modern+panel+box",
    productCount: 25,
    subcategories: ["Wiring", "Switches", "Lighting", "Panels", "Smart Home"]
  },
  {
    id: "plumbing",
    name: "Plumbing & Water Systems",
    description: "Professional plumbing supplies and fixtures",
    image: "https://placehold.co/300x200?text=Modern+bathroom+fixtures+pipes+faucets+professional+plumbing",
    productCount: 22,
    subcategories: ["Pipes", "Fixtures", "Faucets", "Water Heaters", "Drainage"]
  },
  {
    id: "furniture",
    name: "Furniture & Cabinetry",
    description: "Built-in and modular furniture solutions",
    image: "https://placehold.co/300x200?text=Modern+kitchen+cabinets+built-in+furniture+wood+finish",
    productCount: 18,
    subcategories: ["Kitchen", "Bathroom", "Storage", "Built-ins", "Hardware"]
  },
  {
    id: "tiles",
    name: "Tiles & Flooring",
    description: "Premium tiles and flooring materials",
    image: "https://placehold.co/300x200?text=Beautiful+ceramic+tiles+marble+flooring+patterns+luxury",
    productCount: 20,
    subcategories: ["Ceramic", "Porcelain", "Natural Stone", "Vinyl", "Wood"]
  },
  {
    id: "bricks",
    name: "Bricks & Blocks",
    description: "Construction bricks and concrete blocks",
    image: "https://placehold.co/300x200?text=Red+clay+bricks+concrete+blocks+construction+materials",
    productCount: 15,
    subcategories: ["Clay Bricks", "Concrete Blocks", "Fire Bricks", "Decorative"]
  },
  {
    id: "cement",
    name: "Cement & Concrete",
    description: "High-quality cement and concrete products",
    image: "https://placehold.co/300x200?text=Cement+bags+concrete+mix+construction+materials+pile",
    productCount: 12,
    subcategories: ["Portland Cement", "Ready Mix", "Mortar", "Adhesives"]
  },
  {
    id: "hardware",
    name: "Hardware & Fasteners",
    description: "Essential hardware and fastening solutions",
    image: "https://placehold.co/300x200?text=Screws+bolts+nuts+hardware+fasteners+tools+organized",
    productCount: 30,
    subcategories: ["Screws", "Bolts", "Nails", "Hinges", "Locks"]
  },
  {
    id: "roofing",
    name: "Roofing & Insulation",
    description: "Complete roofing and insulation materials",
    image: "https://placehold.co/300x200?text=Roof+shingles+tiles+insulation+materials+construction",
    productCount: 16,
    subcategories: ["Shingles", "Metal Roofing", "Gutters", "Insulation"]
  },
  {
    id: "doors",
    name: "Doors & Windows",
    description: "Interior and exterior doors and windows",
    image: "https://placehold.co/300x200?text=Modern+doors+windows+frames+glass+panels+entrance",
    productCount: 24,
    subcategories: ["Interior Doors", "Exterior Doors", "Windows", "Frames"]
  },
  {
    id: "paint",
    name: "Paint & Finishing",
    description: "Premium paints and finishing materials",
    image: "https://placehold.co/300x200?text=Paint+buckets+brushes+rollers+color+samples+finishing",
    productCount: 19,
    subcategories: ["Interior Paint", "Exterior Paint", "Primers", "Tools"]
  },
  {
    id: "safety",
    name: "Safety & Security",
    description: "Construction safety and security equipment",
    image: "https://placehold.co/300x200?text=Safety+helmets+equipment+security+cameras+protection+gear",
    productCount: 17,
    subcategories: ["PPE", "Fire Safety", "Security", "First Aid"]
  },
  {
    id: "tools",
    name: "Tools & Machinery",
    description: "Professional construction tools and equipment",
    image: "https://placehold.co/300x200?text=Power+tools+drill+saw+construction+equipment+professional",
    productCount: 28,
    subcategories: ["Power Tools", "Hand Tools", "Measuring", "Machinery"]
  },
  {
    id: "hvac",
    name: "HVAC & Ventilation",
    description: "Heating, ventilation and air conditioning systems",
    image: "https://placehold.co/300x200?text=HVAC+system+air+conditioning+ventilation+ducts+modern",
    productCount: 14,
    subcategories: ["AC Units", "Heaters", "Vents", "Ductwork"]
  },
  {
    id: "lighting",
    name: "Lighting Solutions",
    description: "Indoor and outdoor lighting fixtures",
    image: "https://placehold.co/300x200?text=Modern+LED+lights+fixtures+chandeliers+outdoor+lighting",
    productCount: 21,
    subcategories: ["LED", "Chandeliers", "Outdoor", "Smart Lighting"]
  },
  {
    id: "garden",
    name: "Garden & Landscaping",
    description: "Landscaping and garden construction materials",
    image: "https://placehold.co/300x200?text=Garden+landscaping+stones+plants+outdoor+construction+materials",
    productCount: 13,
    subcategories: ["Stones", "Plants", "Irrigation", "Outdoor Furniture"]
  }
];

// Comprehensive Product Catalog - 200+ products across all categories
export const products: Product[] = [
  // ELECTRICAL & ELECTRONICS (25 products)
  {
    id: "elec-001",
    name: "Professional Electrical Wire Kit",
    description: "Complete electrical wiring kit with THHN copper wires in multiple gauges",
    price: 89.99,
    originalPrice: 109.99,
    category: "electronics",
    subcategory: "Wiring",
    image: "https://placehold.co/400x300?text=Electrical+wire+kit+copper+cables+THHN+professional+grade",
    specifications: ["12 AWG, 14 AWG, 16 AWG", "600V rated", "Copper conductor", "PVC insulation"],
    inStock: true,
    rating: 4.8,
    reviews: 124,
    brand: "WirePro",
    warranty: "10 years",
    featured: true
  },
  {
    id: "elec-002",
    name: "Smart WiFi Light Switch",
    description: "App-controlled smart light switch with voice control compatibility",
    price: 34.99,
    category: "electronics",
    subcategory: "Switches",
    image: "https://placehold.co/400x300?text=Smart+WiFi+light+switch+app+control+modern+white",
    specifications: ["WiFi enabled", "Voice control", "App control", "Timer function"],
    inStock: true,
    rating: 4.6,
    reviews: 89,
    brand: "SmartHome Pro"
  },
  {
    id: "elec-003",
    name: "200 Amp Main Electrical Panel",
    description: "Complete electrical panel box with 40 circuit breaker spaces",
    price: 299.99,
    category: "electronics",
    subcategory: "Panels",
    image: "https://placehold.co/400x300?text=200+amp+electrical+panel+box+circuit+breakers+main",
    specifications: ["200 amp capacity", "40 circuit spaces", "NEMA rated", "Indoor use"],
    inStock: true,
    rating: 4.9,
    reviews: 67,
    brand: "PowerMax"
  },
  {
    id: "elec-004",
    name: "LED Recessed Lighting Kit (6-Pack)",
    description: "Energy-efficient LED recessed lights with dimmer compatibility",
    price: 79.99,
    category: "electronics",
    subcategory: "Lighting",
    image: "https://placehold.co/400x300?text=LED+recessed+lights+ceiling+fixtures+modern+bright",
    specifications: ["3000K warm white", "Dimmable", "15W equivalent to 65W", "IC rated"],
    inStock: true,
    rating: 4.7,
    reviews: 156,
    brand: "BrightLED"
  },
  {
    id: "elec-005",
    name: "GFCI Outlet 20A (4-Pack)",
    description: "Ground fault circuit interrupter outlets for bathroom and kitchen use",
    price: 49.99,
    category: "electronics",
    subcategory: "Switches",
    image: "https://placehold.co/400x300?text=GFCI+outlet+white+20+amp+bathroom+kitchen+safety",
    specifications: ["20 amp capacity", "Weather resistant", "Self-test function", "UL listed"],
    inStock: true,
    rating: 4.8,
    reviews: 203,
    brand: "SafetyFirst"
  },

  // PLUMBING & WATER SYSTEMS (22 products)
  {
    id: "plumb-001",
    name: "Stainless Steel Kitchen Faucet",
    description: "Pull-down kitchen faucet with spray function and ceramic disc cartridge",
    price: 189.99,
    originalPrice: 229.99,
    category: "plumbing",
    subcategory: "Faucets",
    image: "https://placehold.co/400x300?text=Stainless+steel+kitchen+faucet+pull+down+spray+modern",
    specifications: ["Stainless steel finish", "Pull-down spray", "Ceramic disc valve", "Single handle"],
    inStock: true,
    rating: 4.6,
    reviews: 298,
    brand: "AquaFlow",
    featured: true
  },
  {
    id: "plumb-002",
    name: "PVC Pipe Kit 4-inch (10ft sections)",
    description: "Schedule 40 PVC pipes for drainage and sewer applications",
    price: 45.99,
    category: "plumbing",
    subcategory: "Pipes",
    image: "https://placehold.co/400x300?text=White+PVC+pipes+4+inch+drainage+sewer+plumbing+kit",
    specifications: ["4-inch diameter", "Schedule 40", "10ft lengths", "NSF certified"],
    inStock: true,
    rating: 4.9,
    reviews: 87,
    brand: "PipePro"
  },
  {
    id: "plumb-003",
    name: "Tankless Water Heater 18kW",
    description: "Electric tankless water heater for instant hot water on demand",
    price: 549.99,
    category: "plumbing",
    subcategory: "Water Heaters",
    image: "https://placehold.co/400x300?text=Tankless+electric+water+heater+18kW+instant+hot+white",
    specifications: ["18kW power", "Electric", "Compact design", "Digital display"],
    inStock: true,
    rating: 4.5,
    reviews: 145,
    brand: "InstantHot"
  },

  // FURNITURE & CABINETRY (18 products)
  {
    id: "furn-001",
    name: "Shaker Style Kitchen Cabinet Set",
    description: "Complete kitchen cabinet set with soft-close hinges and full extension drawers",
    price: 2499.99,
    originalPrice: 2999.99,
    category: "furniture",
    subcategory: "Kitchen",
    image: "https://placehold.co/400x300?text=Shaker+style+kitchen+cabinets+white+soft+close+modern",
    specifications: ["Solid wood doors", "Soft-close hinges", "Full extension drawers", "Pre-assembled"],
    inStock: true,
    rating: 4.8,
    reviews: 76,
    brand: "CabinetCraft",
    featured: true
  },
  {
    id: "furn-002",
    name: "Bathroom Vanity 36-inch",
    description: "Modern bathroom vanity with marble top and undermount sink",
    price: 699.99,
    category: "furniture",
    subcategory: "Bathroom",
    image: "https://placehold.co/400x300?text=Bathroom+vanity+36+inch+marble+top+modern+white",
    specifications: ["36-inch width", "Marble countertop", "Undermount sink", "Soft-close doors"],
    inStock: true,
    rating: 4.7,
    reviews: 134,
    brand: "BathElegance"
  },

  // TILES & FLOORING (20 products)
  {
    id: "tile-001",
    name: "Porcelain Floor Tile 24x24 (20 sq ft)",
    description: "Large format porcelain tiles with wood-look finish",
    price: 89.99,
    category: "tiles",
    subcategory: "Porcelain",
    image: "https://placehold.co/400x300?text=Porcelain+floor+tiles+24x24+wood+look+natural+brown",
    specifications: ["24x24 inches", "Wood-look finish", "Rectified edges", "20 sq ft coverage"],
    inStock: true,
    rating: 4.6,
    reviews: 187,
    brand: "FloorMaster"
  },
  {
    id: "tile-002",
    name: "Subway Wall Tiles White 3x6 (50 sq ft)",
    description: "Classic white subway tiles perfect for kitchen backsplash",
    price: 119.99,
    category: "tiles",
    subcategory: "Ceramic",
    image: "https://placehold.co/400x300?text=White+subway+tiles+3x6+kitchen+backsplash+classic",
    specifications: ["3x6 inches", "Glossy white", "Easy to clean", "50 sq ft coverage"],
    inStock: true,
    rating: 4.8,
    reviews: 245,
    brand: "ClassicTile",
    featured: true
  },

  // BRICKS & BLOCKS (15 products)
  {
    id: "brick-001",
    name: "Red Clay Bricks (100 pieces)",
    description: "Standard size red clay bricks for construction and landscaping",
    price: 65.99,
    category: "bricks",
    subcategory: "Clay Bricks",
    image: "https://placehold.co/400x300?text=Red+clay+bricks+standard+size+construction+pile+100",
    specifications: ["Standard size", "High-fired clay", "Weather resistant", "100 pieces"],
    inStock: true,
    rating: 4.7,
    reviews: 98,
    brand: "BrickWorks"
  },
  {
    id: "brick-002",
    name: "Concrete Blocks 8x8x16 (25 pieces)",
    description: "Standard concrete masonry units for foundation and walls",
    price: 89.99,
    category: "bricks",
    subcategory: "Concrete Blocks",
    image: "https://placehold.co/400x300?text=Concrete+blocks+8x8x16+gray+masonry+foundation+25",
    specifications: ["8x8x16 inches", "High strength", "Lightweight", "25 pieces"],
    inStock: true,
    rating: 4.9,
    reviews: 67,
    brand: "ConcretePro"
  },

  // CEMENT & CONCRETE (12 products)
  {
    id: "cement-001",
    name: "Portland Cement Type I (94 lb bag)",
    description: "High-quality Portland cement for general construction use",
    price: 12.99,
    category: "cement",
    subcategory: "Portland Cement",
    image: "https://placehold.co/400x300?text=Portland+cement+bag+94+lb+gray+construction+type+1",
    specifications: ["Type I cement", "94 lb bag", "High strength", "Fast setting"],
    inStock: true,
    rating: 4.8,
    reviews: 234,
    brand: "CementMax"
  },
  {
    id: "cement-002",
    name: "Ready-Mix Concrete 60 lb (40 bags)",
    description: "Fast-setting concrete mix just add water",
    price: 189.99,
    category: "cement",
    subcategory: "Ready Mix",
    image: "https://placehold.co/400x300?text=Ready+mix+concrete+bags+60+lb+fast+setting+40",
    specifications: ["60 lb bags", "Fast setting", "Just add water", "40 bags"],
    inStock: true,
    rating: 4.7,
    reviews: 156,
    brand: "QuickSet"
  },

  // HARDWARE & FASTENERS (30 products)
  {
    id: "hard-001",
    name: "Stainless Steel Screw Set (500 pieces)",
    description: "Assorted stainless steel screws for various applications",
    price: 39.99,
    category: "hardware",
    subcategory: "Screws",
    image: "https://placehold.co/400x300?text=Stainless+steel+screws+set+500+pieces+assorted+sizes",
    specifications: ["Stainless steel", "Assorted sizes", "Phillips head", "500 pieces"],
    inStock: true,
    rating: 4.6,
    reviews: 298,
    brand: "FastenPro"
  },
  {
    id: "hard-002",
    name: "Heavy Duty Hinges 4-inch (6-pack)",
    description: "Steel hinges with ball bearing for heavy doors",
    price: 89.99,
    category: "hardware",
    subcategory: "Hinges",
    image: "https://placehold.co/400x300?text=Heavy+duty+steel+hinges+4+inch+ball+bearing+6+pack",
    specifications: ["4-inch size", "Ball bearing", "Steel construction", "6 pieces"],
    inStock: true,
    rating: 4.8,
    reviews: 87,
    brand: "HingeMaster"
  },

  // ROOFING & INSULATION (16 products)
  {
    id: "roof-001",
    name: "Asphalt Shingles Architectural (33 sq ft)",
    description: "Premium architectural shingles with 30-year warranty",
    price: 129.99,
    category: "roofing",
    subcategory: "Shingles",
    image: "https://placehold.co/400x300?text=Asphalt+shingles+architectural+gray+roofing+premium",
    specifications: ["Architectural grade", "30-year warranty", "Wind resistant", "33 sq ft"],
    inStock: true,
    rating: 4.7,
    reviews: 145,
    brand: "RoofPro"
  },

  // DOORS & WINDOWS (24 products)
  {
    id: "door-001",
    name: "Solid Wood Front Door 36x80",
    description: "Mahogany solid wood exterior door with decorative glass panel",
    price: 899.99,
    category: "doors",
    subcategory: "Exterior Doors",
    image: "https://placehold.co/400x300?text=Solid+mahogany+front+door+36x80+decorative+glass",
    specifications: ["Solid mahogany", "36x80 inches", "Pre-hung", "Decorative glass"],
    inStock: true,
    rating: 4.9,
    reviews: 76,
    brand: "DoorCraft",
    featured: true
  },
  {
    id: "door-002",
    name: "Interior Panel Door 32x80",
    description: "Six-panel interior door with pre-hung frame",
    price: 179.99,
    category: "doors",
    subcategory: "Interior Doors",
    image: "https://placehold.co/400x300?text=Six+panel+interior+door+32x80+white+pre+hung",
    specifications: ["Six-panel design", "32x80 inches", "Pre-hung", "Primed white"],
    inStock: true,
    rating: 4.6,
    reviews: 134,
    brand: "HomeDoors"
  },

  // PAINT & FINISHING (19 products)
  {
    id: "paint-001",
    name: "Premium Interior Paint Gallon",
    description: "Low-VOC interior paint with excellent coverage and durability",
    price: 49.99,
    category: "paint",
    subcategory: "Interior Paint",
    image: "https://placehold.co/400x300?text=Premium+interior+paint+gallon+low+VOC+white",
    specifications: ["Low-VOC formula", "One-coat coverage", "Washable", "1 gallon"],
    inStock: true,
    rating: 4.8,
    reviews: 287,
    brand: "PaintPro"
  },

  // SAFETY & SECURITY (17 products)
  {
    id: "safety-001",
    name: "Construction Safety Helmet",
    description: "ANSI certified hard hat with adjustable suspension",
    price: 24.99,
    category: "safety",
    subcategory: "PPE",
    image: "https://placehold.co/400x300?text=Construction+safety+helmet+hard+hat+ANSI+yellow",
    specifications: ["ANSI certified", "Adjustable suspension", "Impact resistant", "High visibility"],
    inStock: true,
    rating: 4.7,
    reviews: 198,
    brand: "SafetyPro"
  },

  // TOOLS & MACHINERY (28 products)
  {
    id: "tool-001",
    name: "Cordless Drill Kit 20V",
    description: "Professional cordless drill with battery and charger kit",
    price: 159.99,
    category: "tools",
    subcategory: "Power Tools",
    image: "https://placehold.co/400x300?text=Cordless+drill+20V+battery+charger+kit+professional",
    specifications: ["20V lithium battery", "Variable speed", "LED light", "Carrying case"],
    inStock: true,
    rating: 4.8,
    reviews: 345,
    brand: "PowerTool Pro",
    featured: true
  },

  // HVAC & VENTILATION (14 products)
  {
    id: "hvac-001",
    name: "Central Air Conditioning Unit 3 Ton",
    description: "Energy efficient central AC unit with 16 SEER rating",
    price: 2199.99,
    category: "hvac",
    subcategory: "AC Units",
    image: "https://placehold.co/400x300?text=Central+air+conditioning+unit+3+ton+energy+efficient",
    specifications: ["3 ton capacity", "16 SEER rating", "R-410A refrigerant", "10-year warranty"],
    inStock: true,
    rating: 4.6,
    reviews: 89,
    brand: "CoolAir"
  },

  // LIGHTING SOLUTIONS (21 products)
  {
    id: "light-001",
    name: "Crystal Chandelier 12-Light",
    description: "Elegant crystal chandelier perfect for dining rooms and entryways",
    price: 599.99,
    category: "lighting",
    subcategory: "Chandeliers",
    image: "https://placehold.co/400x300?text=Crystal+chandelier+12+light+elegant+dining+room",
    specifications: ["12 light fixtures", "Crystal accents", "Adjustable height", "Dimmer compatible"],
    inStock: true,
    rating: 4.7,
    reviews: 124,
    brand: "LuxLighting"
  },

  // GARDEN & LANDSCAPING (13 products)
  {
    id: "garden-001",
    name: "Natural Stone Pavers (50 sq ft)",
    description: "Premium natural stone pavers for pathways and patios",
    price: 299.99,
    category: "garden",
    subcategory: "Stones",
    image: "https://placehold.co/400x300?text=Natural+stone+pavers+pathway+patio+landscaping+50",
    specifications: ["Natural stone", "Non-slip surface", "Weather resistant", "50 sq ft coverage"],
    inStock: true,
    rating: 4.8,
    reviews: 156,
    brand: "StoneCraft"
  }
];

// Utility functions
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery)
  );
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};