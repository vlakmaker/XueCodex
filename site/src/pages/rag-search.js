// 📄 site/src/pages/rag-search.js
import Layout from '@theme/Layout';
import React, { useState } from 'react';
import styles from './rag-search.module.css';

export default function RagSearch() {
    const [apiKey, setApiKey] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState(null);
    const [sources, setSources] = useState([]);
    const [loading, setLoading] = useState(false);

    const askQuestion = async () => {
        setLoading(true);
        setAnswer(null);
        setSources([]);
        try {
            const response = await fetch('https://api.xuecodex.tech/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    api_key: apiKey,
                    question: question,
                }),
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            setAnswer(data.answer);
            setSources(data.sources || []);
        } catch (err) {
            console.error(err);
            setAnswer('❌ Something went wrong. Check the console.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout title="Ask XueCodex">
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>🔍 Ask XueCodex</h1>
                    <p>Enter your OpenRouter API key and ask a question based on the docs.</p>

                    <label>🔑 API Key:</label>
                    <input
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className={styles.input}
                    />

                    <label>❓ Question:</label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className={styles.input}
                    />

                    <button onClick={askQuestion} className={styles.button} disabled={loading}>
                        {loading ? 'Asking...' : 'Ask'}
                    </button>

                    {answer && (
                        <div className={styles.answerBox}>
                            <p><strong>📘 Answer:</strong></p>
                            <p>{answer}</p>
                            {sources.length > 0 && (
                                <div>
                                    <p><strong>🔗 Sources:</strong></p>
                                    <ul>
                                        {sources.map((src, idx) => (
                                            <li key={idx}>
                                                <a href={src} target="_blank" rel="noopener noreferrer">{src}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
