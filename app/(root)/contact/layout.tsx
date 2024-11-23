import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata(
  "Contact - Lyes Mersel - Software Developer Portfolio"
);

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
