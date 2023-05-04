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
} from './materiels'
import { transformObjectToMap } from './utils'

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
]

const ComponentMap = transformObjectToMap(FormItemList, 'marktype', 'component')

export default ComponentMap
