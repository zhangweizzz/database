//权限管理
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
  Checkbox,
  Tree
} from 'antd';
import styles from './index3.less';

const InputGroup = Input.Group;
const { Option } = Select;
const { TreeNode } = Tree;

const treeData = [
  {
    title: '选择所有权限',
    key: '0-0',
    children: [
      {
        title: '工程量A',
        key: '0-0-0',
        children: [
          { title: '工程量', key: '0-0-0-0' },
          { title: '工程量', key: '0-0-0-1' },
          { title: '工程量', key: '0-0-0-2' },
        ],
      },
      {
        title: '工程量B',
        key: '0-0-1',
        children: [
          { title: '工程量', key: '0-0-1-0' },
          { title: '工程量', key: '0-0-1-1' },
          { title: '工程量', key: '0-0-1-2' },
        ],
      },
      {
        title: '工程量C',
        key: '0-0-2',
      },
    ],
  },
  // {
  //   title: '0-1',
  //   key: '0-1',
  //   children: [
  //     { title: '0-1-0-0', key: '0-1-0-0' },
  //     { title: '0-1-0-1', key: '0-1-0-1' },
  //     { title: '0-1-0-2', key: '0-1-0-2' },
  //   ],
  // },
  // {
  //   title: '0-2',
  //   key: '0-2',
  // },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const plainOptions = ['果果', '安安', '朗朗'];

class index3 extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
      value: 1,
      expandedKeys: ['0-0-0', '0-0-1'],
      autoExpandParent: true,
      checkedKeys: ['0-0-0'],
      selectedKeys: [],
    };
  }
  onExpand = expandedKeys => {
    console.log('onExpand', expandedKeys);
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onCheck = checkedKeys => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  };

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  };

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} {...item} />;
    });

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  gotoindex2 = () => {
    this.props.history.push('/rules/index2');
  };
  gotocreate = () => {
    this.props.history.push('/rules/index3add');
  };
  back = () => {
    this.props.history.go(-1);
  }
  render() {
    const { flag } = this.state;

    return (
      <div>
        <div className={styles.top}>
          <div className={styles.active}>用户权限管理</div>
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
              <span>用户权限管理</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.content}>
          <div className={styles.bt}>
            {' '}
            <p className={styles.contentp}></p>
            <h2>用户选择 :
              <span style={{ marginLeft: '8%' }}>
                <Checkbox.Group options={plainOptions} />
              </span>
            </h2>
          </div>
          <p className={styles.hr}></p>
          <div className={styles.bt}>
            {' '}
            <p className={styles.contentp}></p> <h2>权限选择 :</h2>
          </div>
          <Tree
            checkable
            onExpand={this.onExpand}
            expandedKeys={this.state.expandedKeys}
            autoExpandParent={this.state.autoExpandParent}
            onCheck={this.onCheck}
            checkedKeys={this.state.checkedKeys}
            onSelect={this.onSelect}
            selectedKeys={this.state.selectedKeys}
            style={{ marginLeft: '10%' }}
          >
            {this.renderTreeNodes(treeData)}
          </Tree>
          <div style={{ display: 'flex' }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: '#237F7E',
                border: '1px solid #237F7E',
                height: '32px',
                width: '74px',
                marginLeft: '80%',
                marginBottom: '2%',
              }}
            >
              保存
          </Button>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: '#237F7E',
                border: '1px solid #237F7E',
                height: '32px',
                width: '74px',
                marginLeft: '4%',
                marginBottom: '2%',
              }}
              onClick={this.back}
            >
              取消
          </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default index3;
