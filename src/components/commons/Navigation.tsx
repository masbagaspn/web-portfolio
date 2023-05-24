import clsx from "clsx";
import { useContext } from "react";
import { AppContext } from "../../App";

const Navigation = () => {
  const context = useContext(AppContext);
  const navigation = ["about", "experiences", "projects"];

  const handleClick = (value: string) => {
    const element = document.getElementById(value);
    const position = element?.getBoundingClientRect().top;
    const offset = Number(position) + window.scrollY - 96;
    const context = useContext(AppContext);
    const navigation = ["about", "experiences", "projects"];

    const handleClick = (value: string) => {
      const element = document.getElementById(value);
      const position = element?.getBoundingClientRect().top;
      const offset = Number(position) + window.scrollY - 96;

      window.scrollTo({ top: offset });
    };
    window.scrollTo({ top: offset });
  };

  return (
    <nav>
      <ul className="flex gap-10">
        {navigation.map((nav, idx) => (
          <li
            key={idx}
            onClick={() => handleClick(nav)}
            className={clsx(
              "uppercase tracking-wider text-xs hidden font-medium lg:block cursor-pointer",
              { "text-lime-400 opacity-1": context?.sectionInView === nav },
              { "text-lime-700 opacity-75": context?.sectionInView !== nav }
            )}
          >
            {nav}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
