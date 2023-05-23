# formake

<font size='3' face="宋体">
formake是一款动态表单生成器，根据json数据生成表单，基于react(16.10以上), antd(5.x)开发，json配置接口继承了antd组件接口，并在此基础上添加了扩展。

formake支持事件配置，对事件进行了数据抽象，启发于react, react用对象描述页面，formake用对象述事件。

formake支持表单多种形式嵌套组合，掌握api后，可以快捷生成不同类型地表单。

formake是研发[智慧PG(pg-ting)](https://www.pgting.com)系统时，附属研发产品，同智慧PG引擎一起，可以使用在不同语言开发的项目上。
</font>


中文文档参见：
[formake中文文档](https://www.pgting.com/pg-doc/formake)
[拖拽生成表单](https://www.pgting.com/formDesign)

生成图表实例：

<img src="https://s1.ax1x.com/2023/05/13/p961zwQ.png" width="50%" />

## 二、使用

```js
yarn add formake -S
```

```js
import { GenerateForm, GenerateFormItems, useWatchForm } from 'formake'
```

```jsx
import { GenerateForm } from 'formake'
...

return <>
  <GenerateForm
    formData={formData}
    labelCol={{span:6}}
    wrapperCol={{ offset: 1}}
    form={form}
    onValuesChange={onValuesChange}
    initialValues={initVal}
  />
  </>
```

### 1，GenerateForm  props

```ts
formData: Array<FormData>;  // 表单配置文件
form: FormInstance;         // 表单实例，扩展使用const [form] = useWatchForm()，支持事件配置等，后续有介绍
useEvent: boolean;          // 是否开启动态事件配置
isEditor: boolean;           // 表单是否可编辑
onValuesChange: Funciton;    // 同antd
...                         // GenerateForm其他属性同Antd Form属性

```

### 2，GenerateFormItems  props
<font size='3' face="宋体">GenerateFormItems主要是用来生成局部表单项</font>

```ts
formData Array<FormData>;  // 同GenerateForm
isEditor: boolean;         // 同GenerateForm
```

## formData 表单配置文档

### 1，基础组件配置
```ts
type FormData = Array<{
  marktype: string;            // 组件类型 必须
  param: string;               // 字段名称 必须,
  label?: string;              // 表单项label,
  type?: string;               // 日期组件type,
  placeholder?: string;        // 描述
  initialValue: strig | Array  // 初始值
  disabled?:boolean;           // 是否禁用
  rules?: Array<Rule>          // 同antd, 支持validator传入字符串函数
  labelCol?: Object;           // 同antd
  wrapperCol?: Object;         // 同antd
  eventConfig?: EventConfig;   // 事件配置信息，容器事件无该属性
  tabTitle?: string;           // 用在tabContainer中时配置
  ...?                         // 同 Antd Form.Item属性
  ...                          // 其他用于容器组件的属性，不同容器不同
}>
```

**已经支持的组件类型**

**input,  select,  textarea,  radio,  checkbox,  rangePicker,  datePicker,  switch,  upload,  rate,  timePicker,  progress,  slide,  inputNumber, color（色板）**

### 2，容器组件配置

<font size='3' face="宋体">简介：容器组件共有四个，用于复杂表单的配置</font>

>- rowContainer 行容器
>- colContainer   列容器
>- tabContainer tab切换容器
>- listContainer 列表容器

#### rowContainer使用和配置
<font size='3' face="宋体">rowContainer可以嵌套其他组件，也可以被其他组件嵌套，支持多层</font>

```ts
interface RowContainerConfig {
  marktype: 'rowContainer';
  param: string;
  labelCol?: Object;          // 同antd
  wrapperCol?: Object;        // 同antd
  label?: string;             // 表单项label,
  column: number;             // 每行显示几列
  items: Array<FormDataItem>  // 容器内表单配置项，可以配置基本组件，容器组件，支持多层嵌套
}

```

#### columnContainer使用和配置
<font size='3' face="宋体">columnContainer可以嵌套其他组件，也可以被其他组件嵌套</font>
```ts
interface ColumnContainerConfig {
  marktype: 'columnContainer';
  param: string;              // 同上
  labelCol?: Object;          // 同antd
  wrapperCol?: Object;        // 同antd
  label?: string;             // 表单项label,
  columnCol?: Object;         // 列所占宽度，用法同labelCol
  items: Array<FormDataItem>  // 容器内表单配置项，可以配置基本组件，容器组件，支持多层嵌套
}
```

#### tabContainer使用和配置

<font size='3' face="宋体">
使用tabContainer组件，items表单项需要添加tabTitle属性，用于显示tab的标题
tabContainer可以嵌套其他组件，也可以被其他组件嵌套，支持多层
</font>

```ts
interface TabContainerConfig {
  marktype: 'tabContainer';
  param: string;              // 合成字段名称，容器内部的字段可以被自动收集并格式化
  labelCol?: Object;          // 同antd
  wrapperCol?: Object;        // 同antd
  label?: string;             // 表单项label,
  items: Array<FormDataItem>  // 容器内表单配置项，可以配置基本组件，容器组件，支持多层嵌套
}

```

#### listContainer使用和配置
<font size='3' face="宋体">
listContainer可以嵌套其他组件，也可以被其他组件嵌套，支持多层
**listContainer组件不支持嵌套listContainer组件**，如果需要这样的数据结构，可以进行其他方式拆分组合
</font>
```ts
interface Config {
  marktype: 'rowContainer';
  param: string;
  labelCol?: string;          // 同antd
  wrapperCol?: string;        // 同antd
  label?: string;             // 表单项label,
  column: number;             // 每行显示几列
  items: Array<FormDataItem>  // 容器内表单配置项，可以配置基本组件，容器组件，支持多层嵌套
}
```

**说明：**
<font size='3' face="宋体">
容器组件和内部基础组件的尺寸均可以通过组合调节labelCol, wrapperCol, columnCol实现
</font>


### 事件配置
<font size='3' face="宋体">
formake对事件进行了抽象，一般业务中，组件事件可以归纳为以下几点：

>1，隐藏其他表单项
2，修改其他表单的值
3，禁用其他表单项
4，修改其他项的验证规则
5，修改其他表单项的选项
......

不管是什么操作，这些点最终都是对表单产生副作用，这些副作用可以通过react去操作状态影响视图，相对的，这些状态再引起表单变化，同样，省略状态，直接用表单配置数据描述事件带来的视图改变也是可行的。

将事件抽象为以下几种情形：
</font>


```ts
interface EventConfig {
  filter: Array<
    {
      triggerValue: Array<string>;  // 触发值
      hideFields: Array<string>;    // 隐藏的表单项的param
    }
  >,
  modify: Array<{
    {
      triggerValue: Array<string>;   // 触发值
      modifyField: string;           // 修改的字段
      newValue?: any;                // 被修改表单项的新值
      newFormItemConfig?: {          // 表单项配置更改后的属性，更改什么就填入什么属性
        disabled: boolean;  
        // ...       
      }
    }
  }>
}
```

## 三 、formake扩展

### useWatchForm
<font size='3' face="宋体">
简介：
useWatchForm基于Antd useForm封装，继承了useForm的所有功能，同时加入了设置值为对象的方法，获取值为对象的方法，值变化监测等功能。
</font>

使用方法
```js
const [form] = useWatchForm()
```

#### 1，useWatchForm 监测功能
<font size='3' face="宋体">
表单值更新时，formake自动发起值检测，自动更新表单配置文件进而影响视图
可以通过form.store.activeFormData获取最新的表单配置文件
</font>

#### 2，setFormatFieldsValue和getFormatFieldsValue
<font size='3' face="宋体">
form.getFieldsValue获取到的表单值是扁平化的，对于一些复杂业务场景，扁平化不利于业务理解，getFormatFieldsValue扩展自getFieldsValue，在获取值时可以直接获取到和配置文件相同的数据结构

setFormatFieldsValue扩展自form.setFieldsValue,支持设置嵌套对象，内部会自动根据配置文件进行扁平化处理。

setFormatFieldsValue和getFormatFieldsValue主要应用于上述嵌套组件互相嵌套的场景。
</font>

## 四、实例

开头图表的配置信息

<img src="https://s1.ax1x.com/2023/05/13/p961zwQ.png" width="20%" />

```js
const formItems = [
  {
    marktype: 'rowContainer',
    param: 'fontsize',
    column: 3,
    label: '基础信息',
    items: [
      {
        marktype: 'input',
        param: 'name',
        label: '名称',
        initialValue: '军工仪表',
        disabled: false,
      },
      {
        marktype: 'input',
        param: 'width',
        label: '宽度',
        disabled: false,
      },
      {
        marktype: 'input',
        param: 'height',
        label: '长度',
        disabled: false,
      },
    ],
  },
  {
    marktype: 'radio',
    param: 'showLegend',
    label: '显示图例',
    eventConfig: {
      modify: [
        {
          triggerValue: ['0'],
          modifyField: 'teamleaderTel',
          newFormItemConfig: {
            disabled: true,
          },
        },
      ],
    },
    options: [
      {
        value: '1',
        label: '是',
      },
      {
        value: '0',
        label: '否',
      },
    ],
  },
  {
    marktype: 'tabContainer', 
    param: 'style',
    label: '图表样式',
    items: [
      {
        marktype: 'columnContainer',
        tabTitle: '字体',
        param: 'font',
        columnCol: { span: 24, offset: 0 },
        items: [
          {
            marktype: 'input',
            param: 'fontsize',
            label: '大小',
            initialValue: 14,
            disabled: false,
          },
          {
            marktype: 'color',
            param: 'color',
            label: '颜色',
            initialValue: 'red',
            disabled: false,
          },
        ],
      },
      {
        marktype: 'columnContainer',
        tabTitle: '标线',
        param: 'line',
        columnCol: { span: 24, offset: 0 },
        type: '',
        items: [
          {
            marktype: 'inputNumber',
            param: 'lineWidth',
            initialValue: 1,
            label: '宽度',
          },
          {
            marktype: 'inputNumber',
            param: 'lineHeight',
            label: '长度',
          },
          {
            marktype: 'color',
            param: 'lineColor',
            initialValue: '#ffffff',
            label: '颜色',
          },
        ],
      },
      {
        marktype: 'columnContainer',
        tabTitle: '动效',
        param: 'animate',
        columnCol: { span: 24, offset: 0 },
        items: [
          {
            marktype: 'switch',
            param: 'showAnimate',
            label: '显示动画',
          },
          {
            marktype: 'switch',
            param: 'showTooltip',
            label: '信息框',
          },
          {
            marktype: 'inputNumber',
            param: 'animateTime',
            label: '动画时长',
          },
        ],
      },
    ],
  },
  {
    marktype: 'rowContainer',
    param: 'animateTypes',
    labelCol: { span: 6 },
    label: '图表动画',
    column: 2,
    items: [
      {
        marktype: 'columnContainer',
        param: 'out',
        label: '外环  ',
        items: [
          {
            marktype: 'columnContainer',
            param: 'basic',
            items: [
              {
                marktype: 'listContainer',
                param: 'basicList',
                items: [
                  {
                    marktype: 'input',
                    param: 'basicTime',
                    placeholder: '时间',
                  },
                  {
                    marktype: 'input',
                    placeholder: '名称',
                    param: 'basicName',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        marktype: 'columnContainer',
        param: 'inside',
        label: '内环',
        items: [
          {
            marktype: 'columnContainer',
            param: 'far',
            items: [
              {
                marktype: 'listContainer',
                param: 'farList',
                items: [
                  {
                    marktype: 'input',
                    placeholder: '名称',
                    param: 'farName',
                  },
                  {
                    marktype: 'input',
                    placeholder: '时间',
                    param: 'farTime',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    marktype: 'tabContainer',
    param: 'upjo;d',
    label: '维护人员',
    items: [
      {
        marktype: 'columnContainer',
        tabTitle: '总部',
        param: 'header',
        columnCol: { span: 24, offset: 0 },
        items: [
          {
            marktype: 'rowContainer',
            param: 'teamleader',
            column: 3,
            label: '组长',
            items: [
              {
                marktype: 'input',
                param: 'teamleaderName',
                label: '姓名',
                initialValue: 'xxx',
                disabled: false,
              },
              {
                marktype: 'input',
                param: 'teamleaderTel',
                label: '电话',
                initialValue: '139695XXXXX',
                disabled: false,
              },
              {
                marktype: 'switch',
                param: 'teamWatch',
                label: '监控',
                initialValue: true,
                disabled: false,
              },
            ],
          },
          {
            marktype: 'listContainer',
            param: 'item',
            label: '组员',
            items: [
              {
                marktype: 'input',
                param: 'itemName',
                label: '姓名',
                placeholder: '姓名',
              },
              {
                marktype: 'input',
                placeholder: '电话',
                label: '电话',
                param: 'itemTel',
              },
            ],
          },
        ],
      },
      {
        marktype: 'columnContainer',
        tabTitle: '华东',
        param: 'east',
        columnCol: { span: 24, offset: 0 },
        type: '',
        items: [
        ],
      },
      {
        marktype: 'input',
        tabTitle: '华南',
        param: 'south',
      },
      {
        marktype: 'columnContainer',
        tabTitle: '华西',
        param: 'west',
        columnCol: { span: 24, offset: 0 },
        items: [
        ],
      },
      {
        marktype: 'columnContainer',
        tabTitle: '华北',
        param: 'north',
        columnCol: { span: 24, offset: 0 },
        items: [
        ],
      },
    ],
  },
],
```
<center>更多信息联系<center>
<img src="https://s1.ax1x.com/2023/05/13/p96J8XV.jpg" width="100" />





