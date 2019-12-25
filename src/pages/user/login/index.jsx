import { Alert, Checkbox, Icon } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import LoginComponents from './components/Login';
import styles from './style.less';
const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginComponents;
class Login extends Component {
  loginForm = undefined;
  state = {
    type: 'account',
    autoLogin: true,
  };
  render() {
    <div className={styles.body}>
      {/* <div><img src={[require('../../assets/logo.png')]} /></div> */}
    </div>;
  }
}

export default connect(({ login, loading }) => ({
  userLogin: login.state,
  submitting: loading.effects['login/login'],
}))(Login);
