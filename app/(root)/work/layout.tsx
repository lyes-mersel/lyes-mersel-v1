import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata(
  "Work - Lyes Mersel - Software Developer Portfolio"
);

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
