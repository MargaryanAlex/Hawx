import React, { FC, ReactElement } from "react";
import ClintsSection from "src/components/clientsSection";
import Footer from "src/components/footer";
import Header from "src/components/header";
import NewsSection from "src/components/newsSection";

const SolutionsLayout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <ClintsSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default SolutionsLayout;
