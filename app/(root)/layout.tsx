import PageTransitioin from '@/components/transition/PageTransitioin';
import StairTransition from '@/components/transition/StairTransition';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <StairTransition />
      <PageTransitioin>{children}</PageTransitioin>
    </main>
  );
}
