import {Button, Collapse, Typography} from "antd";
import React from "react";
import styled from 'styled-components'
import {PlusSquareOutlined} from "@ant-design/icons";
const {Panel} = Collapse;
const PannelStyle = styled(Panel)`
  
&&& {
    .ant-collapse-header,
    p{
        color: white;
    }
    .ant-collapse-content-box{
        padding: 0 40px;
    }
  .add-room{
    color: white;
    padding: 0;
  }
}
`;
const LinkStyled  = styled(Typography.Link)`
display: block;
  margin-bottom: 5px;
  color: white;
`
function RoomList(){
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PannelStyle header="Danh sách các phòng" key='1'>
                <LinkStyled>Room 1</LinkStyled>
                <LinkStyled>Room 1</LinkStyled>
                <LinkStyled>Room 1</LinkStyled>
                <LinkStyled>Room 1</LinkStyled>
                <Button type='text' icon={<PlusSquareOutlined/>} className="add-room">
                    Thêm Phòng
                </Button>
            </PannelStyle>
        </Collapse>
    )
}
export default RoomList