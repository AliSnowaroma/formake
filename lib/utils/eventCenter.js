class EventCenter {
  constructor () {
    this.listeners = []
  }

  subscribe (listener) {
    if (typeof listener === 'function') {
      this.listeners.push(listener)
    }

    return function () {
      const index = this.listeners.findIndex(fn => fn === listener)
      this.listeners.splice(index, 1)
    }.bind(this)
  }

  emit (...params) {
    this.listeners.forEach(fn => fn(...params))
  }

}

export default EventCenter
