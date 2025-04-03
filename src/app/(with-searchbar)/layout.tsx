import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      Searchbar Layout
      {children}
    </div>
  );
}
