import React from 'react'
import './sidebar.css'
import logo from '../../assets/logo.png'
import dashboard from '../../assets/dashboard.svg'
import orders from '../../assets/orders.svg'
import products from '../../assets/products.svg'
import marketing from '../../assets/marketing.svg'
import rates from '../../assets/rates.svg'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-logo">
            <img src={logo} alt='' />
        </div>
        <div className="sidebar-links">
            <a href='#'><img src={dashboard} />Dashboard</a>
            <a href='#'><img src={orders} />Orders</a>
            <a href='#'><img src={products} />Products</a>
            <a href='#'><img src={marketing} />Marketing</a>
            <a href='#'><img src={rates} />Rates</a>

        </div>
    </div>
  )
}

export default Sidebar