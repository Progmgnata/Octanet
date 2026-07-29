'use client';

import { useEffect } from 'react';

export default function AdSense({ client, slot, format = 'auto', responsive = 'true' }) {
  useEffect(() => {
    try {
      // Tenta carregar o anúncio do Google no navegador
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Erro ao carregar o AdSense:", err);
    }
  }, []);

  // Teste visual indicando onde o anúncio vai ficar:
  if (process.env.NODE_ENV === 'development') {
    return (
      <div style={{
        background: '#e9ecef',
        border: '2px dashed #adb5bd',
        /* border-radius: '8px', */
        padding: '1.5rem',
        textAlign: 'center',
        color: '#495057',
        margin: '2rem 0',
        fontSize: '0.9rem',
        fontWeight: 'bold'
      }}>
         Espaço para Anúncio(Slot: {slot || 'Demonstração'})
      </div>
    );
  }

  return (
    <div style={{ margin: '2rem 0', textAlign: 'center', overflow: 'hidden' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}