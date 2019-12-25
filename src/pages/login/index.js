import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Form, Icon, Input, Button, Checkbox
} from 'antd';
import styles from './index.less';

class login1 extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };



  render() {
    const { flag } = this.state;
    // const { getFieldDecorator } = this.props.form;


    return (
      <div className={styles.body} style={{ width: '100%', height: '100%' }}>
        <div style={{ marginLeft: '40%', marginBottom: '2%' }}>
          <img src={require('../../assets/logo.png')} style={{ width: 268, height: 78 }}></img>
        </div>
        <div className={styles.content}>
          <p className={styles.title}>技改检修工程造价智能审查工具</p>

          <div style={{ width: '80%', height: '40%', margin: '0 auto' }}>
            <p className={styles.pa}><span>账号 </span><input type="text" /></p>
            <p className={styles.pa}><span>密码 </span><input type="password" /></p>
            <button>登录</button>
          </div>
        </div>
      </div>
    )
  }
}
export default login1;
