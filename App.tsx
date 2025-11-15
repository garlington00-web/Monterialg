import React, { useState, useEffect } from 'react';
import { Topic, TopicId, ContentResult } from './types.ts';
import { TOPICS } from './constants.ts';
import { fetchTopicContent } from './services/geminiService.ts';
import Header from './components/Header.tsx';
import TopicCard from './components/TopicCard.tsx';
import ContentDisplay from './components/ContentDisplay.tsx';

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [contentResult, setContentResult] = useState<ContentResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedTopic) {
      const fetchContent = async () => {
        setIsLoading(true);
        setError(null);
        setContentResult(null);
        try {
          const result = await fetchTopicContent(selectedTopic.id);
          setContentResult(result);
        } catch (err) {
          console.error("Failed to fetch content:", err);
          setError("Failed to generate content. Please try again.");
        } finally {
          setIsLoading(false);
        }
      };
      fetchContent();
    }
  }, [selectedTopic]);

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
  };

  const handleGoBack = () => {
    setSelectedTopic(null);
    setContentResult(null);
    setError(null);
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200">
      <div className="container mx-auto max-w-3xl p-4 sm:p-6">
        {!selectedTopic ? (
          <>
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {TOPICS.map((topic) => (
                <TopicCard key={topic.id} topic={topic} onSelect={handleSelectTopic} />
              ))}
            </div>
          </>
        ) : (
          <div>
            <div className="flex items-center mb-6">
              <button
                onClick={handleGoBack}
                className="text-teal-400 hover:text-teal-300 transition-colors duration-200 flex items-center mr-4 p-2 rounded-full hover:bg-slate-800"
                aria-label="Go back"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-100">{selectedTopic.title}</h1>
            </div>
            <ContentDisplay
              isLoading={isLoading}
              error={error}
              content={contentResult?.text || ''}
              images={contentResult?.images || []}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;