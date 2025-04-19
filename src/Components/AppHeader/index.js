import { Badge, Image, Space, Typography } from "antd";
import {BellFilled, MailOutlined} from "@ant-design/icons";

function AppHeader(){
    return<div className="AppHeader">
        <Image width={40} height={40}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2V5UAh1KUQNDPQOI-UXfi7LlCgaaiDoSMg&s" alt="" />
        <Typography.Title>Faizal's Dasboard</Typography.Title>
        <Space>
        <Badge count={10} dot>
        <MailOutlined style={{fontSize:24}}/>
        </Badge>
         <Badge count={20}>
         <BellFilled style={{fontSize:24}}/>
         </Badge>
        
        </Space>

    </div>
}
export default AppHeader;