export type HighlightColor = 'yellow' | 'blue' | 'green' | 'purple';

export interface Highlight {
  id: string;
  paragraphIndex: number;
  startOffset: number;
  endOffset: number;
  text: string;
  color: HighlightColor;
  createdAt: number;
}

export interface Reflection {
  id: string;
  paragraphIndex: number;
  text: string;
  createdAt: number;
}

export type ThemeMode = 'light' | 'sepia' | 'dark';
export type FontSize = 'sm' | 'base' | 'lg' | 'xl';
export type MaxWidth = 'sm' | 'md' | 'lg';

export interface AppState {
  highlights: Highlight[];
  reflections: Reflection[];
  lastReadPosition: number; // Percentage 0-100
  theme: ThemeMode;
  fontSize: FontSize;
  maxWidth: MaxWidth;
  isFocusMode: boolean;
}

export interface TextSegment {
  text: string;
  highlight?: Highlight;
}