import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Input,  Button, } from 'antd';
const FormItem = Form.Item;
@connect(({ login, }) => ({
  login,
}))
@Form.create()
class LoginPage extends Component {
  loginIn(){
    const {form,dispatch} = this.props;
    form.validateFields((err, values) => {
      if(!err){
        dispatch({
          type:'login/loginInFetch',
          payload:values,
        })
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="loginContent">
        <Form layout="inline" style={{ paddingTop: 20,textAlign:'center'}}>
          <Row gutter={{ md: 24, lg: 24, xl: 48 }}>
            <Col md={24} sm={24}>
              <FormItem label="用户名">
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: false,
                      message: '',
                    },
                  ],
                })(
                  <Input placeholder="请输入" />
                )}
              </FormItem>
            </Col>
            <Col md={24} sm={24}>
              <FormItem label="密码">
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: false,
                      message: '',
                    },
                  ],
                })(
                  <Input placeholder="请输入" />
                )}
              </FormItem>
            </Col>
            <Col md={24} sm={24}>
              <Button type="primary" onClick={this.loginIn.bind(this)}>
                登录
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default LoginPage;





// import React, { Component, Fragment } from 'react';
// import { connect } from 'dva';
// import {
//   Form, Icon, Input, Button, Checkbox
// } from 'antd';
// import styles from './index.less';

// @connect(({ login, }) => ({
//   login,
// }))
// // const user_Reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
// class login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       flag1: 0,
//       flag2:0,
//       username:'',
//       password:''
//     };
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   };
//   onInputUser=(e)=>{
//     this.setState({
//       username:e.target.value
//     }) 
//   }
//   onInputPassword=(e)=>{
//     this.setState({
//       password:e.target.value
//     })  
//   }

//   login=()=>{
//     const {dispatch} = this.props;
//     console.log(this.state.username,this.state.password);
//     dispatch({type:'login',payload:{user:this.state.username,password:this.state.password}})
//   }
//   render() {
//     const { flag1,flag2,username,password } = this.state;
    
//     // const {  } = this.props.form;


//     return (
//       <div className={styles.body} style={{ width: '100%', height: '100%' }}>
//         <div style={{ marginLeft: '40%', marginBottom: '2%' }}>
//           {/* <img src={require('../../assets/logo.png')} style={{ width: 268, height: 78 }}></img> */}
//         </div>
//         <div className={styles.content}>
//           <p className={styles.title}>技改检修工程造价智能审查工具</p>

//           <div style={{ width: '80%', height: '40%', margin: '0 auto' }}>
//             <p className={styles.pa}><span>账号 </span><input type="text" onChange={(e)=>this.onInputUser(e)}/></p>
//             <p className={styles.pa}><span>密码 </span><input type="password" onChange={(e)=>this.onInputPassword(e)}/></p>
//             <button disable={flag1} onClick={this.login}>登录</button>
//           </div>
//        </div>
//       </div>
//     )
//   }
// }
// export default login;
