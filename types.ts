
import { ComponentType } from 'react';

export interface Topic {
  id: TopicId;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export type TopicId =
  | 'BROKERAGE_ACCOUNT'
  | 'TECHNICAL_ANALYSIS'
  | 'FUNDAMENTAL_ANALYSIS'
  | 'CHART_PATTERNS'
  | 'CANDLESTICK_PATTERNS';

export interface ContentResult {
    text: string;
    images: string[];
}
