import { Button, Layout, Menu, Switch } from "antd";
import { itemGenerator } from "../../../utils/itamsGenerator";
import { homeRoute } from "../../../routes/home.routes";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

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
        }}
      >
        <div className="logo">MyLogo</div>
        <Menu
          mode="horizontal"
          items={itemGenerator(homeRoute)}
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
