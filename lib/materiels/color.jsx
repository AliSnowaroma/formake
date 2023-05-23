import React, { useState, useCallback, useEffect } from 'react'
import SketchPicker from 'react-color/es/Sketch'
import { Popover } from 'antd'
import './index.less'

export default function Color (props) {
  const [color, setColor] = useState('transparent')

  const { value, onChange, disabled } = props

  useEffect(() => {
    setColor(value)
  }, [])

  const handleColorChange = useCallback((colorPanel) => {
    const { r, g, b, a } = colorPanel.rgb || {}
    const formatColor = `rgba(${r},${g},${b},${a})`
    setColor(formatColor)
    onChange(formatColor)
  }, [])

  return (
    <div className="formake-color-component-box">
      <Popover
        content={
          () => <SketchPicker
            className="react-color-panel"
            color={color}
            onChangeComplete={handleColorChange}
          />
        }
        trigger="click"
        overlayClassName="react-color-panel-popover-wrap"
      >
        <div
          className={`color-view-box ${disabled ? 'color-view-box-disabled' : ''}`}
          style={{
            background: color,
          }}
          disabled={disabled}
        />
      </Popover>
    </div>
  )
}
