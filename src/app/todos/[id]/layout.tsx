import { Children, ReactNode } from "react";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h4>Working Part top if todo not found</h4>
      {children}
      <h4>Working Part bottom if todo not found</h4>
    </div>
  );
};

export default layout;
