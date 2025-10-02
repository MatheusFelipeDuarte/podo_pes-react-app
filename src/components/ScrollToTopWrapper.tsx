import { ReactNode } from 'react';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';

interface ScrollToTopWrapperProps {
  children: ReactNode;
}

export const ScrollToTopWrapper = ({ children }: ScrollToTopWrapperProps) => {
  useScrollToTop();
  return <>{children}</>;
};