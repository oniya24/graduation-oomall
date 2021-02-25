import { mapStateToProps, mapDispatchToProps } from '@/models/Aftersale';
import { connect, history, useLocation, useParams } from 'umi';
import { useEffect } from 'react';
import { Card, Button, List, Stepper, InputItem, Picker } from 'antd-mobile';
import { validateFormError } from '@/utils/validate';
import { createForm } from 'rc-form';
import { aftersaleTypes, regionData } from '@/consts/mall';
const aftersale_edit = ({ aftersaleDetail, putAftersaleById, form }) => {
  const {
    getFieldProps,
    validateFields,
    setFieldsInitialValue,
    getFieldError,
    setFieldsValue,
  } = form;
  const {
    id,
    quantity,
    reason,
    type,
    consignee,
    mobile,
    regionId,
    detail,
  } = aftersaleDetail;
  const submit = () => {
    validateFields((error, value) => {
      if (validateFormError(error)) {
        console.log(value);
        console.log(putAftersaleById);
        const { type, regionList } = value;
        putAftersaleById({
          ...value,
          id,
          type: type[0],
          regionId: regionList[regionList.length - 1],
        });
      }
    });
  };
  return (
    <Card>
      <Card.Body>
        <List>
          <InputItem
            {...getFieldProps('consignee', {
              initialValue: consignee,
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
              initialValue: mobile,
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
              initialValue: [Number(type)],
              rules: [{ required: true, message: '需要选择售后类型' }],
            })}
            onOk={e => console.log('ok', e)}
            onDismiss={e => console.log('dismiss', e)}
          >
            <List.Item arrow="horizontal">选择售后</List.Item>
          </Picker>
          <InputItem
            {...getFieldProps('reason', {
              initialValue: reason,
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
                  initialValue: Number(quantity),
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
              initialValue: detail,
              rules: [{ required: true, message: '需要输入详细地址' }],
            })}
            clear
            // ref={el => this.autoFocusInst = el}
          >
            详细地址
          </InputItem>
          {/* <List.Item wrap extra={ <Button inline type="primary" size="small" onClick={() => {}}>提交修改</Button> }></List.Item> */}
        </List>
        <Button inline type="primary" size="small" onClick={submit}>
          提交修改
        </Button>
      </Card.Body>
    </Card>
  );
};
const wrapper_address_edit = createForm()(aftersale_edit);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(wrapper_address_edit);
