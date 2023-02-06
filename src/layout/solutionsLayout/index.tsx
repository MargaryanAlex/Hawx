<<<<<<< HEAD
import React, {FC, ReactElement} from "react";
import Footer from "src/components/footer";
import NewsSection from "src/components/newsSection";

const SolutionsLayout: FC<{ children: ReactElement }> = ({children,}) => {

    return (
        <div>
            {children}
            {/* <ClintsSection /> */}
            <NewsSection/>
            <Footer/>
        </div>
    );

    ;
}
=======
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
      {/* <ClintsSection /> */}
      <NewsSection />
      <Footer />
    </div>
  );
};
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac

export default SolutionsLayout;
