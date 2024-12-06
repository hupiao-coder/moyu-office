import { Metadata } from "next";
export const metadata: Metadata = {
  title: "关于"
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="max-w-full">
        {children}
      </div>
    </section>
  );
}
