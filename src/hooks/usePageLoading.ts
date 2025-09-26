'use client';

import { useState } from 'react';

export function usePageLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return {
    isLoading,
    showContent,
    handleLoadingComplete
  };
}