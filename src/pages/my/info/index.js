import { mapStateToProps, mapDispatchToProps } from '@/models/User';
import { connect, history } from 'umi';
import { List, InputItem, Card, Button, Picker, DatePicker } from 'antd-mobile';
import { createForm } from 'rc-form';
import { validateFormError } from '@/utils/validate';
import styles from '@/pages/index.scss';
import { useEffect, useReducer } from 'react';
import dayjs from 'dayjs';
const my_info = ({
  userInfo,
  getUser,
  putUser,
  putUserPassword,
  getUserPasswordAuthCode,
  form,
}) => {
  const {
    getFieldProps,
    validateFields,
    setFieldsInitialValue,
    getFieldError,
    setFieldsValue,
  } = form;
  const handleInfoModify = () => {
    validateFields(['realName', 'gender', 'birthday'], (error, value) => {
      console.log(value);
    });
  };
  useEffect(() => {
    console.log(userInfo['gender']);
    const data = {
      ...userInfo,
      birthday: new Date(userInfo['birthday']),
    };
    setFieldsValue(data);
  }, [userInfo]);
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Card style={{ height: '100%', width: '100%', padding: 10 }}>
        这里写获取用户信息 修改用户信息 跳转到重置密码页
        <List>
          <InputItem
            disabled
            className={styles.form_item}
            {...getFieldProps('userName', {
              rules: [{ required: true, message: '请输入用户名' }],
            })}
            placeholder={'用户名'}
          >
            <span className={styles.form_item_placeholderStyle}>用户名</span>
          </InputItem>
          <InputItem
            disabled
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
            disabled
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
            <span className={styles.form_item_placeholderStyle}>真实姓名</span>
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
              { label: '女生', value: '0' },
              { label: '男生', value: '1' },
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
          <List.Item
            extra={
              <Button
                type="ghost"
                size="small"
                onClick={() => history.push('reset_password')}
              >
                重置密码
              </Button>
            }
          >
            <span className={styles.form_item_placeholderStyle}>密码</span>
          </List.Item>
          <Button
            className={styles.form_item_button}
            onClick={handleInfoModify}
          >
            修改
          </Button>
        </List>
      </Card>
    </div>
  );
};

const wrapper_my_info = createForm()(my_info);
export default connect(mapStateToProps, mapDispatchToProps)(wrapper_my_info);
