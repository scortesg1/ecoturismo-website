import { Suspense } from "react";
export default function SRLayout({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>;
}
