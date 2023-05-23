import React, { Component } from 'react'
import { isEqual } from './utils'

export function catchError (Com) {
  class NewCom extends Component {
    constructor (props) {
      super(props)
      this.state = {
        error: null,
        preProps: {},
      }
    }

    static getDerivedStateFromProps (props, state) {
      const { preProps } = state
      if (!isEqual(props, preProps)) {
        return {
          preProps: props,
          error: null,
        }
      }

      return null
    }

    componentDidCatch (error) {
      console.log(error)
      this.setState({
        error: error,
      })
    }

    render () {
      const { error } = this.state

      return !error ? <Com {...this.props} /> : <div style={{ color: 'red' }}>
        表单项配置错误
      </div>
    }
  }

  return NewCom
}
