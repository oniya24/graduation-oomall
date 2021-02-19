import { mapStateToProps, mapDispatchToProps } from '@/models/User';
import { connect } from 'umi';
import { List, InputItem, Card, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from '@/pages/index.scss';
const my_info_reset_password = ({
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
    validateFields((error, value) => {
      console.log(value);
    });
  };
  const handleReqAuth = () => {
    getUserPasswordAuthCode();
  };
  return (
    <Card className={styles.page_contain}>
      这里实际进行重置密码
      <List>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <InputItem
            className={styles.form_item}
            {...getFieldProps('captcha', {
              rules: [{ required: true, message: '请输入用户名' }],
            })}
            placeholder={'验证码'}
          >
            <span className={styles.form_item_placeholderStyle}>验证码</span>
          </InputItem>
          <Button type="ghost" size="small" onClick={handleReqAuth}>
            获取验证码
          </Button>
        </div>
        <InputItem
          className={styles.form_item}
          {...getFieldProps('userName', {
            rules: [{ required: true, message: '请输入新密码' }],
          })}
          placeholder={'新密码'}
        >
          <span className={styles.form_item_placeholderStyle}>用户名</span>
        </InputItem>
        <Button className={styles.form_item_button} onClick={handleInfoModify}>
          修改
        </Button>
      </List>
    </Card>
  );
};

const wrapper_my_info_reset_password = createForm()(my_info_reset_password);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(wrapper_my_info_reset_password);
