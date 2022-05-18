import React from "react";
import { Button, Row, Col, Typography } from "antd";
import firebase, { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();
function Login() {
  const navigate = useNavigate();
  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider);
  };

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Chat APP
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng Google
          </Button>
          <Button style={{ width: "100%" }} onClick={() => handleFbLogin()}>
            Đăng nhập bằng facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
export default Login;
