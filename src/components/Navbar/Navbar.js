import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import shoppingCartOutlined from "@iconify/icons-ant-design/shopping-cart-outlined";
import { useSelector } from "react-redux";
import "./navbar.css";
const { Header } = Layout;

const NavHeader = () => {
  const totalCount = useSelector((state) => state.cart.totalCount);
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <h2>SHOP</h2>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
          <Menu.Item key="1">
            <Link to="/">Products</Link>
          </Menu.Item>
          <Menu.Item key="2" className="cart">
            <Link to="/cart">
              <Icon icon={shoppingCartOutlined} />
              Cart{" "}
              <span>
                {totalCount} {""}
              </span>{" "}
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default NavHeader;
