//数据字典管理
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
  Radio,
  Tree
} from 'antd';
import styles from './index5.less';

const InputGroup = Input.Group;
const { Option } = Select;
const { TreeNode, DirectoryTree } = Tree;

const columns = [
  {
    title: '序号',
    dataIndex: 'bh',
  },
  {
    title: '字典类型名称',
    dataIndex: 'mc',
  },
  {
    title: '字典类型代码',
    dataIndex: 'dw',
  },
  {
    title: '操作',
    dataIndex: 'djhs',
  }
];
const data = [
  {
    key: '1',
    bh: '1',
    mc: '名称',
    lx: '类型',
    bz: '是',
    dw: '中天弘信',
    djhs: 65
  },
  {
    key: '2',
    bh: '1',
    mc: '名称',
    lx: '类型',
    bz: '是',
    dw: '中天弘信',
    djhs: 65
  },
];
class index3 extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
      value: 1,
    };
  }
  onSelect = (keys, event) => {
    console.log('Trigger Select', keys, event);
  };

  onExpand = () => {
    console.log('Trigger Expand');
  };

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  back = () => {
    this.props.history.go(-1);
  }
  render() {
    const { flag } = this.state;

    return (
      <div>
        <div className={styles.top}>
          <div className={styles.active} onClick={this.gotoindex2}>
            费率表
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
            <Breadcrumb.Item href="" style={{ color: '#FDDB28', fontSize: '14px' }}>
              <span>费率表</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.content123} style={{ paddingLeft: 0 }}>
          {/* 左边盒子 */}
          <div className={styles.left}>
            <div style={{ width: '100%', background: '#2FBBB8', height: '8%', textAlign: 'center', color: 'white', lineHeight: 4, fontSize: 14 }}>费率表分类</div>
            <div style={{ width: '100%' }}>
              <DirectoryTree multiple defaultExpandAll onSelect={this.onSelect} onExpand={this.onExpand}>
                <TreeNode title="parent 0" key="0-0">
                  <TreeNode title="parent 1" key="0-1">
                    <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
                    <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
                  </TreeNode>
                </TreeNode>
                <TreeNode title="parent 1" key="0-1">
                  <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
                  <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
                </TreeNode>
              </DirectoryTree>
            </div>
          </div>
          {/* 右边盒子 */}
          <div className={styles.right}>
            <div className={styles.pox} style={{ display: 'flex' }}>
              <Select defaultValue="lucy" style={{ width: '80%', marginRight: '3%',float:'left' }} onChange={this.handleChange}>
                <Option value="1">Jack</Option>
                <Option value="2">Lucy</Option>
                <Option value="3">yimi</Option>
              </Select>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#237F7E',
                  border: '1px solid #237F7E',
                  height: '32px',
                  width: '74px',
                  marginLeft: 0
                }}
              >新建</Button>
            </div>
            <Table
              columns={columns}
              dataSource={data}
              bordered
              pagination={false}
              style={{ width: '90%',marginTop: '4%' }}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default index3;
