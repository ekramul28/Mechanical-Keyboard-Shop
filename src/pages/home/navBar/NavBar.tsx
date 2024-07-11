import { Button, Layout, Menu, MenuProps } from "antd";
import { itemGenerator } from "../../../utils/itamsGenerator";
import { homeRoute } from "../../../routes/home.routes";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

const { Header } = Layout;
const NavBar = () => {
  // const [theme, setTheme] = useState<"dark" | "light">("light");

  // useEffect(() => {
  //   if (theme == "dark") {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, [theme]);
  // const toggleTheme = (checked: boolean) => {
  //   setTheme(checked ? "dark" : "light");
  // };
  type TItem = {
    name: string;
    label: ReactNode;
  };

  const items: TItem[] = [
    {
      name: "Home",
      label: <NavLink to="/home">Home</NavLink>,
    },
    {
      name: "Product",
      label: <NavLink to="/product">Product</NavLink>,
    },
    {
      name: "Cart",
      label: <NavLink to="/cart">Cart</NavLink>,
    },
    {
      name: "About",
      label: <NavLink to="/about">About</NavLink>,
    },
    {
      name: "Contact",
      label: <NavLink to="/contact">Contact</NavLink>,
    },
  ];
  const menuItems: MenuProps["items"] = items.map((item) => ({
    key: item.name,
    label: item.label,
  }));
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          zIndex: 1,
          width: "100%",
          backgroundColor: "#F0F0F0",
          position: "fixed",
          borderBottom: "3px",
          borderStyle: "groove",
          borderColor: "black",
        }}
      >
        <div className="logo">MyLogo</div>
        <Menu
          mode="horizontal"
          items={menuItems}
          defaultSelectedKeys={["1"]}
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#F0F0F0",
            color: "#000000",
            fontWeight: "700",
            fontSize: "16px",
          }}
        />

        <Button type="primary" style={{ marginLeft: "auto" }}>
          Login
        </Button>

        {/* <Switch
          checked={theme === "dark"}
          onChange={toggleTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
          style={{ marginRight: "20px" }}
        /> */}
      </Header>
    </Layout>
  );
};

export default NavBar;
