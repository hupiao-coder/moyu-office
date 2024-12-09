import { Metadata } from "next";
export const metadata: Metadata = {
  title: "每日一句"
};

export default function DailyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}
