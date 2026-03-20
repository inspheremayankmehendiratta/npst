// app/(website)/layout.tsx
import WebsiteHeader from "@/modules/website/layout/Header";
import WebsiteFooter from "@/modules/website/layout/Footer";

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebsiteHeader />
      <main>{children}</main>
      <WebsiteFooter />
    </>
  );
}