import { Layout, Menu } from "antd";
import { createElement } from "react";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const items = [
    "UserOutlined",
    "VideoCameraOutlined",
    "UploadOutlined",
    "UserOutlined",
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: icon,
    label: icon,
  }));
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout>
          {/* <Header style={{ padding: 0 }} /> */}
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
