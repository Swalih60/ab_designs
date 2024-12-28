export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    images: string[];
    details: string;
  }
  
  export const projects: Project[] = [
    {
      id: 'modern-loft',
      title: 'Modern Loft Transformation',
      description: 'A spacious loft converted into a contemporary living space',
      thumbnailUrl: '/placeholder.svg?height=400&width=600',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      details: 'This project involved transforming a raw loft space into a modern, open-concept living area. We focused on preserving the industrial charm while introducing warm, contemporary elements. The result is a harmonious blend of exposed brick, sleek furnishings, and custom-built storage solutions.',
    },
    {
      id: 'coastal-retreat',
      title: 'Coastal Retreat',
      description: 'A serene beach house with panoramic ocean views',
      thumbnailUrl: '/placeholder.svg?height=400&width=600',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      details: 'For this coastal retreat, we drew inspiration from the surrounding natural beauty. The color palette reflects the sand, sea, and sky, creating a calming atmosphere throughout the home. Large windows maximize the stunning ocean views, while natural materials like weathered wood and woven textiles add texture and warmth.',
    },
    {
      id: 'urban-apartment',
      title: 'Urban Apartment Makeover',
      description: 'A small city apartment transformed into a functional, stylish space',
      thumbnailUrl: '/placeholder.svg?height=400&width=600',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      details: 'This urban apartment project showcases how thoughtful design can maximize limited space. We employed clever storage solutions, multi-functional furniture, and a light color scheme to create an illusion of spaciousness. The result is a chic, comfortable home that meets all the clients needs without feeling cramped.',
    },
    {
      id: 'rustic-modern',
      title: 'Rustic Modern Farmhouse',
      description: 'A perfect blend of rustic charm and modern amenities',
      thumbnailUrl: '/placeholder.svg?height=400&width=600',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      details: 'This farmhouse renovation project combines the warmth of traditional rustic elements with the clean lines of modern design. We preserved original features like exposed beams and hardwood floors, while introducing contemporary fixtures and furnishings. The kitchen, in particular, showcases this blend with its farmhouse sink, shaker cabinets, and state-of-the-art appliances.',
    },
    {
      id: 'minimalist-zen',
      title: 'Minimalist Zen Retreat',
      description: 'A calming, clutter-free home inspired by Japanese design',
      thumbnailUrl: '/placeholder.svg?height=400&width=600',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      details: 'Inspired by Japanese minimalism, this project focused on creating a serene, uncluttered living space. We used a restrained color palette, natural materials, and carefully curated furnishings to achieve a sense of tranquility. Custom storage solutions ensure that everything has its place, maintaining the clean, open feel of the home.',
    },
    {
      id: 'eclectic-bohemian',
      title: 'Eclectic Bohemian Loft',
      description: 'A vibrant, artistic space full of color and texture',
      thumbnailUrl: '/placeholder.svg?height=400&width=600',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      details: 'This eclectic bohemian loft is a celebration of color, pattern, and global influences. We curated a mix of vintage and modern pieces, layering textures and incorporating bold artwork to create a space thats both visually exciting and comfortable. The open floor plan allows the eclectic style to flow seamlessly throughout the home.',
    },
  ];
  
  