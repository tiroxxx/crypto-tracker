import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import icon from "../images/cryptocurrency.png"
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
          {/* <Button className="menu-control-container"></Button> */}
        </Typography.Title>
      </div>
    </div>
  );
}