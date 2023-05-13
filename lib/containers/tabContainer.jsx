import React, { useState, useCallback, useEffect } from 'react'
import { Tabs } from 'antd'
import GenerateFormItem from '../GenerateFormItem'

export default function TabContainer (props) {
  const { items, isEditor, formItemPropsList, className, listName } = props
  const [activeTab, setActiveTab] = useState('0')
  const [tabItems, setTabItems] = useState([])

  const onTabChange = useCallback((type) => {
    setActiveTab(type)
  }, [])

  useEffect(() => {
    const curTabItems = items.map((item, index) => {
      return {
        key: `${index}`,
        label: item.tabTitle,
      }
    })

    setTabItems([...curTabItems])
  }, [items])

  return (
    <div className={`form-tab-row-container ${className}`}>
      <Tabs
        activeKey={activeTab}
        items={tabItems}
        onChange={onTabChange}
        type="card"
        className="formake-antd-tab-bar"
        size="middle"
      />
      {
        items.map((formItemConfig, index) => {
          const { tabTitle: _tabTitle, ...rest } = formItemConfig
          const hidden = activeTab !== `${index}`

          return (
            <GenerateFormItem
              key={index}
              isEditor={isEditor}
              formItemConfig={rest}
              hidden={hidden}
              formItemPropsList={formItemPropsList}
              listName={listName}
            />
          )
        })
      }
    </div>
  )
}
