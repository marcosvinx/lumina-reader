import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  BookOpen,
  Settings,
  Download,
  Menu,
  X,
  Moon,
  Sun,
  Coffee,
  Type,
  MessageSquarePlus,
  Trash2,
  Eye,
  EyeOff,
  AlignLeft,
  AlignJustify,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  BOOK_CONTENT,
  BOOK_TITLE,
  BOOK_AUTHOR,
  BOOK_STRUCTURE,
  HIGHLIGHT_COLORS,
  THEME_CLASSES,
  FONT_SIZES,
  MAX_WIDTHS
} from './constants';
import {
  AppState,
  Highlight,
  Reflection,
  ThemeMode,
  HighlightColor,
  FontSize,
  MaxWidth
} from './types';
import { useSelection } from './hooks/useSelection';

// --- Helper Components ---

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => (
  <button
    className={`p-2 rounded-full transition-colors duration-200 hover:bg-opacity-10 hover:bg-gray-500 ${className}`}
    {...props}
  />
);

// --- Main App ---

export default function App() {
  // State
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [fontSize, setFontSize] = useState<FontSize>('base');
  const [maxWidth, setMaxWidth] = useState<MaxWidth>('md');
  const [textAlign, setTextAlign] = useState<'left' | 'justify'>('left');
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Structure Accordion State
  const [openStructureItems, setOpenStructureItems] = useState<Record<number, boolean>>({});

  // For reflections
  const [activeReflectionInput, setActiveReflectionInput] = useState<number | null>(null);
  const [reflectionText, setReflectionText] = useState("");

  const contentRef = useRef<HTMLDivElement>(null);
  const { selection, clearSelection } = useSelection();

  // Initialize from LocalStorage
  useEffect(() => {
    const savedData = localStorage.getItem('lumina-ebook-data-v1');
    if (savedData) {
      try {
        const parsed: Partial<AppState> = JSON.parse(savedData);
        if (parsed.highlights) setHighlights(parsed.highlights);
        if (parsed.reflections) setReflections(parsed.reflections);
        if (parsed.theme) setTheme(parsed.theme);
        if (parsed.fontSize) setFontSize(parsed.fontSize);
        if (parsed.maxWidth) setMaxWidth(parsed.maxWidth);

        // Restore scroll position after a short delay to allow rendering
        if (parsed.lastReadPosition) {
          setTimeout(() => {
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            window.scrollTo({ top: height * parsed.lastReadPosition, behavior: 'instant' });
          }, 100);
        }
      } catch (e) {
        console.error("Failed to load saved data", e);
      }
    }
  }, []);

  // Persist State
  useEffect(() => {
    const data: AppState = {
      highlights,
      reflections,
      lastReadPosition: scrollProgress,
      theme,
      fontSize,
      maxWidth,
      isFocusMode
    };
    localStorage.setItem('lumina-ebook-data-v1', JSON.stringify(data));
  }, [highlights, reflections, scrollProgress, theme, fontSize, maxWidth, isFocusMode]);

  // Scroll Progress Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split content into paragraphs
  const paragraphs = useMemo(() => {
    return BOOK_CONTENT.split('\n\n').filter(p => p.trim().length > 0);
  }, []);

  // Logic to add highlight
  const addHighlight = (color: HighlightColor) => {
    if (!selection || selection.paragraphIndex === null) return;

    // Check if a highlight already exists for this exact selection
    const existingIndex = highlights.findIndex(h =>
      h.paragraphIndex === selection.paragraphIndex &&
      h.startOffset === selection.startOffset &&
      h.endOffset === selection.endOffset
    );

    if (existingIndex !== -1) {
      const existing = highlights[existingIndex];
      // If same color, toggle it off (remove)
      if (existing.color === color) {
        setHighlights(prev => prev.filter((_, i) => i !== existingIndex));
      } else {
        // If different color, update the color
        setHighlights(prev => {
          const newHighlights = [...prev];
          newHighlights[existingIndex] = { ...existing, color };
          return newHighlights;
        });
      }
    } else {
      // Add new highlight
      const newHighlight: Highlight = {
        id: Date.now().toString() + Math.random().toString().slice(2),
        paragraphIndex: selection.paragraphIndex,
        startOffset: selection.startOffset,
        endOffset: selection.endOffset,
        text: selection.text,
        color,
        createdAt: Date.now()
      };
      setHighlights(prev => [...prev, newHighlight]);
    }

    clearSelection();
  };

  const removeHighlight = (id: string) => {
    setHighlights(prev => prev.filter(h => h.id !== id));
  };

  // Logic to add reflection
  const saveReflection = (paragraphIndex: number) => {
    if (!reflectionText.trim()) {
      setActiveReflectionInput(null);
      return;
    }

    const newReflection: Reflection = {
      id: Date.now().toString(),
      paragraphIndex,
      text: reflectionText,
      createdAt: Date.now()
    };

    setReflections(prev => [...prev, newReflection]);
    setReflectionText("");
    setActiveReflectionInput(null);
  };

  const deleteReflection = (id: string) => {
    setReflections(prev => prev.filter(r => r.id !== id));
  };

  const handleExport = () => {
    const exportData = {
      book: BOOK_TITLE,
      exportedAt: new Date().toISOString(),
      highlights,
      reflections
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lumina-export-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const toggleStructureItem = (index: number) => {
    setOpenStructureItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Content Parsing Logic
  type BlockType = 'h2' | 'h3' | 'hr' | 'list' | 'quote' | 'p' | 'title-hero';

  const getBlockType = (text: string): BlockType => {
    const t = text.trim();
    if (/^_{3,}$/.test(t)) return 'hr';

    // Main Title inside content or Major Section Headers
    if (t.match(/^(INTRODUÇÃO\s—|PARTE [IVX]+|CAPÍTULO \d+|EPÍLOGO|EXTRA|DEDICATÓRIA|ENCERRAMENTO|🙏|🏰|🪨|📘)/i)) return 'h2';

    // Subheadings: "1. Something" or "I · Something"
    // Heuristic: Starts with number/roman, less than 120 chars, usually no period at end (though sometimes yes)
    // We treat "1. O Silêncio..." as header. "1. Sente-se..." (instruction) might be tricky.
    // If it looks like an instruction step (short, active verb), it might be better as list or p.
    // For this book, Headers are usually clear.
    if ((t.match(/^(\d+\.|[IVX]+ ·)\s/) || t.match(/^[IVX]+\s·\s/)) && t.length < 100) return 'h3';

    // Lists
    if (t.match(/^[\*•-]\s/)) return 'list';

    // Quotes
    if ((t.startsWith('“') && t.endsWith('”')) || (t.startsWith('"') && t.endsWith('"'))) return 'quote';

    return 'p';
  };

  // Render text with highlights (Core function for all block types)
  const renderText = (text: string, index: number) => {
    const paraHighlights = highlights
      .filter(h => h.paragraphIndex === index)
      .sort((a, b) => a.startOffset - b.startOffset);

    if (paraHighlights.length === 0) return <span>{text}</span>;

    const segments: React.ReactNode[] = [];
    let lastIndex = 0;
    const t = text;

    paraHighlights.forEach(h => {
      // Ensure we don't go backwards or duplicate text.
      // If highlights overlap, the later one starts after the previous one ends (visually).
      const start = Math.max(h.startOffset, lastIndex);

      // If the highlight is completely engulfed by the previous one (start >= end), skip it.
      if (start >= h.endOffset) return;

      // Normal text before highlight
      if (start > lastIndex) {
        segments.push(<span key={`${index}-text-${lastIndex}`}>{t.slice(lastIndex, start)}</span>);
      }

      // Highlighted text
      const highlightClasses = theme === 'dark'
        ? HIGHLIGHT_COLORS[h.color].darkBg
        : theme === 'sepia' ? HIGHLIGHT_COLORS[h.color].sepiaBg : HIGHLIGHT_COLORS[h.color].bg;

      segments.push(
        <span
          key={h.id}
          className={`${highlightClasses} cursor-pointer hover:underline decoration-dotted relative group rounded-sm px-0.5 box-decoration-clone animate-in fade-in duration-500`}
          onClick={(e) => {
            e.stopPropagation();
            removeHighlight(h.id); // Direct removal for better UX
          }}
          title="Clique para remover destaque"
        >
          {t.slice(start, h.endOffset)}
        </span>
      );

      lastIndex = h.endOffset;
    });

    // Remaining text
    if (lastIndex < t.length) {
      segments.push(<span key={`${index}-text-${lastIndex}`}>{t.slice(lastIndex)}</span>);
    }

    return segments;
  };

  const themeClass = theme === 'sepia' ? 'bg-sepia-50 text-sepia-900' :
    theme === 'dark' ? 'bg-dark-bg text-dark-text' :
      'bg-white text-gray-800';

  const navClass = theme === 'sepia' ? 'bg-sepia-50/95 border-sepia-200' :
    theme === 'dark' ? 'bg-dark-bg/95 border-gray-800' :
      'bg-white/95 border-gray-100';

  return (
    <div className={`min-h-screen transition-colors duration-300 font-serif ${themeClass} ${isFocusMode ? '' : 'pt-16'}`}>

      {/* --- Progress Bar --- */}
      <div className="fixed top-0 left-0 h-1 bg-blue-600/80 z-50 transition-all duration-300" style={{ width: `${scrollProgress * 100}%` }} />

      {/* --- Top Navigation --- */}
      {!isFocusMode && (
        <nav className={`fixed top-0 w-full z-40 border-b transition-colors duration-300 backdrop-blur-sm ${navClass}`}>
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={20} className="opacity-70 group-hover:opacity-100" />
              <span className="font-display font-semibold text-lg tracking-tight opacity-90 group-hover:opacity-100">{BOOK_TITLE}</span>
            </div>

            <div className="flex items-center gap-1 md:gap-2">
              <Button onClick={() => setIsFocusMode(true)} title="Modo Foco">
                <EyeOff size={18} />
              </Button>
              <Button onClick={() => setIsSettingsOpen(!isSettingsOpen)} title="Configurações">
                <Type size={18} />
              </Button>
            </div>
          </div>

          {/* Settings Dropdown */}
          {isSettingsOpen && (
            <div className={`absolute top-16 right-4 p-5 rounded-2xl shadow-2xl border w-72 animate-in fade-in slide-in-from-top-2 z-50 ${theme === 'dark' ? 'bg-dark-surface border-gray-700' :
                theme === 'sepia' ? 'bg-sepia-100 border-sepia-200' : 'bg-white border-gray-100'
              }`}>
              <div className="space-y-6">
                <div>
                  <label className="text-xs uppercase tracking-widest opacity-50 font-sans font-bold mb-3 block">Tema</label>
                  <div className="flex gap-2">
                    <button onClick={() => setTheme('light')} className={`flex-1 h-10 rounded-lg border flex items-center justify-center transition-all ${theme === 'light' ? 'ring-2 ring-blue-500 border-transparent bg-gray-50' : 'border-gray-200 hover:bg-gray-50'}`}><Sun size={18} /></button>
                    <button onClick={() => setTheme('sepia')} className={`flex-1 h-10 rounded-lg border flex items-center justify-center transition-all bg-[#fbf0d9] text-[#5f4b32] ${theme === 'sepia' ? 'ring-2 ring-blue-500 border-transparent' : 'border-[#efe0bc]'}`}><Coffee size={18} /></button>
                    <button onClick={() => setTheme('dark')} className={`flex-1 h-10 rounded-lg border flex items-center justify-center transition-all bg-[#1a1a1a] text-gray-200 ${theme === 'dark' ? 'ring-2 ring-blue-500 border-transparent' : 'border-gray-700'}`}><Moon size={18} /></button>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest opacity-50 font-sans font-bold mb-3 block">Tamanho da Fonte</label>
                  <div className="flex items-center justify-between bg-current/5 rounded-lg p-1">
                    <button onClick={() => setFontSize('sm')} className={`w-8 h-8 flex items-center justify-center rounded transition-all ${fontSize === 'sm' ? 'bg-white/90 shadow-sm text-black' : 'opacity-60'}`}><span className="text-xs">A</span></button>
                    <button onClick={() => setFontSize('base')} className={`w-8 h-8 flex items-center justify-center rounded transition-all ${fontSize === 'base' ? 'bg-white/90 shadow-sm text-black' : 'opacity-60'}`}><span className="text-sm">A</span></button>
                    <button onClick={() => setFontSize('lg')} className={`w-8 h-8 flex items-center justify-center rounded transition-all ${fontSize === 'lg' ? 'bg-white/90 shadow-sm text-black' : 'opacity-60'}`}><span className="text-base">A</span></button>
                    <button onClick={() => setFontSize('xl')} className={`w-8 h-8 flex items-center justify-center rounded transition-all ${fontSize === 'xl' ? 'bg-white/90 shadow-sm text-black' : 'opacity-60'}`}><span className="text-lg">A</span></button>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest opacity-50 font-sans font-bold mb-3 block">Largura do Texto</label>
                  <div className="flex gap-2">
                    <button onClick={() => setMaxWidth('sm')} className={`flex-1 text-xs py-2 rounded-lg border transition-all ${maxWidth === 'sm' ? 'bg-blue-50 border-blue-500 text-blue-700 font-medium' : 'border-current/20 opacity-60'}`}>Estreito</button>
                    <button onClick={() => setMaxWidth('md')} className={`flex-1 text-xs py-2 rounded-lg border transition-all ${maxWidth === 'md' ? 'bg-blue-50 border-blue-500 text-blue-700 font-medium' : 'border-current/20 opacity-60'}`}>Normal</button>
                    <button onClick={() => setMaxWidth('lg')} className={`flex-1 text-xs py-2 rounded-lg border transition-all ${maxWidth === 'lg' ? 'bg-blue-50 border-blue-500 text-blue-700 font-medium' : 'border-current/20 opacity-60'}`}>Largo</button>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest opacity-50 font-sans font-bold mb-3 block">Alinhamento</label>
                  <div className="flex gap-2">
                    <button onClick={() => setTextAlign('left')} className={`flex-1 p-2 rounded-lg border flex justify-center ${textAlign === 'left' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'border-current/20 opacity-60'}`}><AlignLeft size={18} /></button>
                    <button onClick={() => setTextAlign('justify')} className={`flex-1 p-2 rounded-lg border flex justify-center ${textAlign === 'justify' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'border-current/20 opacity-60'}`}><AlignJustify size={18} /></button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      )}

      {/* --- Sidebar (My Journey) --- */}
      <div className={`fixed inset-y-0 left-0 w-80 z-50 transform transition-transform duration-300 shadow-2xl overflow-y-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${theme === 'dark' ? 'bg-dark-surface border-r border-gray-800' :
          theme === 'sepia' ? 'bg-sepia-100 border-r border-sepia-200' : 'bg-gray-50 border-r border-gray-200'
        }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-semibold">Minha Jornada</h2>
            <Button onClick={() => setIsSidebarOpen(false)}><X size={20} /></Button>
          </div>

          <div className="space-y-10">
            {/* Highlights List */}
            <div>
              <h3 className="text-xs font-sans font-bold uppercase tracking-widest opacity-40 mb-4 flex items-center gap-2">
                <BookOpen size={14} /> Destaques
              </h3>
              {highlights.length === 0 ? (
                <p className="text-sm opacity-50 italic pl-1">Você ainda não destacou nada.</p>
              ) : (
                <div className="space-y-4">
                  {highlights.map(h => (
                    <div
                      key={h.id}
                      onClick={() => {
                        setIsSidebarOpen(false);
                        document.getElementById(`para-${h.paragraphIndex}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                      className={`p-4 rounded-lg cursor-pointer transition-all hover:scale-[1.02] active:scale-95 text-sm leading-relaxed border-l-[3px] shadow-sm ${theme === 'dark' ? 'bg-gray-800/50 hover:bg-gray-800' :
                          theme === 'sepia' ? 'bg-white/40 hover:bg-white/60' : 'bg-white hover:shadow-md'
                        }`}
                      style={{ borderLeftColor: h.color === 'yellow' ? '#facc15' : h.color === 'blue' ? '#60a5fa' : h.color === 'green' ? '#4ade80' : '#c084fc' }}
                    >
                      <p className="font-serif opacity-90 line-clamp-3">"{h.text}"</p>
                      <p className="text-[10px] uppercase tracking-wider opacity-40 mt-2 font-sans">{new Date(h.createdAt).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Reflections List */}
            <div>
              <h3 className="text-xs font-sans font-bold uppercase tracking-widest opacity-40 mb-4 flex items-center gap-2">
                <MessageSquarePlus size={14} /> Reflexões
              </h3>
              {reflections.length === 0 ? (
                <p className="text-sm opacity-50 italic pl-1">Nenhuma reflexão salva.</p>
              ) : (
                <div className="space-y-4">
                  {reflections.map(r => (
                    <div
                      key={r.id}
                      onClick={() => {
                        setIsSidebarOpen(false);
                        document.getElementById(`para-${r.paragraphIndex}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                      className={`p-4 rounded-lg cursor-pointer transition-all hover:scale-[1.02] text-sm relative group border ${theme === 'dark' ? 'bg-gray-800/30 border-gray-700' :
                          theme === 'sepia' ? 'bg-white/30 border-sepia-200' : 'bg-white border-gray-100 shadow-sm'
                        }`}
                    >
                      <span className="font-bold font-sans uppercase tracking-wider text-[10px] opacity-40 block mb-2">Trecho {r.paragraphIndex + 1}</span>
                      <p className="font-serif italic opacity-90">{r.text}</p>
                      <button
                        onClick={(e) => { e.stopPropagation(); deleteReflection(r.id); }}
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1.5 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for sidebar */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-[2px] transition-opacity" onClick={() => setIsSidebarOpen(false)} />}

      {/* --- Main Reader Content --- */}
      <main
        className={`mx-auto px-6 pb-32 transition-all duration-300 ${MAX_WIDTHS[maxWidth]} ${FONT_SIZES[fontSize]}`}
        ref={contentRef}
      >
        <header className="pt-24 pb-16 text-center mb-4 select-none">
          <div className="flex justify-center mb-8">
            <img
              src="./book-cover.png"
              alt="Capa do Livro"
              className="w-48 md:w-56 shadow-2xl rounded-lg transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <p className="font-sans uppercase tracking-[0.2em] text-xs font-bold opacity-50 mb-6">eBook Interativo</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-[1.1] tracking-tight text-balance">{BOOK_TITLE}</h1>
          <div className="flex items-center justify-center gap-2 opacity-60 font-serif italic">
            <span>por</span>
            <span className="font-semibold not-italic">{BOOK_AUTHOR}</span>
          </div>
        </header>

        {/* --- Collapsible Structure / Table of Contents --- */}
        <div className="max-w-xl mx-auto mb-16 space-y-3">
          {BOOK_STRUCTURE.map((section, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${theme === 'dark' ? 'border-gray-800 bg-gray-900/50' :
                  theme === 'sepia' ? 'border-sepia-200 bg-sepia-100/50' : 'border-gray-100 bg-gray-50/50'
                }`}
            >
              <button
                onClick={() => toggleStructureItem(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left group"
              >
                <span className="font-sans text-sm font-semibold tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                  {section.title}
                </span>
                {openStructureItems[index] ? <ChevronUp size={16} className="opacity-50" /> : <ChevronDown size={16} className="opacity-50" />}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openStructureItems[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className={`px-5 pb-5 pt-0 text-sm opacity-70 space-y-2 leading-relaxed ${section.items.length === 0 ? 'italic opacity-50' : ''
                  }`}>
                  {section.items.length > 0 ? (
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="opacity-30 select-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span>(Conteúdo breve)</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {paragraphs.map((para, index) => {
          const paraReflections = reflections.filter(r => r.paragraphIndex === index);
          const blockType = getBlockType(para);

          return (
            <div key={index} id={`para-${index}`} className="group relative" data-paragraph-index={index}>

              {/* Content Rendered based on Block Type */}
              {blockType === 'h2' && (
                <div className="mt-24 mb-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-current leading-tight text-balance">
                    {renderText(para, index)}
                  </h2>
                  <div className="w-12 h-1 bg-current opacity-10 mx-auto mt-6 rounded-full"></div>
                </div>
              )}

              {blockType === 'h3' && (
                <h3 className="text-xl md:text-2xl font-display font-semibold mt-12 mb-6 opacity-95 leading-snug text-balance">
                  {renderText(para, index)}
                </h3>
              )}

              {blockType === 'hr' && (
                <div className="py-12 flex justify-center opacity-20 items-center gap-4">
                  <div className="h-px w-8 bg-current"></div>
                  <div className="font-display text-xl italic">~</div>
                  <div className="h-px w-8 bg-current"></div>
                </div>
              )}

              {blockType === 'list' && (
                <div className={`mb-4 pl-4 leading-relaxed opacity-90 ${textAlign === 'justify' ? 'text-justify' : 'text-left'}`}>
                  <ul className="book-list text-current">
                    <li>{renderText(para.replace(/^[\*•-]\s/, ''), index)}</li>
                  </ul>
                </div>
              )}

              {blockType === 'quote' && (
                <blockquote className="my-10 pl-8 pr-4 py-2 border-l-4 border-current border-opacity-20 italic text-xl md:text-2xl opacity-80 leading-relaxed font-display text-balance">
                  {renderText(para, index)}
                </blockquote>
              )}

              {blockType === 'p' && (
                <p className={`leading-loose opacity-90 mb-6 ${textAlign === 'justify' ? 'text-justify' : 'text-left'} text-pretty`}>
                  {renderText(para, index)}
                </p>
              )}

              {/* Paragraph Action: Add Reflection (Only for text-heavy blocks) */}
              {['p', 'quote', 'list'].includes(blockType) && (
                <>
                  <div className="absolute -right-16 top-0 h-full opacity-0 group-hover:opacity-100 transition-opacity hidden xl:flex items-start pt-1.5">
                    <button
                      onClick={() => setActiveReflectionInput(activeReflectionInput === index ? null : index)}
                      className="p-2.5 text-current opacity-20 hover:opacity-100 hover:bg-current/5 rounded-full transition-all"
                      title="Adicionar Reflexão"
                    >
                      <MessageSquarePlus size={18} />
                    </button>
                  </div>

                  <div className="xl:hidden mt-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity mb-4">
                    <button
                      onClick={() => setActiveReflectionInput(activeReflectionInput === index ? null : index)}
                      className="text-[10px] uppercase font-bold tracking-wider opacity-40 flex items-center gap-1 py-1 px-2 rounded hover:bg-current/5"
                    >
                      <MessageSquarePlus size={12} /> Nota
                    </button>
                  </div>
                </>
              )}

              {/* Reflection Input Area */}
              {activeReflectionInput === index && (
                <div className={`my-6 p-5 rounded-xl animate-in fade-in slide-in-from-top-2 border shadow-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700' :
                    theme === 'sepia' ? 'bg-[#fffbf0] border-sepia-200' : 'bg-white border-gray-100'
                  }`}>
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2 block">Sua Reflexão</label>
                  <textarea
                    className="w-full bg-transparent border-none resize-none focus:ring-0 text-base font-serif p-0 placeholder-current placeholder-opacity-30 leading-relaxed"
                    placeholder="O que este trecho te fez pensar?"
                    rows={3}
                    autoFocus
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                  />
                  <div className="flex justify-end gap-3 mt-4 pt-3 border-t border-current/5">
                    <button onClick={() => setActiveReflectionInput(null)} className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider opacity-50 hover:opacity-100 transition-opacity">Cancelar</button>
                    <button onClick={() => saveReflection(index)} className="px-5 py-1.5 text-xs font-bold uppercase tracking-wider bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm">Salvar</button>
                  </div>
                </div>
              )}

              {/* Display Reflections for this paragraph */}
              {paraReflections.length > 0 && (
                <div className="my-6 space-y-3 pl-6 border-l-2 border-purple-400/30">
                  {paraReflections.map(r => (
                    <div key={r.id} className="text-base font-serif italic opacity-75 flex justify-between group/note items-start animate-in fade-in slide-in-from-left-2 duration-500">
                      <span className="leading-relaxed">"{r.text}"</span>
                      <button onClick={() => deleteReflection(r.id)} className="opacity-0 group-hover/note:opacity-40 hover:text-red-500 ml-2 mt-1 transition-opacity"><X size={14} /></button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div className="mt-32 pt-16 border-t border-current border-opacity-10 text-center opacity-40 font-sans text-xs uppercase tracking-widest">
          <p className="mb-8">Fim do Livro</p>
          <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mx-auto block">Voltar ao Topo</Button>
        </div>
      </main>

      {/* --- Floating Highlight Menu --- */}
      {selection && !isFocusMode && (
        <div
          className="fixed z-50 flex items-center gap-1.5 p-1.5 rounded-full shadow-2xl animate-in zoom-in-95 duration-200 border border-black/5"
          style={{
            top: `${(selection.rect?.top || 0) + window.scrollY - 70}px`,
            left: `${(selection.rect?.left || 0) + (selection.rect?.width || 0) / 2}px`,
            transform: 'translateX(-50%)',
            backgroundColor: theme === 'dark' ? '#262626' : theme === 'sepia' ? '#fbf0d9' : 'white',
          }}
        >
          {(Object.keys(HIGHLIGHT_COLORS) as HighlightColor[]).map((color) => (
            <button
              key={color}
              onClick={() => addHighlight(color)}
              className={`w-8 h-8 rounded-full transition-transform hover:scale-110 active:scale-95 ${HIGHLIGHT_COLORS[color].bg} border border-black/5 shadow-sm`}
              title={HIGHLIGHT_COLORS[color].label}
            />
          ))}
          <div className="w-px h-5 bg-current opacity-10 mx-1"></div>
          <button onClick={clearSelection} className="p-2 rounded-full hover:bg-black/5 transition-colors opacity-40 hover:opacity-100">
            <X size={14} />
          </button>
        </div>
      )}

      {/* --- Exit Focus Mode Button --- */}
      {isFocusMode && (
        <button
          onClick={() => setIsFocusMode(false)}
          className="fixed bottom-8 right-8 p-4 bg-white/10 backdrop-blur text-current border border-current/10 rounded-full shadow-2xl hover:bg-white/20 transition-all hover:scale-105 z-50 group"
          title="Sair do Modo Foco"
        >
          <Eye size={24} className="opacity-50 group-hover:opacity-100" />
        </button>
      )}

    </div>
  );
}