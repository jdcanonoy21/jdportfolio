import { primaryColors, backgroundColors } from "./data";
import PrimaryColor from "./PrimaryColor";
import BackgroundColor from "./BackgroundColor";
import "./Theme.scss";

const Theme = () => {
  return (
    <div className="theme">
      <div className="theme__primary-colors">
        {primaryColors.map((pColor) => (
          <PrimaryColor key={pColor.className} className={pColor.className} />
        ))}
      </div>
      <div className="theme__background-colors">
        <BackgroundColor backgroundColors={backgroundColors} />
      </div>
    </div>
  );
};

export default Theme;
