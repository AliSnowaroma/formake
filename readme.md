## formake

## 简介
formake是一款动态表单生成器，支持根据json生成表单，基于react(16.10以上), antd(5.x)开发，json配置接口继承了antd组件接口，几乎有相同的api
formake支持事件配置，将事件进行了数据抽象

## 使用
> npm i formake
> import { GenerateForm, GenerateFormItems, useWatchForm } from 'formake'

```jsx
import { GenerateForm } from 'formake'
...

return <div>
  <GenerateForm
    formData={formData}
    labelCol={{span:6}}
    wrapperCol={{ offset: 1}}
    form={form}
    onValuesChange={onValuesChange}
    initialValues={initVal}
  />
</div>
```

## json配置文件

* 已经支持的组件类型
> Input,  Select,  Textarea,  Radio,  Checkbox,  RangePicker,  DatePicker,  Switch,  Upload,  Rate,  TimePicker,  Progress,  Slide,  InputNumber,
* demo
```js
const formData = [
  {
    marktype: 'input',
    param: 'name1',
    label: '输入框',
    type: '',
    placeholder: '请输入',
    disabled: false,
    rules: [
      {
        required: true, message: '请输入',
      },
      {
        validator: `return new Promise((resolve,reject) => {
            if(value && value != 8){
              reject('输入错误')
            } else {
              resolve()
            }
          })`,
      },
    ],
  },
  {
    marktype: 'radio',
    param: 'name2',
    label: '单选框',
    options: [
      {
        label: '选项A',
        value: 1,
      },
      {
        label: '选项B',
        value: 2,
      },
    ],
    disabled: false,
    rules: [
      {
        required: true, message: '请选择',
      },
    ],
  },
  {
    marktype: 'checkbox',
    param: 'name3',
    label: '复选框',
    options: [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ],
    disabled: false,
    rules: [
      {
        required: true, message: '请选择',
      },
      {
        validator (rule, value) {
          return new Promise((resolve, reject) => {
            if (value.length > 0 && value.length > 2) {
              reject('最多选两个')
            } else {
              resolve()
            }
          })
        },
      },
    ],
    onChange (a) {

    },
  },
  {
    marktype: 'textarea',
    param: 'name4',
    label: '输入框',
    placeholder: '请输入',
    disabled: false,
    value: '11',
    autoSize: {
      minRows: 2,
      maxRows: 6,
    },
    rules: [
      {
        required: true, message: '请输入',
      },
    ],
    onChange (a) {
      // console.log(a.target.value)
    },
  },
  {
    marktype: 'timepicker',
    param: 'name5',
    type: 'time',
    label: '时间选择框',
    placeholder: '请选择时间',
    format: 'HH:mm:ss',
    rules: [
      {
        required: true, message: '请选择',
      },
    ],
  },
  {
    marktype: 'datepicker',
    param: 'name6',
    type: 'date',
    label: '日期选择框',
    placeholder: '请选择日期',
    format: 'YYYY-MM-DD HH:mm:ss',
    showTime: true,
    rules: [
      {
        required: true, message: '请选择',
      },
    ],
  },
  {
    marktype: 'rate',
    label: '星级',
    param: 'name8',
    rules: [
      {
        required: true, message: '请选择',
      },
    ],
  },
  {
    marktype: 'switch',
    label: '开关',
    param: 'name9',
    rules: [
      {
        required: true, message: '请选择',
      },
    ],
  },
  {
    marktype: 'upload',
    label: '上传',
    param: 'name10',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    multiple: true,
    max: 6,
    size: '100', // 单位kb
    rules: [
      {
        required: true, message: '请上传图片',
      },
    ],

  },
  {
    marktype: 'progress',
    label: '进度',
    param: 'name11',
    defaultValue: 30,
  },
  {
    marktype: 'slide',
    label: '占比',
    param: 'name12',
    defaultValue: 0.3,
    step: 0.1,
    rules: [
      {
        required: true, message: '请选择',
      },
    ],
  },
  {
    marktype: 'inputNumber',
    label: '数量',
    param: 'name13',
    rules: [
      {
        required: true, message: '请填写',
      },
    ],
  },
]

export default formData

```

## 事件配置化

* demo

```js

const eventTriggers = {
  paramScope:[],
  filter: [
    {
      triggerValue: ['0'],
      showParamList:[],
    },
    {
      triggerValue: ['1'],
      showParamList: ['isOrigin'],
    },
  ],
  modify: [
    {
      param:'',
      newFormItemData:{
        
      }
    }
  ],
  dispatch: [
    {
       param:'',
       events: ['getData']
    }
  ]
}
```

### 数据抽象

>paramScope 表单项影响到哪些字段
>filter 表单项显示隐藏和值的映射
>modify 修改字段及修改后的表单项json
>dispatch 表单项内置事件 （主要对于自定义的表单项）

## Api

### GenerateForm

> - form  --------------Form.useForm实例
> - formData ---------- json文件
> - labelCol ---------- label宽度和间隔
> - wrapperCol --------------内容宽度和间隔
> - onValuesChange ---------- 表单值变化事件
> - initialValues  ----------  初始值
> - isEditor ---------------是否需要编辑，默认true

### GenerateFormItems

生成表单项

> - formItemConfig  --------------单个表单项json文件
> - onChange ---------- 表单值变化事件
> - isEditor ---------------是否需要编辑，默认true

### useWatchForm

> const [form] = useWatchForm()

## useWatchForm架构

> 基于Form.useForm()封装
> 
> 核心思想：
> useWatchForm返回的新form实例上增加属性formInstanceEventCenter
> 
> formInstanceEventCenter是一个事件中心，可以添加监听，触发监听函数
> 
> 在form执行setFieldsValue，setFieldValue时触发监听函数
> 
> GenerateFrom组件卸载时，移除监听函数





