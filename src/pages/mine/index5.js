import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Row,
  Col,
  Breadcrumb,
  Icon,
  Layout,
  Menu,
  Input,
  Select,
  InputNumber,
  Button,
  Table,
  Card,
} from 'antd';
import styles from './index5.less';

class index extends Component {
  render() {
    const { Meta } = Card;
    return (
      <div>
        {/* 头部导航 */}
        <div className={styles.top}>
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
              <span style={{ color: '#FDDB28' }}>检查规则管理</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.content}>
          <div style={{ marginRight: 40 }} className={styles.box1}>
            <Card
              hoverable
              style={{ width: 180, height: 132 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="工程量审查" description="www.instagram.com" />
            </Card>
          </div>
          <div style={{ marginRight: 40 }} className={styles.box1}>
            <Card
              hoverable
              style={{ width: 180, height: 132 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="取费审查" description="www.instagram.com" />
            </Card>
          </div>
          <div style={{ marginRight: 40 }} className={styles.box1}>
            <Card
              hoverable
              style={{ width: 180, height: 132 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="物料审查" description="www.instagram.com" />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
