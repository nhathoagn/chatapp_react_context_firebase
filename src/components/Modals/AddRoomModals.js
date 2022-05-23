import React, {useContext} from 'react'
import {Form, Input, Modal} from "antd";
import {AppContext} from "../Context/AppProvider";

function AddRoomModals() {
    const {isAddRoomVisible, setIsAddRoomVisible} = useContext(AppContext)
    const [form] = Form.useForm();
    const handleOK = () =>{

    }
    const handleCancel = () =>{
        setIsAddRoomVisible(false)
    }

    return (
        <div>
            <Modal
             title="Tạo phòng"
             visible={isAddRoomVisible}
             onOk={handleOK}
             onCancel={handleCancel}
            >
            <Form form={form}>
                <Form.Item label="Tên Phòng" name='name'>
                    <Input placeholder="Nhập tên phòng"/>
                </Form.Item>
                <Form.Item label="Mô tả" name='description'>
                    <Input.TextArea placeholder="Nhập mô tả"/>
                </Form.Item>

            </Form>
            </Modal>
        </div>
    )
}
export default AddRoomModals