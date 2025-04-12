import React from "react";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <main className="h-full">{children}</main>
    </div>
  );
};

export default layout;
