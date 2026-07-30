import { getPostData, getAllPosts } from '@/lib/markdown';
import Link from 'next/link';
import AdSense from '@/components/AdSense';
// Esta função faz gerar as páginas de cada artigo de forma super rápida (SSG)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PaginaDoArtigo({ params }) {
  const { slug } = await params;
  // Pega o conteúdo completo em HTML e os dados do artigo
  const postData = await getPostData(slug);

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <article className="card-artigo">
        <header style={{ marginBottom: '2rem', borderBottom: '1px solid var(--cor-borda)', paddingBottom: '1rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{postData.titulo}</h1>
          <small style={{ color: 'var(--cor-texto-principal)' }}>Publicated in: {postData.data}</small>
        </header>
        <AdSense client="client=ca-pub-8620115090678360"/>
        {/* Renderiza conteúdo HTML gerado a partir do .md */}
        <div 
          className="conteudo-do-post"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </article>
      {/* Botão para voltar à página home */}
      <Link 
        href="/" 
        style={{ 
          display: 'inline-block', 
          marginBottom: '2rem', 
          color: '#0aee19', 
          textDecoration: 'none' 
        }}
      >
        ← Return to other articles
      </Link>
      <AdSense client="ca-pub-8620115090678360"/>
    </main>
  );
}