import React from 'react';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { getAllBlogPosts } from '../utils/blogPosts';

interface RelatedPostsProps {
  currentPostId: string;
}

const RelatedPosts = ({ currentPostId }: RelatedPostsProps) => {
  // Get all posts except current one
  const otherPosts = getAllBlogPosts().filter(post => post.id !== currentPostId);
  
  // Get 2 random posts for variety
  const getRandomPosts = (posts: any[], count: number) => {
    const shuffled = [...posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const relatedPosts = getRandomPosts(otherPosts, 2);

  return (
    <div className="mt-16 border-t border-gray-200 pt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {relatedPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-dark bg-primary-light/10 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm ml-auto">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                </div>
              </div>
              <Link href={`/blog/${post.id}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-dark transition-colors">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;