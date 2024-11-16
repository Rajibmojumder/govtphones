import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { getAllBlogPosts } from '../utils/blogPosts';

const BlogSection = () => {
  const blogPosts = getAllBlogPosts().slice(0, 8); // Get latest 8 posts

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Latest Updates</h2>
          <p className="text-xl text-gray-600">Stay informed about free government phone programs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 bg-gray-200">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-primary-dark/20" />
                </div>
              </Link>
              
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

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-primary-dark transition-colors">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-dark hover:text-primary-light transition-colors"
                  >
                    Read more
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary-dark text-white font-semibold rounded-lg hover:bg-primary-light transition-colors duration-300"
          >
            View All Blog Posts
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;