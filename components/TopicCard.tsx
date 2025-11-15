import React from 'react';
import { Topic } from '../types.ts';

interface TopicCardProps {
  topic: Topic;
  onSelect: (topic: Topic) => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, onSelect }) => {
  const Icon = topic.icon;

  return (
    <button
      onClick={() => onSelect(topic)}
      className="bg-slate-800 p-6 rounded-lg text-left hover:bg-slate-700/50 border border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900"
    >
      <div className="flex items-start space-x-4">
        <div className="bg-slate-900 p-3 rounded-lg">
          <Icon className="h-8 w-8 text-teal-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{topic.title}</h3>
          <p className="mt-1 text-slate-400">{topic.description}</p>
        </div>
      </div>
    </button>
  );
};

export default TopicCard;