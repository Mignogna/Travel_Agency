import { useEffect } from 'react';
import './Footer.css';
import video2 from '../../Assets/video2.mp4';
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section className="footer" id='footer'>
            <div className="videoDiv">
                <video src={video2} autoPlay loop muted type='video/mp4'></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input type="text" placeholder='Enter your email address' />
                        <button className='btn flex' type='submit'>SEND<FiSend className='icon' /></button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="" className='logo flex'>
                                <MdOutlineTravelExplore className="icon" />Travel.
                            </a>
                        </div>

                        <div className="footerParagraph">
                            <p>For more than 12 years, we have been making dreams come true, taking you to the world&apos;s best destinations! Our team is always ready to help you plan the perfect trip, from start to finish. We offer customized itineraries for all tastes and budgets, with lodging options to fit your wallet.</p>
                        </div>
                        <div data-aos='flip-up' className="footerSocials">
                            <AiOutlineTwitter className='icon' />
                            <IoLogoYoutube className='icon' />
                            <BsInstagram className='icon' />
                            <FaTripadvisor className='icon' />
                        </div>
                    </div>
                    <div className="footerLinks">

                        {/*Group one*/}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Payment
                            </li>
                        </div>

                        {/*Group two*/}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Rentcars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />TripAdvisor
                            </li>
                        </div>

                        {/*Group three*/}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Indonesia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Oceania
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer