import { Collapse, Typography } from "antd";
import React from "react";
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
}
`;
function RoomList(){
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PannelStyle header="Danh sách các phòng" key='1'>
                <Typography.Link>Room 1</Typography.Link>
                <Typography.Link>Room 1</Typography.Link>
                <Typography.Link>Room 1</Typography.Link>
                <Typography.Link>Room 1</Typography.Link>
                <Typography.Link>Room 1</Typography.Link>
            </PannelStyle>
        </Collapse>
    )
}
export default RoomList