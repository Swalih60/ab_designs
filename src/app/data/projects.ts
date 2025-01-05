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
      title: 'Compact elegance Studio design',
      description: 'Crafting stylish and functional studio apartments with seamless open layouts and smart space solutions',
      thumbnailUrl: '/images/t1.JPG',
      images: [
        '/images/t11.JPG',
        '/images/t12.JPG',
        '/images/t13.JPG',
      ],
      details: 'This project involved transforming a raw loft space into a modern, open-concept living area. We focused on preserving the industrial charm while introducing warm, contemporary elements. The result is a harmonious blend of exposed brick, sleek furnishings, and custom-built storage solutions.',
    },
    {
      id: 'coastal-retreat',
      title: 'Serene Retreat Interiors',
      description: 'Elegant resort bedrooms blending comfort and nature',
      thumbnailUrl: '/images/t2.JPG',
      images: [
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
        '/placeholder.svg?height=600&width=800',
      ],
      details: 'For this coastal retreat, we drew inspiration from the surrounding natural beauty. The color palette reflects the sand, sea, and sky, creating a calming atmosphere throughout the home. Large windows maximize the stunning ocean views, while natural materials like weathered wood and woven textiles add texture and warmth.',
    },
    {
      id: 'urban-apartment',
      title: 'Opulent living design',
      description: 'Luxurious living spaces with timeless elegance.',
      thumbnailUrl: '/images/t3.JPG',
      images: [
        '/images/t31.JPG',
        '/images/t32.JPG',
        '/images/t33.JPG',
      ],
      details: 'This urban apartment project showcases how thoughtful design can maximize limited space. We employed clever storage solutions, multi-functional furniture, and a light color scheme to create an illusion of spaciousness. The result is a chic, comfortable home that meets all the clients needs without feeling cramped.',
    },
    {
      id: 'rustic-modern',
      title: 'Rustic Harmony Interiors',
      description: 'Blending green rustic floors with dark wood for a warm, earthy feel.',
      thumbnailUrl: '/images/t4.JPG',
      images: [
        '/images/t41.JPG',
        '/images/t42.JPG',
        '/images/t43.JPG',
      ],
      details: 'This farmhouse renovation project combines the warmth of traditional rustic elements with the clean lines of modern design. We preserved original features like exposed beams and hardwood floors, while introducing contemporary fixtures and furnishings. The kitchen, in particular, showcases this blend with its farmhouse sink, shaker cabinets, and state-of-the-art appliances.',
    },
    {
      id: 'minimalist-zen',
      title: 'Modern minimalistic living dining',
      description: 'A sleek, neutral-toned living room designed for modern elegance and comfort.',
      thumbnailUrl: '/images/t5.JPG',
      images: [
        '/images/t51.JPG',
        '/images/t52.JPG',
        '/images/t53.JPG',
      ],
      details: 'Inspired by Japanese minimalism, this project focused on creating a serene, uncluttered living space. We used a restrained color palette, natural materials, and carefully curated furnishings to achieve a sense of tranquility. Custom storage solutions ensure that everything has its place, maintaining the clean, open feel of the home.',
    },
    {
      id: 'eclectic-bohemian',
      title: 'Golden Jewelry Showcase',
      description: 'Elegant space designed to highlight the beauty of golden jewelry.',
      thumbnailUrl: '/images/t6.JPG',
      images: [
        '/images/t61.JPG',
        '/images/t62.JPG',
        '/images/t63.JPG',
      ],
      details: 'This eclectic bohemian loft is a celebration of color, pattern, and global influences. We curated a mix of vintage and modern pieces, layering textures and incorporating bold artwork to create a space thats both visually exciting and comfortable. The open floor plan allows the eclectic style to flow seamlessly throughout the home.',
    },
  ];
  
  