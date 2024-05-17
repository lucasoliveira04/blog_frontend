import { FooterComponent } from "../../components/Footer/FooterC";
import { MainProjectCard } from "../../components/Main/Projects";
import { HeaderC } from "../../components/header/HeaderC";

export const HomePageUser = () => {
  return (
    <div className="cont">
        <HeaderC />
      <div className="containerColumns">
        <div className="c1">

        </div>
        <div className="c2">
          <MainProjectCard />
        </div>
        <div className="c3">
            
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
};
