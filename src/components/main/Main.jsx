import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import './main.css'
import orders from '../../assets/orders.svg'
import profit from '../../assets/profit.svg'
import Barchart from '../barchart/Barchart'
import { SalesData } from '../../Data/salesData'
import { VisitorData } from '../../Data/visitorsData'
import search from '../../assets/search.svg'
import notif from '../../assets/notifications.svg'
import profile from '../../assets/profile.png'
import next from '../../assets/next.svg'
import tshirt from '../../assets/tshirt.svg'
import jeans from '../../assets/jeans.svg'
import cap from '../../assets/cap.svg'
import Linechart from '../linechart/Linechart'
import { motion } from 'framer-motion'

const Main = () => {
    const [ userData, setUserData ] = useState({
        labels: SalesData.map((data) => data.week),
        datasets: [{
            data: SalesData.map((data) => data.gained),
            backgroundColor: [
                '#D33978',
                '#39D3BE'
            ],
            borderRadius: "5"
        }],
            options: {
      plugins: {
        legend: {
          display: false
        }
      }
    } 
    })


    const [ visitorData, setVisitorData ] = useState({
        labels: VisitorData.map((data) => data.day),
        datasets: [{
            data: VisitorData.map((data) => data.gained),
            backgroundColor: [
                '#D33978'
            ]
        }],
            options: {
      plugins: {
        legend: {
          display: false
        }
      }
    } 
    })

  return (
    <div className='main'>
        <Sidebar />
        <div className="main-container">
            <div className="main-content">
                <motion.h1
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type:'spring', stiffness: 100 }}
                >Welcome, <span>Russel</span></motion.h1>
                <div className="content-orders">
                    <motion.div className="orders"
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'tween', duration: 1 }}
                    >
                        <h1><img src={orders} />23 789 <span>+20</span></h1>
                        <p>Orders</p>
                    </motion.div>
                    <motion.div className="profit"
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'tween', duration: 1 }}
                    >
                        <h1><img src={profit} />$ 12 890,89 <span>+$ 840,00</span></h1>
                        <p>Profit</p>
                    </motion.div>
                </div>
                <div className="content-sales">
                    <h1>Sales Statistics</h1>
                    <div className="barchart">
                        <Barchart chartData={userData} />
                    </div>
                </div>
            </div>
        </div>
        <div className="right-side">
            <motion.div className="content-profile"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'tween', duration: 1 }}            
            >
                    <div className="profile-container">
                        <div className="search">
                            <input type={'text'} placeholder='Search for products...' ></input>
                            <img src={search} alt='' />
                        </div>
                        <motion.div className="notif"
                            whileHover={{ scale : 1.1, boxShadow: '0px 0px 2px gray' }}
                        >
                            <img src={notif} alt='' />
                        </motion.div>
                        <div className="profile">
                        <img src={profile} alt='' />
                        </div>
                    </div>
            </motion.div>
            <motion.div className="products"
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ type: 'tween', duration: 1 }}
            >
                <div className="products-text">
                    <h1>Top selling products</h1>
                    <p>See all <img src={next} alt='' /></p>
                </div>
                <motion.div className="tshirt"
                    whileHover={{ y: -10 }}
                >
                    <p>1</p>
                    <img src={tshirt} alt='' />
                    <div className="tshirt-text">
                        <p>Tshirt Levis</p>
                        <span>$ 49,99</span>
                    </div>
                </motion.div>

                <motion.div className="jeans"
                    whileHover={{ y: -10 }}
                >
                    <p>2</p>
                    <img src={jeans} alt='' />
                    <div className="jeans-text">
                        <p>Long Jeans Jacket</p>
                        <span>$ 129,99</span>
                    </div>
                </motion.div>

                <motion.div className="cap"
                    whileHover={{ y: -10 }}
                >
                    <p>3</p>
                    <img src={cap} alt='' />
                    <div className="cap-text">
                        <p>Fullcap</p>
                        <span>$ 20,99</span>
                    </div>
                </motion.div>

            </motion.div>
            <motion.div className="line-chart"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: 'tween', duration: 1 }}        
            >
                <div className="line-chart-text">
                    <h1>Unique visitors</h1>
                </div>
                <div className="chart">
                    <Linechart chartData={visitorData} />
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Main