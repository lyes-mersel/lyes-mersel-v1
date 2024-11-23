import PageTransitioin from "@/components/PageTransitioin";
import StairTransition from "@/components/StairTransition";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <StairTransition />
      <PageTransitioin>{children}</PageTransitioin>
    </main>
  );
}
