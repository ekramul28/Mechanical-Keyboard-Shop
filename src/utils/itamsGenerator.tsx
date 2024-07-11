import { NavLink } from "react-router-dom";
import { TSideRoute, TUserPath } from "../types";

export const itemGenerator = (items: TUserPath[]) => {
  const adminSidebarItem = items.reduce((acc: TSideRoute[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children && item.name) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);

  return adminSidebarItem;
};
