interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const getAllBlogPosts = (): BlogPost[] => {
  const posts = [
    {
      id: 'accessibility-challenges',
      title: 'Accessibility Challenges and Solutions in the Lifeline Program',
      excerpt: 'Explore common barriers and innovative strategies to make free government phones accessible to all eligible participants.',
      date: '2024-11-16',
      readTime: '7 min read',
      category: 'Accessibility',
      image: '/images/blog/accessibility-challenges-hero.jpg'
    },
    {
      id: 'best-practices',
      title: 'Best Practices for Using Your Free Government Phone Wisely',
      excerpt: 'Learn practical tips and strategies to maximize the benefits of your free government phone service.',
      date: '2024-11-16',
      readTime: '6 min read',
      category: 'Tips & Guides',
      image: '/images/blog/best-practices-hero.jpg'
    },
    {
      id: 'myths-misconceptions',
      title: 'Myths and Misconceptions About Free Government Phones',
      excerpt: 'Debunking common myths and clarifying facts about the free government phone program.',
      date: '2024-11-16',
      readTime: '8 min read',
      category: 'Education',
      image: '/images/blog/myths-misconceptions-hero.jpg'
    },
    {
      id: 'state-innovations',
      title: 'State-Level Innovations in the Free Government Phone Program',
      excerpt: 'Discover how different states are implementing and improving free phone programs for their residents.',
      date: '2024-11-16',
      readTime: '7 min read',
      category: 'Program Updates',
      image: '/images/blog/state-innovations-hero.jpg'
    },
    {
      id: 'emergency-preparedness',
      title: 'Emergency Preparedness: How Free Phones Can Save Lives',
      excerpt: 'Discover how free government phones serve as crucial lifelines during emergencies.',
      date: '2024-11-16',
      readTime: '7 min read',
      category: 'Safety',
      image: '/images/blog/emergency-preparedness-hero.jpg'
    },
    {
      id: 'elderly-connectivity',
      title: 'How Free Government Phones Are Helping the Elderly Stay Connected',
      excerpt: 'Discover how free government phones improve the lives of senior citizens.',
      date: '2024-11-16',
      readTime: '8 min read',
      category: 'Senior Care',
      image: '/images/blog/elderly-connectivity-hero.jpg'
    },
    {
      id: 'switch-providers',
      title: 'How to Switch Free Government Phone Providers Seamlessly',
      excerpt: 'Expert tips for changing your Lifeline provider without service interruption.',
      date: '2024-11-16',
      readTime: '6 min read',
      category: 'Guide',
      image: '/images/blog/switch-providers-guide.jpg'
    },
    {
      id: 'comparing-phone-plans',
      title: 'Free Government Phones vs Paid Plans: A Complete Comparison',
      excerpt: 'Understanding the value and differences between free government phone plans and commercial options.',
      date: '2024-11-16',
      readTime: '8 min read',
      category: 'Comparison',
      image: '/images/blog/phone-plans-comparison.jpg'
    },
    {
      id: 'history-acp-program',
      title: 'The Rise and Sunset of the Affordable Connectivity Program (ACP)',
      excerpt: 'Explore the history, impact, and conclusion of the Affordable Connectivity Program.',
      date: '2024-11-16',
      readTime: '9 min read',
      category: 'Program History',
      image: '/images/blog/acp-history-hero.jpg'
    },
    {
      id: 'technological-advancements',
      title: 'Smart Evolution: Free Government Phone Technology Advances',
      excerpt: 'Explore how free government phones have evolved with cutting-edge technology.',
      date: '2024-11-16',
      readTime: '6 min read',
      category: 'Technology',
      image: '/images/blog/tech-advancement-hero.jpg'
    },
    {
      id: 'impact-rural-communities',
      title: 'Bridging the Digital Divide: Free Phones in Rural America',
      excerpt: 'How free government phones are transforming lives in rural communities.',
      date: '2024-11-16',
      readTime: '7 min read',
      category: 'Community Impact',
      image: '/images/blog/rural-impact-hero.jpg'
    },
    {
      id: 'history-lifeline-program',
      title: 'Evolution of Lifeline: From Basic Phones to Digital Access',
      excerpt: 'From basic telephone service to modern smartphones: Discover how the Lifeline program has evolved.',
      date: '2024-11-16',
      readTime: '8 min read',
      category: 'Program History',
      image: '/images/blog/lifeline-history-hero.jpg'
    }
  ];

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getRelatedPosts = (currentPostId: string, count: number = 2): BlogPost[] => {
  const allPosts = getAllBlogPosts();
  return allPosts.filter(post => post.id !== currentPostId).slice(0, count);
};