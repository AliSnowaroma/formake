import React, { useState, useEffect } from 'react'
import { Col, InputNumber, Row, Slider } from 'antd'

function DecimalStep (props) {
  const { value, onChange: triggerChange, step, max = 1, min = 0, defaultValue } = props
  const [inputValue, setInputValue] = useState(0)
  const onChange = (value) => {
    if (isNaN(value)) {
      return
    }
    setInputValue(value)
    triggerChange(value)
  }

  useEffect(() => {
    if (!value) {
      setInputValue(defaultValue)
    } else {
      setInputValue(value)
    }
  }, [])

  return (
    <Row>
      <Col span={12}>
        <Slider
          min={min}
          max={max}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={step}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={min}
          max={max}
          style={{
            margin: '0 16px',
          }}
          step={step}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  )
}

export default DecimalStep
