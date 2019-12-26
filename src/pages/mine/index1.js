//系统概览
import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Row,
  Col,
  Breadcrumb,
  List,
  Layout,
  Menu,
  Input,
  Select,
  Typography,
  Button,
  Table,
  Card,
} from 'antd';
import styles from './index1.less';

const columns = [
  {
    title: '操作员',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: '项目名称',
    dataIndex: 'name',
  },
  {
    title: '项目类型',
    dataIndex: 'lx',
  },
  {
    title: '项目状态',
    dataIndex: 'zt',
  },
  {
    title: '项目时间',
    dataIndex: 'sj',
  },
  {
    title: '备注',
    dataIndex: 'bz',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    lx: 'New York No. 1 Lake Park',
    zt: 654,
    sj: 8989,
    bz: 5656,
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    lx: 'London No. 1 Lake Park',
    zt: 654,
    sj: 8989,
    bz: 565656,
  },
];
class index1 extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
      bottom:'bottom'
    };
  }
  
  MyAccount=()=>{
    this.props.history.push('/mine/index2')//用户账户管理
  }
  MyRoot=()=>{
    this.props.history.push('/mine/index3')//用户权限管理
  }
  Dictionaries=()=>{
    this.props.history.push('/mine/index4')//数据字典管理
  }
  systemLog=()=>{
    this.props.history.push('/mine/systemLog')//系统日志管理
  }
  render() {
    const { flag } = this.state;

    return (
      <div>
        <div className={styles.top}>
          <div className={styles.title} onClick={this.card1}>
            系统概览
          </div>
          <Breadcrumb
            style={{
              fontSize: '22px',
              lineHeight: '60px',
            }}
          >
            <Breadcrumb.Item
              href=""
              style={{ color: '#FFFFFF', marginLeft: '20px', fontSize: '14px' }}
            >
              <span>首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="" style={{ color: '#FFFFFF', fontSize: '14px' }}>
              <span>系统管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ color: '#FDDB28', fontSize: '14px' }}>
              系统概览
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.content}>
          <div className={styles.box1}>
            <img src={[require('../../assets/yuechu.png')]} />
            <p className={styles.p1}>东方月初</p>
            <p className={styles.p2}>99999@qq.com</p>
            <p className={styles.p2}>管理员</p>
            <p className={styles.p3}>
              <Button>修改密码</Button>
              <Button>切换用户</Button>
            </p>
          </div>
          <div className={styles.box2}>
            <Row gutter={10}>
              <Col>
                <Card
                  title="账号管理"
                  style={{ borderRadius: '20px', height: 40 }}
                  bordered={false}
                  headStyle={{
                    background: '#2FBBB8',
                    borderRadius: '10px 10px 0 0',
                    height: 40,
                    color: 'white',
                  }}
                >
                  <div style={{ display: 'flex',justifyContent:'space-around' }}>
                    <div className={styles.litterBox}>
                      <p>用户账户管理</p>
                      <img
                        src={[require('../../assets/user01.png')]}
                      />
                      <Button
                        style={{
                          backgroundColor: 'rgba(92,92,206,1)',
                          width: '110px',
                          height: '30px',
                        }}
                        onClick={this.MyAccount}
                      >
                        管理
                      </Button>
                    </div>
                    <div className={styles.litterBox}>
                      <p>用户权限管理</p>
                      <img
                        src={[require('../../assets/user02.png')]}
                      />
                      <Button
                        style={{
                          backgroundColor: '#4288AA',
                          width: '110px',
                          height: '30px',
                        }}
                        onClick={this.MyRoot}
                      >
                        管理
                      </Button>
                    </div>
                    <div className={styles.litterBox}>
                      <p>数据字典管理</p>
                      <img
                        src={[require('../../assets/user03.png')]}
                      />
                      <Button
                        style={{
                          backgroundColor: '#FCE24B',
                          width: '110px',
                          height: '30px',
                        }}
                        onClick={this.Dictionaries}
                      >
                        管理
                      </Button>
                    </div>
                    <div className={styles.litterBox}>
                      <p>系统日志管理</p>
                      <img
                        src={[require('../../assets/user04.png')]}
                      />
                      <Button
                        style={{
                          backgroundColor: '#FE9E4D',
                          width: '110px',
                          height: '30px',
                        }}
                        onClick={this.systemLog}
                      >
                        管理
                      </Button>
                    </div>                    
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
          <div className={styles.box3}>
            <p className={styles.p1}>2019年12月24日 星期一</p>
            <img src={[require('../../assets/yuechu.png')]} />
            <p className={styles.p3}>晴 32°C-28°C</p>
          </div>
          <div className={styles.box4}>
            <Row gutter={10}>
              {/* <Col>
                <Card
                  title="操作记录"
                  style={{ borderRadius: '20px', height: 40 }}
                  bordered={false}
                  headStyle={{
                    background: '#2FBBB8',
                    borderRadius: '10px 10px 0 0',
                    height: 40,
                    color: 'white',
                  }}
                > */}
                  <Table columns={columns} dataSource={data} bordered/>
                {/* </Card>
              </Col> */}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default index1;
