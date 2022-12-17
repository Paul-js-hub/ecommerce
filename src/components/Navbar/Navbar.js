import React from "react";
import { Layout, Menu } from "antd";
import { Icon } from "@iconify/react";
import shoppingCartOutlined from "@iconify/icons-ant-design/shopping-cart-outlined";
import "./navbar.css";
const { Header } = Layout;

const NavHeader = () => {
    const count = 0;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo">
            <h2>SHOP</h2>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
            <Menu.Item key="1">Products
            </Menu.Item>
            <Menu.Item key="2" className="cart">
              <Icon icon={shoppingCartOutlined} />
                Cart{" "}
                <span>
                  {count} {""}
                </span>{" "}
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
}

export default NavHeader;