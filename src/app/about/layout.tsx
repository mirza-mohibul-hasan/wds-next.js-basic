import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: string;
}): Promise<Metadata> {
  console.log(params);
  return { title: "About" };
}
export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <h4>Nav of About</h4>
      {children}
      <h4>Foot of About</h4>
    </>
  );
}
