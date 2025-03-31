// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout
      title="XueCodex"
      description="Experimental AI Knowledge Vault powered by BittyGPT "
    >
      <main>
        {/* Hero Section */}
        <header
          className="hero hero--primary"
          style={{ textAlign: 'center', padding: '4rem 1rem' }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            {/* Logo + Title in a row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <img
                src={useBaseUrl('img/logo.png')}
                alt="XueCodex Logo"
                style={{ maxHeight: '80px' }}
              />
              <h1
                className="hero__title"
                style={{ fontSize: '3rem', fontWeight: 700, margin: 0 }}
              >
                XueCodex
              </h1>
            </div>

            <p
              className="hero__subtitle"
              style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}
            >
              Your experimental AI learning vault ⚙️📘
            </p>

            <div style={{ marginTop: '1rem' }}>
              <a
                className="button button--secondary button--lg"
                href={useBaseUrl('/docs/intro')}
                style={{ fontWeight: 600 }}
              >
                🚀 Start Learning
              </a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>🧠 What is XueCodex?</h2>
          <p style={{ maxWidth: 700, margin: '0 auto' }}>
            <strong>XueCodex</strong> (from the Mandarin word 学 xué, meaning "to learn") is a living, open-source knowledge base tracking one curious mind's journey through the ever-evolving world of AI. It blends deep learning theory, hands-on experimentation, and conceptual reflection — powered by BittyGPT.
          </p>
        </section>

        {/* BittyGPT Section */}
        <section style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f5f6fa' }}>
          <h2>🤖 Who is BittyGPT?</h2>
          <p style={{ maxWidth: 700, margin: '0 auto' }}>
            BittyGPT is Vera's AI sidekick — a curious little brain that helps write, build, and brainstorm your way through the learning journey. Trained on love, logic, and large language models, Bitty helps you stay motivated and make sense of the chaos.
          </p>
          <p>
            Visit <a href="https://bittygpt.com" target="_blank" rel="noopener noreferrer">bittygpt.com</a> or <a href="https://xuecodex.tech" target="_blank" rel="noopener noreferrer">xuecodex.tech</a> to follow along or contribute.
          </p>
        </section>
      </main>
    </Layout>
  );
}
