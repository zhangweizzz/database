import React, { Component, Fragment } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Card, Typography, Alert, Button, Col, Row, List, Modal,Input,Tabs,Radio  } from 'antd';
import styles from './Welcome.less';
// import styles from './Welcome.css';

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

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
class Welcome extends Component {
 
state = {
   visible: false, 
    goModal:false,
    start: false,
    value: 1,
  };
showModal = () => {
  this.setState({
    visible: true,
  });
};

goModal = () => {
  this.setState({
    goModal:true,
  });
};
startModel = () =>{
  this.setState({
    start:true,
  })
}
backModal = e => {
  console.log(e);
  this.setState({
    goModal:false,
  });
};

handback= e => {
  console.log(e);
  this.setState({
    goModal:false,
  });
};
endModel = e =>{
  this.setState({
    start:false,
  })
}



handleOk = e => {
  console.log(e);
  this.setState({
    visible: false,
  });
};

handleCancel = e => {
  console.log(e);
  this.setState({
    visible: false,
  });
};
ppModel = e=>{
  console.log(e);
  this.setState({
    start: false,
  });
}
onChange = e => {
  console.log('radio checked', e.target.value);
  this.setState({
    value: e.target.value,
  });
};


  render(){
    
    return(


      <div className="home">
        <Button 
        block 
        style={{ height: '50px', background: '#2FBBB8' }}
        onClick={this.startModel}
        >
          开始功能审查
        </Button>
        <Modal
         
          visible={this.state.start}
          onOk={this.ppModel}
          onCancel={this.endModel}
          closable={false}
          keyboard={true}
          centered={true}
        >
           <Tabs defaultActiveKey="2" onChange={callback}>
    <TabPane tab="新建项目" key="1">
      <div className={styles.tabone}>
      <p>项目分类:</p> <div><Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>技改项目</Radio>
        <Radio value={2}>检修项目</Radio>
      </Radio.Group></div>
      </div>
      <div className={styles.tabtwo}>
          <p>项目名称</p><p><Input value="220kv变电站工程-2019/12/25"/></p>
      </div>
      <div className={styles.pathree}>
          <p>公司名称:</p><p><Input value="武汉中天弘信科技有限公司" /></p><p>项目编号</p><p><Input value="JG-0100020191225" /></p>
        </div>
        <div className={styles.pathree}>
          <p>公司名称:</p><p><Input value="武汉中天弘信科技有限公司" /></p><p>项目编号</p><p><Input value="JG-0100020191225" /></p>
        </div>
        <div className={styles.pathree}>
          <p>公司名称:</p><p><Input value="武汉中天弘信科技有限公司" /></p><p>项目编号</p><p><Input value="JG-0100020191225" /></p>
        </div>
        <div className={styles.pathree}>
          <p>公司名称:</p><p><Input value="武汉中天弘信科技有限公司" /></p><p>项目编号</p><p><Input value="JG-0100020191225" /></p>
        </div>
    </TabPane>
    <TabPane tab="原有项目" key="2">
        <div className={styles.pabone}>
            <p>历史项目选择项：</p><p><Input value="220kv变电站工程-2019/12/25"/></p><p><Button>查询</Button></p>
        </div>
        <div className={styles.patwo}>
          <p>项目名称</p><p><Input value="220kv变电站工程-2019/12/25"/></p>
        </div>
        <div className={styles.pathree}>
          <p>公司名称:</p><p><Input value="武汉中天弘信科技有限公司" /></p><p>项目编号</p><p><Input value="JG-0100020191225" /></p>
        </div>
        <div className={styles.pathree}>
          <p>公司名称:</p><p><Input value="武汉中天弘信科技有限公司" /></p><p>项目编号</p><p><Input value="JG-0100020191225" /></p>
        </div>
        <div className={styles.pathree}>
          <p>公司名称:</p><p><Input value="武汉中天弘信科技有限公司" /></p><p>项目编号</p><p><Input value="JG-0100020191225" /></p>
        </div>
        <div className={styles.pathree}>
          <p>公司名称:</p><p><Input value="武汉中天弘信科技有限公司" /></p><p>项目编号</p><p><Input value="JG-0100020191225" /></p>
        </div>
       
    </TabPane>
    
  </Tabs>,
          
        </Modal>
        <div style={{ background: '#f1f3f5', padding: '30px', marginTop: '30px' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card
                title="账号管理"
                style={{ borderRadius: '20px' }}
                bordered={false}
                headStyle={{ background: '#2FBBB8', borderRadius: '20px 20px 0 0' }}
                bodyStyle={{ height: '450px' }}
              >
                <div>
                  <p>
                    {' '}
                    <img src={[require('../assets/yuechu.png')]} style={{ marginLeft: '33%' }} />
                  </p>
                  <p style={{ textAlign: 'center', fontSize: '16px' }}>东方月初</p>
                </div>
                <p style={{ textAlign: 'center' }}>您好，东方月初 2019年12月03日 星期一 14：56</p>
                <Row>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Button style={{ backgroundColor: '#EBFCF0', width: '110px', height: '70px', color: "#333333" }}>
                      用户管理
                    </Button>
                  </Col>
                  <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Button style={{
                       backgroundColor: '#FFF1F0', 
                    width: '110px', height: '70px',
                     color: "#333333" ,
                     }}
                     onClick={this.showModal}
                     >
                      修改密码
                    </Button>
                    <Modal
              title="修改密码"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              closable={false}
              keyboard={true}
              centered={true}
   
            >
              <div className="homeinput">
                     <div className="homeinput-a">账户名：</div>
                     <div className="homeinput-b"><Input placeholder="东方月初" /></div>
              </div>
              <div className="homeinput">
                   <div className="homeinput-a">原始密码：</div>
                     <div className="homeinput-b"><Input type="password"  value="123456" /></div>
              </div>
              <div className="homeinput">
                  <div className="homeinput-a">设置新密码：</div>
                     <div className="homeinput-b"><Input type="password" /></div>
              </div>
              <div className="homeinput">
                  <div className="homeinput-a">确认新密码：</div>
                     <div className="homeinput-b"><Input type="password" /></div>
              </div>
            </Modal>
    
                  </Col>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Button style={{ backgroundColor: '#E6F7FF', width: '110px', height: '70px', color: "#333333" }}>
                      权限修改
                    </Button>
                  </Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Button style={{ backgroundColor: '#FFFADC', width: '110px', height: '70px', color: "#333333" }}>
                      数据字典
                    </Button>
                  </Col>
                  <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Button style={{ backgroundColor: '#F9FBE5', width: '110px', height: '70px', color: "#333333" }}>
                      系统日志
                    </Button>
                  </Col>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Button 
                    style={{ 
                      backgroundColor: '#E7E7F8',
                       width: '110px',
                       height: '70px',
                       color: "#333333" }}
                       onClick={this.goModal}
                       >
                      切换用户
                    </Button>
                    <Modal
              title="切换用户"
              visible={this.state.goModal}
              onOk={this.backModal}
              onCancel={this.handback}
              closable={false}
              keyboard={true}
              centered={true}
            >
              <div className="homeinput">
                     <div className="homeinput-a">账户名：</div>
                     <div className="homeinput-b"><Input placeholder="东方月初" /></div>
              </div>
              <div className="homeinput">
                   <div className="homeinput-a">密码：</div>
                     <div className="homeinput-b"><Input type="password" value="123456" /></div>
              </div>
            </Modal>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="历史审查"
                style={{ borderRadius: '20px' }}
                bordered={false}
                headStyle={{ background: '#2FBBB8', borderRadius: '20px 20px 0 0' }}
                bodyStyle={{ height: '450px' }}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta description="湖北电力工程造价智能审查.excel   " />
                      <div>2019.12.03 15:35:59</div>
                    </List.Item>
                  )}
                />
                ,
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
              <Card title={item.title} style={{ boxShadow: ':0px 2px 3px rgba(0,0,0,0.16)' }}>
                <p style={{ float: 'left', width: '70%' }}>
                  {' '}
                  本功能模块旨在完成对核算定额 和预算定额的基础数据进行管理
                </p>
                <p
                  style={{
                    backgroundColor: '#7994FF',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    float: 'left',
                    marginLeft: '10%',
                  }}
                >
                  <img
                    src={[require('../assets/footer-a.png')]}
                    style={{ marginLeft: '23%', marginTop: '16px' }}
                  />
                </p>
              </Card>
            </List.Item>
          )}
        />
        ,
      </div>
      )
  }

};
export default Welcome;
