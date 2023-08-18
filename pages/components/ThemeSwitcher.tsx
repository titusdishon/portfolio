import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

 const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Switch
      defaultSelected
      size="lg"
      onClick={() =>
        theme === "dark" ? setTheme("light") : setTheme("dark")
      }
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    >
    </Switch>
  );
};

export default ThemeSwitcher