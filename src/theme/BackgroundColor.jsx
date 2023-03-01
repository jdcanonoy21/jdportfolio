import { useThemeContext } from "./../context/theme-context";

const BackgroundColor = ({ className }) => {
  const { handleTheme } = useThemeContext();
  return (
    <button
      className={className}
      onClick={() => handleTheme(className)}
    ></button>
  );
};

export default BackgroundColor;
