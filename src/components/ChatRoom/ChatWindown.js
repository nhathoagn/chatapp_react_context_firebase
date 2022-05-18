import React from "react";
import {Avatar, Button, Form, Input, Tooltip} from "antd";
import {UserAddOutlined} from "@ant-design/icons";
import styled from "styled-components"
import Message from "./Message";
const WrapperStyled = styled.div`
  height: 100vh;
`;
const ContentStyled  =styled.div`
 height: calc(100% - 56px);
 display: flex;
  flex-direction:column;
  padding: 11px;
  justify-content: flex-end;
`;
const FormStyled = styled(Form)`
 display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0px;
  border: 1px solid rgb(230,230,230);
  border-radius: 2px;
  .ant-form-item{
    flex: 1;
    margin-bottom: 0;
  }
`;
function ChatWindown(){
    const HeaderStyled = styled.div`
     display: flex;
      justify-content: space-between;
      height: 56px;
      padding: 0 16px;
      align-items: center;
      border-bottom: 1px solid rgb(230,230,230);
      .header{
        &__info{
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        &__title{
          margin: 0;
          font-weight: bold;
        }
        &__description{
          font-size: 12px;
        }
      }
    `;
    const ButtonGroupStyled = styled.div`
    display: flex;
      align-items: center;
    `

    const MessageListStyled = styled.div`
        max-height: 100%;
      overflow-y: auto;
    `;
return <WrapperStyled>
    <HeaderStyled>
            <div className="header_info">
                <p className="header_title">Room 1</p>
                <span className="header_description">Day la rooo 1</span>
            </div>
            <ButtonGroupStyled>
                <Button icon={<UserAddOutlined />} type='text'>Mời</Button>
                <Avatar.Group size="small" maxCount={2}>
                    <Tooltip title="A">
                        <Avatar size='small'>A</Avatar>
                    </Tooltip>
                    <Tooltip title="A">
                        <Avatar>A</Avatar>
                    </Tooltip>
                    <Tooltip title="A">
                        <Avatar>A</Avatar>
                    </Tooltip>
                </Avatar.Group>
            </ButtonGroupStyled>
    </HeaderStyled>
    <ContentStyled>
        <MessageListStyled>
                <Message text="Text" photoURL={null} displayName={"Hoang"} createAt={54654654654}/>
            <Message text="Text" photoURL={null} displayName={"Hoang"} createAt={54654654654}/>
            <Message text="Text" photoURL={null} displayName={"Hoang"} createAt={54654654654}/>
            <Message text="Text" photoURL={null} displayName={"Hoang"} createAt={54654654654}/>
            <Message text="Text" photoURL={null} displayName={"Hoang"} createAt={54654654654}/>
        </MessageListStyled>
        <FormStyled>
            <Form.Item>
                <Input placeholder='Nhập tin nhắn...' bordered={false} />
            </Form.Item>
            <Button type='primary'>Gửi</Button>
        </FormStyled>
    </ContentStyled>
</WrapperStyled>
}
export default ChatWindown
