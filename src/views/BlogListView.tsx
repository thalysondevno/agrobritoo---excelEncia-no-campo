"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';

interface BlogListViewProps {
  onBack: () => void;
  navigateToBlogPost: (id: string) => void;
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  created_at: string;
}

const BlogListView: React.FC<BlogListViewProps> = ({ onBack, navigateToBlogPost }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, content, image_url, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message);
        setBlogs([]);
      } else {
        setBlogs(data || []);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-bg-dark text-white">
        Carregando blogs...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-bg-dark text-red-400">
        Erro ao carregar blogs: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-bg-dark">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-10 hover:gap-4 transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Voltar
        </button>

        <h1 className="text-4xl font-black text-white mb-12">Nosso Blog</h1>
        
        {blogs.length === 0 ? (
          <p className="text-text-muted text-lg text-center">Nenhum post de blog publicado ainda.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div 
                key={blog.id} 
                className="glass p-6 rounded-3xl border border-border-dark hover:border-primary/20 transition-colors cursor-pointer"
                onClick={() => navigateToBlogPost(blog.id)}
              >
                {blog.image_url && (
                  <img 
                    src={blog.image_url} 
                    alt={blog.title} 
                    className="w-full h-48 object-cover rounded-2xl mb-4 border border-white/10" 
                  />
                )}
                <h2 className="text-xl font-bold text-white mb-2">{blog.title}</h2>
                <p className="text-text-muted text-sm line-clamp-3">{blog.content}</p>
                <p className="text-xs text-white/40 mt-4">Publicado em: {new Date(blog.created_at).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListView;