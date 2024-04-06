export default function TeamAboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <h4>Nav of Team About</h4>
      {children}
      <h4>Foot of Team About</h4>
    </>
  );
}
