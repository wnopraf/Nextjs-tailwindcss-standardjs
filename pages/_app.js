import React from 'react'
import App from 'next/app'
import '../css/index.css'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
