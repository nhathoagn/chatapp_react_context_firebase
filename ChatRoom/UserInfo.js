import { Button, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
const WrapperStyled = styled.div`
     display: flex;
     justify-content: space-between;
     padding: 12px 16px;
     border-bottom: 1px solid rgba(82,38,83);

     .username{
         color: white;
         margin: 5
     }
`;
function UserInfo(){
    return (
        <WrapperStyled>
            <div>
        <div>
            <Avatar>A</Avatar>
            <Typography.Text>
                ABC
            </Typography.Text>
        </div>
        <Button>Đăng Xuất</Button>
    </div>
        </WrapperStyled>
    )
}
export default UserInfo