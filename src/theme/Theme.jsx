import { primaryColors, backgroundColors } from "./data";
import PrimaryColor from "./PrimaryColor";
import BackgroundColor from "./BackgroundColor";
import "./theme.css";

const Theme = () => {
  return (
    <>
      <h3>Customize Your Theme</h3>
      <small>
        Change the primary and background color to your preferences.
      </small>
      <div className="theme__primary-wrapper">
        <h5>Primary Colors</h5>
        <div className="theme__primary-colors">
          {primaryColors.map((pColor) => (
            <PrimaryColor key={pColor.className} className={pColor.className} />
          ))}
        </div>
      </div>
      <div className="theme__background-wrapper">
        <h5>Background Colors</h5>
        <div className="theme__background-colors">
          {backgroundColors.map((bColor) => (
            <BackgroundColor
              key={bColor.className}
              className={bColor.className}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Theme;
