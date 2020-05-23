import '../styles/main.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useEffect, useState } from 'react'

function MyApp(props) {
  return (
    <div className="site-wrapper">
      <Header />
      <props.Component {...props.pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp;