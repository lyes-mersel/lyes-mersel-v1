import { createMetadata } from '@/lib/utils';

export const metadata = createMetadata('Projects - Lyes Mersel - Software Engineer Portfolio');

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
