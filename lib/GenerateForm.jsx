import React, { Component } from 'react'
import { Form } from 'antd'
import { isEqual, isEmptyObject, filterObj } from './utils'

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

  }

  componentDidUpdate () {

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
    let activeFormData = [
      ...originFormData,
    ]
    const eventMap = {}
    changeParams.forEach((param) => {
      const formItemConfig = originFormData.find(item => item.param === param) || {}
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
        const { fieldScope, rules } = filter
        const { showFields = [] } = rules.find(item => item.triggerValue.includes(value)) || {}
        activeFormData = filterArr(activeFormData, filterArr(fieldScope, showFields))
      }

      // 执行modify
      if (modify) {
        modify.forEach((item) => {

          // 校验规则，选项，是否禁用更新
          if (item.newFormItemData) {
            activeFormData.forEach((formItem, index) => {
              if (formItem.param === item.field) {
                activeFormData[index] = {
                  ...formItem,
                  ...item.newFormItemData,
                }
              }
            })
          }

          // 值更新
          if (item.newValue !== undefined) {
            item.field && form.setFieldValue(item.field, item.newValue)
          }
        })
      }
    }

    this.setState({ activeFormData: activeFormData })

    function filterArr (arr1, arr2) {
      return arr1.filter((item) => {
        if (typeof item === 'string') {
          return !arr2.includes(item)
        }

        return !arr2.includes(item.param)
      })
    }
  }

  onValuesChange (values, allvalues) {
    this.updateFormData(values)
    const { onValuesChange } = this.props
    onValuesChange && onValuesChange(values, allvalues)
  }

  render () {
    const { isEditor, children, ...rest } = this.props
    const { formError, activeFormData } = this.state

    const formProps = filterObj(rest, ['formData', 'useEvent'])

    return (
      <div>
        {
          !formError ? <div>
            <Form
              ref={this.props.formInstance}
              {...formProps}
              className={`${this.props.className} dynamic-form`}
              labelCol={this.props.labelCol}
              wrapperCol={this.props.wrapperCol}
              initialValues={this.props.initialValues || {}}
              onValuesChange={this.onValuesChange}

            >
              <>
                <GenerateFormItems
                  isEditor={isEditor}
                  formData={activeFormData}
                  column={this.props.column}
                />
                {children}
              </>
            </Form>
            {this.props.footer}
          </div>
            : <div>
              <h4>表单配置错误</h4>
            </div>
        }

      </div>
    )
  }
}
