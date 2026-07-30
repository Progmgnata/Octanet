import { getAllPosts } from '@/lib/markdown';
import Link from 'next/link';
import AdSense from '@/components/AdSense';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <header className="home-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <div className=""></div>
        <h1>Welcome to OctaNet Articles</h1>
        <p>The place for articles and news about network and cybersecurity</p>
      </header>
      <AdSense client="ca-pub-8620115090678360"/>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h2>Last Articles</h2>

        {posts.map((post) => (
          <article 
            className="card-artigo"

            key={post.slug} 
          >
            <small style={{ color: '#666' }}>{post.data}</small>
            
            <h3 style={{ margin: '0.5rem 0' , color: '#5d10b5' }}>{post.titulo}</h3>
            
            <p style={{ color: '#444', marginBottom: '1rem' }}>{post.resumo}</p>
            
            {/* Link direcionando para o artigo completo */}
            <Link 
              href={`/artigo/${post.slug}`}
              style={{ 
                color: '#10e834', 
                textDecoration: 'none', 
                fontWeight: 'bold' 
              }}> Read more → </Link>
          </article>
        ))}
      </section>
      <AdSense client="ca-pub-8620115090678360"/>
    </main>
  );
}