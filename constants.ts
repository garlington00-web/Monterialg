import { Topic, TopicId } from './types.ts';
import { BrokerageIcon } from './components/icons/BrokerageIcon.tsx';
import { TechnicalAnalysisIcon } from './components/icons/TechnicalAnalysisIcon.tsx';
import { FundamentalAnalysisIcon } from './components/icons/FundamentalAnalysisIcon.tsx';
import { ChartPatternIcon } from './components/icons/ChartPatternIcon.tsx';
import { CandlestickIcon } from './components/icons/CandlestickIcon.tsx';

export const TOPICS: Topic[] = [
  {
    id: 'BROKERAGE_ACCOUNT',
    title: 'Setup a Brokerage Account',
    description: 'Learn the step-by-step process of opening your first trading account.',
    icon: BrokerageIcon,
  },
  {
    id: 'TECHNICAL_ANALYSIS',
    title: 'Technical Analysis Basics',
    description: 'Understand how to read charts and use indicators to predict price movements.',
    icon: TechnicalAnalysisIcon,
  },
  {
    id: 'FUNDAMENTAL_ANALYSIS',
    title: 'Fundamental Analysis Basics',
    description: 'Analyze a company\'s financial health to determine a stock\'s true value.',
    icon: FundamentalAnalysisIcon,
  },
  {
    id: 'CHART_PATTERNS',
    title: 'Common Chart Patterns',
    description: 'Identify key patterns on stock charts that can signal future trends.',
    icon: ChartPatternIcon,
  },
  {
    id: 'CANDLESTICK_PATTERNS',
    title: 'Candlestick Patterns',
    description: 'Learn to interpret candlestick charts to gauge market sentiment.',
    icon: CandlestickIcon,
  },
];

export const PROMPTS: Record<TopicId, { text: string; images: string[] }> = {
  BROKERAGE_ACCOUNT: {
    text: `Explain step-by-step how to set up a brokerage account for a complete beginner. 
           Structure the explanation with clear headings for each step. Cover the following points:
           - What is a brokerage account?
           - How to choose the right broker (mentioning types like full-service vs. discount).
           - What personal information and documents are typically required.
           - The process of funding the account.
           - A brief mention of account types like cash vs. margin.
           - Keep the language simple, encouraging, and easy to follow. Use markdown for formatting like headings (using '**' for bold) and bullet points (using '-').`,
    images: [],
  },
  TECHNICAL_ANALYSIS: {
    text: `Explain the basics of technical analysis for stock trading to a complete beginner.
           Use simple analogies where possible. Cover these core concepts:
           - **What is Technical Analysis?**: The study of price movement.
           - **Charts are Key**: Explain Line, Bar, and Candlestick charts briefly.
           - **Support and Resistance**: The concepts of price ceilings and floors.
           - **Trends**: What are uptrends, downtrends, and sideways trends.
           - **Common Indicators**: Briefly explain Moving Averages (MA) and the Relative Strength Index (RSI) in simple terms.
           Format the output using markdown with bold headings and bullet points.`,
    images: [],
  },
  FUNDAMENTAL_ANALYSIS: {
    text: `Explain the basics of fundamental analysis for stock investing to a complete beginner.
           Focus on the 'why' behind it. Cover these key concepts:
           - **What is Fundamental Analysis?**: Evaluating a business's health to find its 'intrinsic value'.
           - **Earnings and Revenue**: The difference between sales and profit.
           - **P/E Ratio (Price-to-Earnings)**: A simple explanation of what it is and how it's used to see if a stock is 'expensive' or 'cheap'.
           - **Balance Sheets & Income Statements**: What these documents are for, in very simple terms (assets, liabilities, income, expenses).
           - **The Goal**: To find good companies to invest in for the long term.
           Use markdown for clear, easy-to-read formatting with bold headings.`,
    images: [],
  },
  CHART_PATTERNS: {
    text: `Explain common and important stock chart patterns to a beginner. For each pattern, describe what it looks like and what it typically indicates (e.g., reversal or continuation of a trend). 
           Cover the following patterns:
           - **Head and Shoulders** (and Inverse Head and Shoulders)
           - **Double Top and Double Bottom**
           - **Triangles** (Ascending, Descending, Symmetrical)
           - **Flags and Pennants**
           Use markdown formatting with bold headings for each pattern.`,
    images: [
      "A clear, simple, educational diagram of a 'Head and Shoulders' stock chart pattern with labels.",
      "A clear, simple, educational diagram of a 'Double Bottom' stock chart pattern with labels.",
      "A clear, simple, educational diagram of an 'Ascending Triangle' stock chart pattern with labels.",
      "A clear, simple, educational diagram of a 'Bull Flag' stock chart pattern with labels.",
    ],
  },
  CANDLESTICK_PATTERNS: {
    text: `Explain common and important candlestick patterns to a beginner. For each pattern, describe its appearance and what it suggests about market sentiment.
           Cover the following patterns:
           - **Doji**: A sign of indecision.
           - **Hammer and Hanging Man**: Potential reversal signals.
           - **Bullish and Bearish Engulfing**: Strong potential reversal patterns.
           - **Morning Star and Evening Star**: Three-candle reversal patterns.
           Use markdown formatting with bold headings for each pattern.`,
    images: [
      "A clear, simple, educational diagram of a 'Doji' candlestick pattern with labels on a white background.",
      "A clear, simple, educational diagram of a 'Hammer' candlestick pattern with labels on a white background.",
      "A clear, simple, educational diagram of a 'Bullish Engulfing' candlestick pattern with labels on a white background.",
      "A clear, simple, educational diagram of a 'Morning Star' candlestick pattern with labels on a white background.",
    ],
  },
};