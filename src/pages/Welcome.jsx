import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Card, Typography, Alert,Button, Col, Row , List } from 'antd';
// import styles from './Welcome.less';
import styles from './Welcome.css';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);



const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 5',
  },
  {
    title: 'Ant Design Title 6',
  },
  {
    title: 'Ant Design Title 7',
  },
  {
    title: 'Ant Design Title 8',
  },
 
];

const zdata = [
  {
    title: '定额数据管理',
  },
  {
    title: '信息价管理',
  },
  {
    title: '检查规则管理',
  },
  {
    title: '工程信息管理',
  },
  {
    title: '审查报告',
  },
  {
    title: '系统管理',
  },
];

export default () => (

  <div className="home">
      <Button  block style={{ height: "50px",background: '#2FBBB8'}}>开始功能审查</Button>

      <div style={{ background: '#f1f3f5', padding: '30px',marginTop:"30px" }}>
    <Row gutter={16}>
      <Col span={12}>
        <Card title="账号管理" style={{borderRadius:"20px"}} 
        bordered={false}
         headStyle={{background:"#2FBBB8",borderRadius:"20px 20px 0 0"}} 
         bodyStyle={{height:'450px'}}>
          <div >
              <p> <img src={[require("../assets/yuechu.png")]} style={{marginLeft:"33%"}} /></p>
             <p style={{textAlign:"center",fontSize:"16px"}}>东方月初</p>
          </div>
          <p style={{textAlign:"center"}}>
          您好，东方月初 2019年12月03日  星期一  14：56
          </p>
          <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Button style={{backgroundColor:"#EBFCF0",width:"110px",height:"70px"}}>用户管理</Button>
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Button style={{backgroundColor:"#FFF1F0",width:"110px",height:"70px"}}>修改密码</Button>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Button style={{backgroundColor:"#E6F7FF",width:"110px",height:"70px"}}>权限修改</Button>
    </Col>
  </Row>
  <Row  style={{marginTop:"30px"}}>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Button style={{backgroundColor:"#FFFADC",width:"110px",height:"70px"}}>数据字典</Button>
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Button style={{backgroundColor:"#F9FBE5",width:"110px",height:"70px"}}>系统日志</Button>
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Button style={{backgroundColor:"#E7E7F8",width:"110px",height:"70px"}}>切换用户</Button>
    </Col>
  </Row>
        </Card>
      </Col>
      <Col span={12}>
        <Card title="历史审查" style={{borderRadius:"20px"}}
        bordered={false}
         headStyle={{background:"#2FBBB8",borderRadius:"20px 20px 0 0"}}
          bodyStyle={{height:"450px"}}>
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          description="湖北电力工程造价智能审查.excel   "
        
        />
        <div>2019.12.03   15:35:59</div>
      </List.Item>
    )}
  />,
        </Card>
      </Col>
  
    </Row>
  </div>
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={zdata}
    renderItem={item => (
      <List.Item>
        <Card title={item.title} style={{boxShadow:":0px 2px 3px rgba(0,0,0,0.16)"}}>
         <p style={{float:"left",width:"70%"}}> 本功能模块旨在完成对核算定额 和预算定额的基础数据进行管理</p>
          <p style={{backgroundColor:"#7994FF",width:"64px",height:"64px",borderRadius:"50%",float:"left",marginLeft:"10%"}}>
         <img src={[require("../assets/footer-a.png")]} style={{marginLeft:"23%",marginTop:"16px"}} />
          </p>
          </Card>
      </List.Item>
    )}
  />,

  </div>
  
);
