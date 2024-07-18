import { Badge, Button, Layout, Menu, MenuProps } from "antd";
import { Link, NavLink } from "react-router-dom";
import { ReactNode } from "react";
import { useGetAllProductPriceQuery } from "../../../redux/features/cart/cartApi";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { logout } from "../../../redux/features/Auth/authSlice";
import { RootState } from "../../../redux/store";

const { Header } = Layout;
const NavBar = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const { data } = useGetAllProductPriceQuery(user?.email);
  const cart = data?.data?.totalCart;
  const dispatch = useAppDispatch();
  const handelLogout = () => {
    dispatch(logout());
  };
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
        <NavLink to="/cart">
          <div className="flex">
            <Badge count={cart} style={{ marginRight: "20px" }}>
              <svg
                height="24"
                width={24}
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                ></path>
              </svg>
            </Badge>
          </div>
        </NavLink>

        {user ? (
          <Button
            onClick={handelLogout}
            className="ml-3 py-5 font-bold bg-black text-white"
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button className="ml-3 py-5 font-bold bg-black text-white">
              Login
            </Button>
          </Link>
        )}
      </Header>
    </Layout>
  );
};

export default NavBar;
