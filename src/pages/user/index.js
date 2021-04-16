import { useState } from 'react';
import { mapStateToProps, mapDispatchToProps } from '@/models/User';
import { connect } from 'umi';
import { List, InputItem, Card, Button, Picker, DatePicker } from 'antd-mobile';
import { createForm } from 'rc-form';
import { validateFormError } from '@/utils/validate';
import moment from 'moment';
import styles from './index.scss';

const login = ({ postUserLogin, postUser, form }) => {
  const [userState, setUserState] = useState(false);
  const {
    getFieldProps,
    validateFields,
    setFieldsInitialValue,
    getFieldError,
    setFieldsValue,
  } = form;
  const submitLogin = () => {
    validateFields((error, value) => {
      console.log(error, value);
      if (validateFormError(error)) {
        postUserLogin(value);
      }
    });
  };
  const submitRegister = () => {
    validateFields((error, value) => {
      console.log(error, value);
      if (validateFormError(error)) {
        const { birthday, gender, ...tail } = value;
        postUser({
          gender: gender[0],
          birthday: moment(birthday).format('YYYY-MM-DD'),
          ...tail,
        });
      }
    });
  };
  return (
    <div className={styles.login_contain}>
      <Card style={{ height: '100%', width: '100%', padding: 10 }}>
        {!userState && (
          <List style={{ background: 'none' }}>
            <InputItem
              title={<span>13513</span>}
              className={styles.form_item}
              {...getFieldProps('userName', {
                rules: [{ required: true, message: '请输入用户名' }],
              })}
              placeholder={'用户名'}
            >
              <span className={styles.form_item_placeholderStyle}>用户名</span>
            </InputItem>
            <InputItem
              className={styles.form_item}
              {...getFieldProps('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })}
              placeholder={'密码'}
            >
              <span className={styles.form_item_placeholderStyle}>密码</span>
            </InputItem>
            <Button onClick={submitLogin} className={styles.form_item_submit}>
              登录
            </Button>
          </List>
        )}
        {userState && (
          <List>
            <InputItem
              className={styles.form_item}
              {...getFieldProps('userName', {
                rules: [{ required: true, message: '请输入用户名' }],
              })}
              placeholder={'用户名'}
            >
              <span className={styles.form_item_placeholderStyle}>用户名</span>
            </InputItem>
            <InputItem
              className={styles.form_item}
              {...getFieldProps('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })}
              placeholder={'密码'}
            >
              <span className={styles.form_item_placeholderStyle}>密码</span>
            </InputItem>
            <InputItem
              className={styles.form_item}
              {...getFieldProps('mobile', {
                rules: [{ required: true, message: '请输入手机号' }],
              })}
              type="phone"
              placeholder={'手机号码'}
            >
              <span className={styles.form_item_placeholderStyle}>手机号</span>
            </InputItem>
            <InputItem
              className={styles.form_item}
              {...getFieldProps('email', {
                rules: [{ required: true, message: '请输入邮箱' }],
              })}
              type="email"
              placeholder={'邮箱'}
            >
              <span className={styles.form_item_placeholderStyle}>邮箱</span>
            </InputItem>
            <InputItem
              className={styles.form_item}
              {...getFieldProps('realName', {
                rules: [{ required: true, message: '请输入真实姓名' }],
              })}
              placeholder={'姓名'}
            >
              <span className={styles.form_item_placeholderStyle}>
                真实姓名
              </span>
            </InputItem>
            <DatePicker
              extra=""
              mode="date"
              title="选择你的生日"
              initialState={Date.now()}
              {...getFieldProps('birthday', {
                rules: [{ required: true, message: '请选择你的生日' }],
              })}
            >
              <List.Item arrow="horizontal">
                <span className={styles.form_item_placeholderStyle}>生日</span>
              </List.Item>
            </DatePicker>
            <Picker
              extra=""
              cols={1}
              data={[
                { value: 1, label: '男生' },
                { value: 0, label: '女生' },
              ]}
              title="性别"
              {...getFieldProps('gender', {
                rules: [{ required: true, message: '请选择你的性别' }],
              })}
            >
              <List.Item arrow="horizontal">
                <span className={styles.form_item_placeholderStyle}>性别</span>
              </List.Item>
            </Picker>
            <Button
              onClick={submitRegister}
              className={styles.form_item_submit}
            >
              注册
            </Button>
          </List>
        )}
        <div className={styles.form_item_spaceBetween}>
          <span
            onClick={() => {
              console.log('false');
              setUserState(false);
            }}
          >
            账号密码登录
          </span>
          <span
            onClick={() => {
              console.log('true');
              setUserState(true);
            }}
          >
            新用户注册
          </span>
        </div>
      </Card>
    </div>
  );
};

const wrapper_login = createForm()(login);
export default connect(mapStateToProps, mapDispatchToProps)(wrapper_login);
