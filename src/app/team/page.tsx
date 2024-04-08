import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Team Description",
  openGraph: {
    type: "profile",
    firstName: "Mirza",
    lastName: "Mohibul",
  },
};
const Team = () => {
  return <h1>Team</h1>;
};

export default Team;
