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
    // <Layout className="layout">
    //   <Header>
    //     <div className="logo">
    //       <h2>SHOP</h2>
    //     </div>
        // <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
        //   <Menu.Item key="1">
        //     <Link to="/">Products</Link>
        //   </Menu.Item>
        //   <Menu.Item key="2" className="cart">
        //     <Link to="/cart">
        //       <Icon icon={shoppingCartOutlined} />
        //       Cart{" "}
        //       <span>
        //         {totalCount} {""}
        //       </span>{" "}
        //     </Link>
        //   </Menu.Item>
        // </Menu>
    //   </Header>
    // </Layout>
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
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
      </Header></Layout>
    
  );
};

export default NavHeader;
