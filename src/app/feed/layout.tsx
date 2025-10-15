import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="p-5 bg-rose-500 w-full">Layout</div>
      {children}
    </div>
  );
};
export default Layout;
