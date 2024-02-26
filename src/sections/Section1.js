import image1 from '../images/1.png';
import logo from '../images/logo.png';
import image2 from '../images/2.png';
import '../css/Section1.css'
import React from 'react'

const Section1 = () => {
  return (
    <div className='section1'>
        <div id='image'>
            <img width="100%" src={image1} alt="" />
        </div>
        <div id='content'>
            <div id='logo'>
                <img width="300px" src={logo} alt="" />
            </div>
            <div>
                <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                <ul>
                    <li><p>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p></li>
                    <li><p>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p></li>
                </ul>
                <br />
                <img width="100%" src={image2} alt="" />
                <br />
                <p>Government of India has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </div>
    </div>
  )
}

export default Section1