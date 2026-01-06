"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';

interface BlogPostViewProps {
  blogId: string;
  onBack: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  created_at: string;
  author_id: string;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ blogId, onBack }) => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, content, image_url, created_at, author_id')
        .eq('id', blogId)
        .single();

      if (error) {
        setError(error.message);
        setBlog(null);
      } else {
        setBlog(data);
      }
      setLoading(false);
    };

    fetchBlogPost();
  }, [blogId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-bg-dark text-white">
        Carregando post...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-bg-dark text-red-400">
        Erro ao carregar post: {error}
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-bg-dark text-text-muted">
        Post não encontrado.
        <button 
          onClick={onBack}
          className="ml-4 text-primary font-bold hover:underline"
        >
          Voltar para o Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-bg-dark">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-10 hover:gap-4 transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Voltar para o Blog
        </button>

        <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-border-dark shadow-2xl">
          {blog.image_url && (
            <img 
              src={blog.image_url} 
              alt={blog.title} 
              className="w-full h-80 object-cover rounded-2xl mb-8 border border-white/10" 
            />
          )}
          <h1 className="text-4xl font-black text-white mb-4">{blog.title}</h1>
          <p className="text-sm text-white/40 mb-8">Publicado em: {new Date(blog.created_at).toLocaleDateString()}</p>
          <div className="text-text-muted leading-relaxed space-y-6">
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostView;