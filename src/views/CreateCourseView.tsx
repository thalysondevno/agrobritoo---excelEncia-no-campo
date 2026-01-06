"use client";

import React, { useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import { useSession } from '../components/SessionContextProvider';

interface CreateCourseViewProps {
  onBack: () => void;
}

const CreateCourseView: React.FC<CreateCourseViewProps> = ({ onBack }) => {
  const { session } = useSession();
  const user = session?.user;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setMessage({ type: 'error', text: 'Você precisa estar logado para criar um curso.' });
      return;
    }

    setLoading(true);
    setMessage(null);

    const { data, error } = await supabase
      .from('courses')
      .insert([
        {
          title,
          description,
          price: parseFloat(price),
          image_url: imageUrl,
          published,
          instructor_id: user.id,
        },
      ]);

    if (error) {
      setMessage({ type: 'error', text: `Erro ao criar curso: ${error.message}` });
    } else {
      setMessage({ type: 'success', text: 'Curso criado com sucesso!' });
      setTitle('');
      setDescription('');
      setPrice('');
      setImageUrl('');
      setPublished(false);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-bg-dark">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-10 hover:gap-4 transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Voltar para Dashboard
        </button>

        <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-border-dark shadow-2xl">
          <h1 className="text-3xl font-black text-white mb-8">Criar Novo Curso</h1>
          
          {message && (
            <div className={`p-4 rounded-xl mb-6 ${message.type === 'success' ? 'bg-primary/20 text-primary' : 'bg-red-500/20 text-red-400'}`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-xs font-bold uppercase tracking-widest text-text-muted">Título do Curso</label>
              <input 
                id="title"
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all" 
                placeholder="Ex: Nutrição Estratégica para Gado de Corte" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-xs font-bold uppercase tracking-widest text-text-muted">Descrição</label>
              <textarea 
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all h-32" 
                placeholder="Descreva o que o aluno aprenderá no curso..."
              ></textarea>
            </div>
            <div className="space-y-2">
              <label htmlFor="price" className="text-xs font-bold uppercase tracking-widest text-text-muted">Preço (R$)</label>
              <input 
                id="price"
                type="number" 
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all" 
                placeholder="Ex: 497.00" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="imageUrl" className="text-xs font-bold uppercase tracking-widest text-text-muted">URL da Imagem</label>
              <input 
                id="imageUrl"
                type="text" 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all" 
                placeholder="https://exemplo.com/imagem-curso.jpg" 
              />
            </div>
            <div className="flex items-center gap-3">
              <input 
                id="published"
                type="checkbox" 
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="h-5 w-5 rounded border-border-dark bg-white/5 text-primary focus:ring-primary"
              />
              <label htmlFor="published" className="text-white font-medium">Publicar agora</label>
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-primary text-bg-dark font-black rounded-xl hover:bg-secondary transition-all shadow-lg shadow-primary/20 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Criando...' : 'Criar Curso'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourseView;