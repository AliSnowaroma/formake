import React, { Component } from 'react'
import { Form } from 'antd'
import { isEqual, isEmptyObject, filterObj, dc } from './utils'

import GenerateFormItems from './GenerateFormItems'

export default class GenerateForm extends Component {
  static defaultProps = {
    formData: [],
    wrapperCol: {
      span: 6,
    },
    labelCol: {
      span: 18,
    },
    formItemPropsList: [
      'colon',
      'extra',
      'getValueFromEvent',
      'getValueProps',
      'hasFeedback',
      'help',
      'hidden',
      'htmlFor',
      'initialValue',
      'label',
      'labelAlign',
      'labelCol',
      'messageVariables',
      'name',
      'normalize',
      'noStyle',
      'preserve',
      'required',
      'rules',
      'shouldUpdate',
      'tooltip',
      'triggervalidateFirst',
      'validateStatus',
      'validateTrigger',
      'valuePropName',
      'wrapperCol',
    ],
  }

  constructor (props) {
    super(props)
    this.removeListeners = []
    this.onValuesChange = this.onValuesChange.bind(this)
    this.updateFormData = this.updateFormData.bind(this)
    this.addListener = this.addListener.bind(this)
    this.addListener()
  }

  state = {
    formError: null,
    originFormData: [],
    activeFormData: [],
  }

  static getDerivedStateFromProps (props, state) {
    const { formData } = props
    const { originFormData } = state

    if (isEqual(originFormData, formData)) {
      return null
    }

    return {
      originFormData: formData,
      activeFormData: formData,
    }
  }

  addListener () {
    const { form } = this.props
    if (form && form.isWatchForm) {
      const eventCenter = form.formInstanceEventCenter
      this.removeListeners.push(eventCenter.subscribe(this.updateFormData))
    }
  }

  componentDidMount () {
    const { form } = this.props
    if (form && form.isWatchForm) {
      const store = form.store
      store.set('activeFormConfig', this.state.activeFormData)
    }
  }

  componentDidUpdate () {
    const { form } = this.props
    if (form && form.isWatchForm) {
      const store = form.store
      store.set('activeFormConfig', this.state.activeFormData)
    }
  }

  componentWillUnmount () {
    this.removeListeners.forEach(remove => remove())
  }

  componentDidCatch (err) {
    this.setState({
      formError: err,
    })
  }

  updateFormData (values) {
    const { useEvent = false, form } = this.props
    if (!useEvent) {
      return
    }

    // 找到存在eventConfig的值
    const changeParams = Object.keys(values)
    const { originFormData } = this.state
    let activeFormData = dc(originFormData)
    const eventMap = {}

    changeParams.forEach((param) => {
      const formItemConfig = getDeepFormItemConfig(originFormData, param) || {}
      const eventConfig = formItemConfig.eventConfig
      if (eventConfig) {
        eventMap[param] = eventConfig
      }
    })

    if (isEmptyObject(eventMap)) {
      return
    }

    // 执行eventMap每个元素的filter, modify

    for (const [field, etg] of Object.entries(eventMap)) {
      const value = values[field]
      const { filter, modify } = etg
      // 执行filter
      if (filter) {
        const { hideFields = [] } = filter.find(item => item.triggerValue.includes(value)) || {} // 找到当前规则
        activeFormData = filterFields(activeFormData, hideFields) // 在指定的表单项中，显示规则中包含的表单项
      }

      // 执行modify
      if (modify) {
        const actions = modify.filter(item => item.triggerValue.includes(value)) || [] // 找到当前规则
        actions.forEach((item) => {
          modifyFields(activeFormData, item)
        })
      }
    }

    this.setState({ activeFormData: activeFormData })

    function getDeepFormItemConfig (originFormData, param) {
      for (const item of originFormData) {
        if (item.param === param) {
          if (item.marktype.indexOf('Container') > -1 && item.marktype !== 'listContainer') {
            return null
          }

          return item
        }

        if (item.items && item.marktype !== 'listContainer') { // listContainer不进行遍历
          const formConfig = getDeepFormItemConfig(item.items, param)
          if (formConfig !== undefined) {
            return formConfig
          }
        }

      }
    }

    function filterFields (activeFormData, hideFields, newFromData = []) {
      for (let i = 0; i < activeFormData.length; i++) {

        if (!hideFields.includes(activeFormData[i].param)) {
          newFromData.push(activeFormData[i])
        } else {
          if (activeFormData[i].items && activeFormData[i].items.length > 0) {
            newFromData[i].items = filterFields(activeFormData[i].items, hideFields)
          }
        }
      }

      return newFromData
    }

    function modifyFields (activeFormData, newItem) {

      for (let i = 0; i < activeFormData.length; i++) {

        if (newItem.modifyField === activeFormData[i].param && activeFormData[i].marktype.indexOf('Container') === -1) {
          // 校验规则更新，选项更新，是否禁用更新
          if (newItem.newFormItemConfig) {
            activeFormData[i] = {
              ...activeFormData[i],
              ...newItem.newFormItemConfig,
            }
          }

          // 值更新
          if (newItem.newValue) {
            form.setFieldValue(newItem.modifyField, newItem.newValue)
          }

          return
        }

        if (activeFormData[i].items && activeFormData[i].items.length > 0) {
          modifyFields(activeFormData[i].items, newItem)
        }

      }
    }

  }

  onValuesChange (values, allvalues) {
    this.updateFormData(values)
    const { onValuesChange } = this.props
    onValuesChange && onValuesChange(values, allvalues)
  }

  render () {
    const { isEditor, children, activeId, ...rest } = this.props
    const { formError, activeFormData } = this.state

    const formProps = filterObj(rest, ['formData', 'useEvent', 'formItemPropsList'])

    return (
      <>
        {
          !formError ? <div className={`${this.props.className} formake-dynamic-form`}>
            <Form
              ref={this.props.formInstance}
              {...formProps}
              labelCol={this.props.labelCol}
              wrapperCol={this.props.wrapperCol}
              initialValues={this.props.initialValues || {}}
              onValuesChange={this.onValuesChange}

            >
              <>
                <GenerateFormItems
                  isEditor={isEditor}
                  formData={activeFormData}
                  formItemPropsList={this.props.formItemPropsList}
                  activeId={activeId}
                />
                {children}
              </>
            </Form>
            {this.props.footer}
          </div>
            : <div style={{ color: 'red' }} className={`${this.props.className} formake-dynamic-form`}>
              <h4>表单配置错误</h4>
            </div>
        }

      </>
    )
  }
}
