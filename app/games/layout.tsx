import { Metadata } from "next";
export const metadata: Metadata = {
  title: "游戏中心"
};

export default function GamesLayout({
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
