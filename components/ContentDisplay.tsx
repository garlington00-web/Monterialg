import React, { useMemo } from 'react';
import LoadingSpinner from './LoadingSpinner.tsx';

interface ContentDisplayProps {
  isLoading: boolean;
  error: string | null;
  content: string;
  images: string[];
}

const SimpleMarkdownParser: React.FC<{ text: string }> = ({ text }) => {
  const renderLineContent = (line: string) => {
    const parts = line.split('**');
    return (
      <>
        {parts.map((part, i) =>
          i % 2 === 1 ? <strong key={i} className="font-bold text-slate-100">{part}</strong> : part
        )}
      </>
    );
  };

  const formattedContent = useMemo(() => {
    return text.split('\n').map((line, index) => {
      const trimmedLine = line.trim();
      if (trimmedLine === '') return <div key={index} className="h-4" />;

      if (trimmedLine.startsWith('- ')) {
        return (
          <p key={index} className="flex items-start mb-2">
            <span className="text-teal-400 mr-3 mt-1">•</span>
            <span>{renderLineContent(trimmedLine.substring(2))}</span>
          </p>
        );
      }

      return (
        <p key={index} className="mb-4">
          {renderLineContent(line)}
        </p>
      );
    });
  }, [text]);

  return <>{formattedContent}</>;
};


const ContentDisplay: React.FC<ContentDisplayProps> = ({ isLoading, error, content, images }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <LoadingSpinner />
        <p className="mt-4 text-slate-400">Generating your lesson...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-500/50 text-red-300 p-4 rounded-lg text-center">
        <h3 className="font-bold mb-2">An Error Occurred</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="prose prose-invert prose-lg max-w-none text-slate-300">
      <SimpleMarkdownParser text={content} />

      {images.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">Visual Examples</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((imgSrc, index) => (
              <div key={index} className="bg-slate-800 p-2 rounded-lg border border-slate-700">
                <img
                  src={imgSrc}
                  alt={`Generated content image ${index + 1}`}
                  className="w-full h-auto rounded-md object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentDisplay;
