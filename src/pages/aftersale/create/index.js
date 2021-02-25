import { mapStateToProps, mapDispatchToProps } from '@/models/Aftersale';
import { connect } from 'umi';
import { createForm } from 'rc-form';
import {
  List,
  Stepper,
  TextareaItem,
  InputItem,
  Picker,
  Card,
  Button,
  Modal,
} from 'antd-mobile';
import { validateFormError } from '@/utils/validate';
import { aftersaleTypes, regionData } from '@/consts/mall';
const aftersale_create = ({ postAftersale, form }) => {
  const {
    getFieldProps,
    validateFields,
    setFieldsInitialValue,
    getFieldError,
    setFieldsValue,
  } = form;
  // "type": 0,
  // "quantity": 0,
  // "reason": "string",
  // "regionId": 0,
  // "detail": "string",
  // "consignee": "string",
  // "mobile": "string"
  const submit = () => {
    validateFields((error, value) => {
      if (!validateFormError(error)) {
        postAftersale(value);
      }
    });
  };
  return (
    <Card>
      <List>
        <List>
          <InputItem
            {...getFieldProps('consignee', {
              initialValue: '',
              rules: [{ required: true, message: '需要输入申请人' }],
            })}
            clear
            // ref={el => this.autoFocusInst = el}
          >
            申请人
          </InputItem>
          <InputItem
            type="phone"
            clear
            {...getFieldProps('moible', {
              initialValue: '',
              rules: [{ required: true, message: '需要输入联系电话' }],
            })}
            // ref={el => this.autoFocusInst = el}
          >
            联系电话
          </InputItem>
          <Picker
            extra="请选择售后类型"
            data={aftersaleTypes}
            title="售后类型"
            cols={1}
            {...getFieldProps('type', {
              initialValue: '',
              rules: [{ required: true, message: '需要选择售后类型' }],
            })}
            onOk={e => console.log('ok', e)}
            onDismiss={e => console.log('dismiss', e)}
          >
            <List.Item arrow="horizontal">选择售后</List.Item>
          </Picker>
          <InputItem
            {...getFieldProps('reason', {
              initialValue: '',
              rules: [{ required: true, message: '需要输入原因' }],
            })}
            clear
            // ref={el => this.autoFocusInst = el}
          >
            原因
          </InputItem>
          <List.Item
            wrap
            extra={
              <Stepper
                {...getFieldProps('quantity', {
                  initialValue: '',
                  rules: [{ required: true, message: '需要输入数量' }],
                })}
                showNumber
                min={0}
              ></Stepper>
            }
          >
            数量
          </List.Item>
          <Picker
            extra="请选择(可选)"
            data={regionData}
            title="Areas"
            {...getFieldProps('regionList', {
              initialValue: '',
              rules: [{ required: true }],
            })}
            onOk={e => console.log('ok', e)}
            onDismiss={e => console.log('dismiss', e)}
          >
            <List.Item arrow="horizontal">选择省市</List.Item>
          </Picker>
          <InputItem
            {...getFieldProps('detail', {
              initialValue: '',
              rules: [{ required: true, message: '需要输入详细地址' }],
            })}
            clear
            // ref={el => this.autoFocusInst = el}
          >
            详细地址
          </InputItem>
          {/* <List.Item wrap extra={ <Button inline type="primary" size="small" onClick={() => {}}>提交修改</Button> }></List.Item> */}
        </List>
        <List.Item>
          <Button inline type="primary" size="small" onClick={submit}>
            提交售后单
          </Button>
        </List.Item>
      </List>
    </Card>
  );
};

const wrapper_aftersale_create = createForm()(aftersale_create);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(wrapper_aftersale_create);
