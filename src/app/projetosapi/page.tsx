'use client';  // Se estiver usando Next.js, necessário para marcar como código do cliente

import React, { useState, useEffect } from 'react';

interface PostProps {
  id: number;
  descricao: string;
  nome: string;
}

interface ResponseProps {
  posts: PostProps[];  // Tipo correto para os posts
}

export default function ProjetosApiPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);  // Tipo de posts como um array de PostProps
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('http://localhost:5000/projetos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Aqui estamos dizendo que a resposta terá o formato de 'ResponseProps'
        const data: ResponseProps = await response.json();  // Agora, 'data' será do tipo ResponseProps
        console.log(data);  // Isso vai imprimir o objeto com a chave 'posts'
        
        setPosts(data.posts);  // Agora, 'data.posts' é o que você realmente quer
        setLoading(false);
      } catch (error: any) {
        console.error("Erro ao buscar projetos:", error);
        setError(`Erro ao buscar projetos: ${error.message}`);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Carregando projetos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Todos os Projetos</h1>
      <div>
        {posts.map((post) => (  // Aqui, 'posts' é um array de PostProps
          <div key={post.id}>
            <h2>{post.nome}</h2>
            <p>{post.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
