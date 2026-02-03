import { useState, useEffect, useCallback } from 'react';

interface SelectionState {
  paragraphIndex: number | null;
  startOffset: number;
  endOffset: number;
  text: string;
  rect: DOMRect | null;
}

export const useSelection = () => {
  const [selection, setSelection] = useState<SelectionState | null>(null);

  const handleSelection = useCallback(() => {
    const winSelection = window.getSelection();
    
    if (!winSelection || winSelection.rangeCount === 0 || winSelection.isCollapsed) {
      setSelection(null);
      return;
    }

    const range = winSelection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    
    // Find the paragraph element
    let paragraphNode = container.nodeType === 3 ? container.parentElement : container as HTMLElement;
    while (paragraphNode && !paragraphNode.getAttribute('data-paragraph-index')) {
      if (paragraphNode.parentElement) {
        paragraphNode = paragraphNode.parentElement;
      } else {
        break;
      }
    }

    if (!paragraphNode || !paragraphNode.getAttribute('data-paragraph-index')) {
      setSelection(null);
      return;
    }

    const index = parseInt(paragraphNode.getAttribute('data-paragraph-index') || '0', 10);
    
    // We need to calculate offset relative to the full text content of the paragraph
    // This is tricky because the paragraph might contain existing span tags for highlights
    // So we can't just use range.startOffset if it's inside a span.
    
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(paragraphNode);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    const start = preSelectionRange.toString().length;
    const text = range.toString();
    const end = start + text.length;

    const rect = range.getBoundingClientRect();

    setSelection({
      paragraphIndex: index,
      startOffset: start,
      endOffset: end,
      text: text,
      rect: rect
    });

  }, []);

  useEffect(() => {
    document.addEventListener('selectionchange', handleSelection);
    return () => {
      document.removeEventListener('selectionchange', handleSelection);
    };
  }, [handleSelection]);

  const clearSelection = () => {
    window.getSelection()?.removeAllRanges();
    setSelection(null);
  };

  return { selection, clearSelection };
};