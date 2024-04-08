import { Metadata } from "next";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <h4>Nav of Team</h4>
      {children}
      <h4>Foot of Team</h4>
    </>
  );
}
