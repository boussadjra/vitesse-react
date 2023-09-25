import Footer from '@/components/layout/Footer';

export default function HomeLayout(props: { children: React.ReactNode }) {
  return (
    <div className="">
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
