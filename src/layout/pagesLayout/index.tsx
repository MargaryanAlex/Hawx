import React, { FC, ReactElement } from "react";
import Footer from "src/components/footer";
import Header from "src/components/header";

const PagesLayout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div>
<<<<<<< HEAD
=======
      <Header />
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac
      {children}
      <Footer />
    </div>
  );
};

export default PagesLayout;
