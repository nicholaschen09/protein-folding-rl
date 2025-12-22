'use client';

import { blogPosts } from '@/data/blog-posts';
import { BlogPost } from '@/types/blog';
import { useState } from 'react';

function BlogPostCard({ post }: { post: BlogPost }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <article className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 mb-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          {post.title}
        </h2>
        <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        {isExpanded ? (
          <div className="whitespace-pre-line text-zinc-700 dark:text-zinc-300">
            {post.content}
          </div>
        ) : (
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
            {post.excerpt}
          </p>
        )}
      </div>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </article>
  );
}

export default function BlogHome() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-800">
      <header className="bg-white dark:bg-zinc-900 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Protein Folding & AI Blog
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Exploring the intersection of computational biology and artificial intelligence
          </p>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      
      <footer className="mt-16 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-zinc-600 dark:text-zinc-400">
          <p>&copy; 2024 Protein Folding & AI Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
