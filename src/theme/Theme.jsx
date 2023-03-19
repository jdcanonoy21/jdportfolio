import { primaryColors } from "./data";
import PrimaryColor from "./PrimaryColor";
import "./Theme.scss";

const Theme = () => {
  return (
    <div className="theme">
      <div className="theme__primary-colors">
        {primaryColors.map((pColor) => (
          <PrimaryColor key={pColor.className} className={pColor.className} />
        ))}
      </div>
    </div>
  );
};

export default Theme;
