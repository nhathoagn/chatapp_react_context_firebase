import {Button, Typography} from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import styled from 'styled-components'

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username {
    color: white;
    margin: 5px;
  }
`;

function UserInfo() {
    return (
        <WrapperStyled>

                <div>
                    <Avatar>A</Avatar>
                    <Typography.Text className="username">
                        ABC
                    </Typography.Text>
                </div>
                <Button ghost>Đăng Xuất</Button>

        </WrapperStyled>
    )
}

export default UserInfo