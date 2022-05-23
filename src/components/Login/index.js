import React from "react";
import { Button, Row, Col, Typography } from "antd";
import firebase, {auth, db} from "../firebase/config";
import { useNavigate } from "react-router-dom";
import {addDocument} from "../firebase/services";
const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();
function Login() {
  const navigate = useNavigate();
  const handleFbLogin = async () => {
  const {additionalUserInfo,user} = await auth.signInWithPopup(fbProvider);
    if (additionalUserInfo?.isNewUser){
      addDocument('users',{
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.displayName,
        providerId: additionalUserInfo.providerId
      })
    }
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
