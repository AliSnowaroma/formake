import {
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  RangePicker,
  DatePicker,
  Switch,
  Upload,
  Rate,
  TimePicker,
  Progress,
  Slide,
  InputNumber,
  Color,
} from './materiels'
import {
  RowContainer,
  ColContainer,
  TabContainer,
  ListContainer,
} from './containers'
import { transformObjectToMap } from './utils'
import { catchError } from './CatchError'

const FormItemList = [
  {
    marktype: 'input',
    component: Input,
  },
  {
    marktype: 'select',
    component: Select,
  },
  {
    marktype: 'checkbox',
    component: Checkbox,
  },
  {
    marktype: 'textarea',
    component: Textarea,
  },
  {
    marktype: 'radio',
    component: Radio,
  },
  {
    marktype: 'upload',
    component: Upload,
  },
  {
    marktype: 'rate',
    component: Rate,
  },
  {
    marktype: 'switch',
    component: Switch,
  },
  {
    marktype: 'progress',
    component: Progress,
  },
  {
    marktype: 'slide',
    component: Slide,
  },
  {
    marktype: 'datepicker',
    component: DatePicker,
  },
  {
    marktype: 'timepicker',
    component: TimePicker,
  },
  {
    marktype: 'rangepicker',
    component: RangePicker,
  },
  {
    marktype: 'inputNumber',
    component: InputNumber,
  },
  {
    marktype: 'color',
    component: Color,
  },
]

const containerFormItemList = [
  {
    marktype: 'rowContainer',
    component: RowContainer,
  },
  {
    marktype: 'columnContainer',
    component: ColContainer,
  },
  {
    marktype: 'tabContainer',
    component: TabContainer,
  },
  {
    marktype: 'listContainer',
    component: ListContainer,
  },
]

const allFormItemList = FormItemList.concat(containerFormItemList)

const ComponentMap = transformObjectToMap(allFormItemList, 'marktype', 'component')

export const containerMarkTypes = containerFormItemList.map(item => item.marktype)
export const realMarkTypes = FormItemList.map(item => item.marktype)
export const allMarkTypes = allFormItemList.map(item => item.marktype)

export default ComponentMap
