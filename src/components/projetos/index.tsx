"use client";

interface PostProps{
    id: number;
    nome: string;
    descricao: string;

}

interface ResponseProps{
    posts: PostProps[]

}

import React, { useEffect, useState } from 'react';

export default function PostProjects() {
    const [data, setData] = useState<ResponseProps | null>(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3010/api/projeto');
            const result: ResponseProps = await response.json();
            setData(result);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Todos os posts</h1>
            <div>
                {data?.posts?.map(post => (
                    <div key={post.id}>
                        <h2>{post.nome}</h2>
                        <p>{post.descricao}</p>
                    </div>
                )) || <p></p>}
            </div>
        </div>
    );
}

//Essa é a que deu errado, de projetos que tentei usar api e deu ruim