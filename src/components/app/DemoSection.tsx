type Props = {
  title: string;
  children: React.ReactNode;
};

export default function DemoSection({ title, children }: Props) {
  return (
    <section className="flex flex-wrap  gap-2">
      <h2 className="text-xl font-bold mt-4 ">{title}</h2>
      <div className="w-full px-2">{children}</div>
    </section>
  );
}
