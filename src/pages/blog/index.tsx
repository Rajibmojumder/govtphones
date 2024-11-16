import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getAllBlogPosts } from '../../utils/blogPosts';

const POSTS_PER_PAGE = 10;

const BlogIndex = () => {
  const allPosts = getAllBlogPosts();
  const [displayCount, setDisplayCount] = useState(POSTS_PER_PAGE);
  const hasMore = displayCount < allPosts.length;

  const displayedPosts = allPosts.slice(0, displayCount);

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + POSTS_PER_PAGE, allPosts.length));
  };

  return (
    <>
      <NextSeo
        title="Free Government Phones Blog | Latest Updates and Guides"
        description="Stay informed about free government phone programs, eligibility updates, and technology advancements. Expert guides and insights from GovtPhones.org."
        canonical="https://govtphones.org/blog"
        openGraph={{
          title: 'Free Government Phones Blog | Latest Updates and Guides',
          description: 'Expert insights and updates about free government phone programs.',
          url: 'https://govtphones.org/blog',
          type: 'website'
        }}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Latest Blog Posts</h1>
              <p className="text-xl text-gray-600">Stay informed about free government phone programs</p>
            </div>

            <div className="space-y-6">
              {displayedPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <Link href={`/blog/${post.id}`}>
                        <div className="relative h-56 md:h-full">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-primary-dark/20" />
                        </div>
                      </Link>
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center mb-4">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-dark bg-primary-light/10 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm ml-4">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString()}
                          </time>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm ml-4">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3">
                        <Link href={`/blog/${post.id}`} className="hover:text-primary-dark transition-colors">
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                      <Link 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-primary-dark hover:text-primary-light transition-colors"
                      >
                        Read full article
                        <ArrowRightIcon className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={loadMore}
                  className="inline-flex items-center px-6 py-3 bg-primary-dark text-white font-semibold rounded-lg hover:bg-primary-light transition-colors duration-300"
                >
                  Load More Posts
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </button>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogIndex;