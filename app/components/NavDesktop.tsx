import { routes } from "./Routes";

export const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
      {routes.map((route) => {
        const { name, link } = route;
        return (
          <li>
            <a
              href={link}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all"
            >
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};