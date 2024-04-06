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
