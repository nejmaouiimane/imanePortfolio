
import { useContext } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/contextProvider';
import mypic from '../../../assets/img/smile.jpg'
import comingSoon from '../../../assets/img/COMINGSOON.png'
import Card from 'react-bootstrap/Card';
import { FaBootstrap, FaCss3, FaHtml5, FaJsSquare, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import React from 'react';
import { motion } from 'framer-motion';

// import background from '../../../assets/img/background.jpg';
// import blackbg from '../../../assets/img/blackbg.png'
// import ListGroup from 'react-bootstrap/ListGroup';

export const FirstSection = () => {
    const textVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
    };
    const textStyle = {
        fontFamily: 'Playfair Display, serif',
        fontSize: '16px',
        fontWeight: '400',
        color: '#333', // Adjust the color as needed
    };



    return (
        <>
            {/* herosection */}
            <section id='home'>
                <div ferosc style={textStyle} className='bg-black h-[80vh] flex flex-col justify-center align-items-center text-white lg:p-0 px-6 '>
                    <motion.div initial="hidden" animate="visible" variants={textVariants}>
                        <h1 className='lg:text-6xl text-3xl'> Hello And Welcome To My Portfolio </h1>
                        <br />
                        <h1 className='lg:text-6xl text-3xl'>I'M <span className='text-amber-300'> NEJMAOUI IMANE ;</span></h1>
                        <br />
                        <h1 className='lg:text-6xl text-3xl'>Front-end Web Developer .</h1>
                    </motion.div>
                </div>
            </section>
            {/* about me */}
            <section id='about'>
                <div style={textStyle} className='bg-black h-fit'>
                    <motion.div initial="hidden" animate="visible" variants={textVariants}>
                        <h1 style={{ textDecoration: ' underline' }} className='lg:text-6xl text-4xl text-amber-300 text-center'>ABOUT ME  </h1>
                        <div className='d-flex lg:flex-row flex-col p-10 '>
                            <img className='lg:w-[25%] rounded-3xl' src={mypic} alt="" srcset="" />
                            <div className='lg:p-16 py-10 text-slate-200'>
                                <h1 className='lg:text-4xl text-2xl'>Hey there! I'm a front-end developer who's  blending creativity. </h1>
                                <h1 className='lg:text-4xl text-2xl'>I love turning ideas into cool, user-friendly websites. </h1>
                                <h1 className='lg:text-4xl text-2xl'>From sleek layouts to making things work seamlessly.</h1>
                                <h1 className='lg:text-4xl text-2xl'>Let's create some awesome digital experiences together! </h1>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </section >
            {/* skills */}
            < section id='skills' >
                <div style={textStyle} className='bg-black lg:h-[100vh] h-[210vh] w-[100%] flex flex-col justify-center align-items-center ' >
                    <motion.div initial="hidden" animate="visible" variants={textVariants}>

                        <h1 style={{ textDecoration: ' underline' }} className=' text-6xl text-amber-300  '>MY SKILLS</h1>
                        <div className='flex lg:flex-row flex-wrap gap-4 w-[50vw] py-20'>

                            <div className='skill rounded-full lg:py-10 py-5 lg:px-10 px-5  text-yellow-300 border-lime-200 border-2 lg:text-5xl text-2xl  flex flex-row align-items-center gap-3'>
                                <FaHtml5 />
                                <h3 className='text-white'>HTML</h3>
                            </div>
                            <div className='skill rounded-full lg:py-10 py-5 lg:px-10 px-5 text-yellow-300 border-lime-200 border-2  lg:text-5xl text-2xl  flex flex-row align-items-center gap-3'>
                                <FaCss3 />
                                <h3 className='text-white'>CSS</h3>
                            </div>
                            <div className='skill rounded-full lg:py-10 py-5 lg:px-10 px-5 text-yellow-300 border-lime-200 border-2  lg:text-5xl text-2xl  flex flex-row align-items-center gap-3'>
                                <FaJsSquare />
                                <h3 className='text-white'>JavaScript</h3>
                            </div>
                            <div className='skill rounded-full lg:py-10 py-5 lg:px-10 px-5 text-yellow-300 border-lime-200 border-2  lg:text-5xl text-2xl  flex flex-row align-items-center gap-3'>
                                <FaBootstrap />
                                <h3 className='text-white'>Bootstrap</h3>
                            </div>
                            <div className='skill rounded-full lg:py-10 py-5 lg:px-10 px-5  text-yellow-300 border-lime-200 border-2  lg:text-5xl text-2xl  flex flex-row align-items-center gap-3'>
                                <FaReact />
                                <h3 className='text-white'>React js</h3>
                            </div>
                            <div className='skill rounded-full lg:py-10 py-5 lg:px-10 px-5 text-yellow-300 border-lime-200 border-2  lg:text-5xl text-2xl  flex flex-row align-items-center gap-3'>
                                <FaLaravel />
                                <h3 className='text-white'>Laravel</h3>
                            </div>
                            <div className='skill rounded-full lg:py-10 py-5 lg:px-10 px-5 text-yellow-300 border-lime-200 border-2  lg:text-5xl text-2xl  flex flex-row align-items-center gap-3'>
                                <FaPhp />
                                <h3 className='text-white'>PhP</h3>
                            </div>
                        </div>
                    </motion.div>

                </div >

            </section >
            {/* projects */}
            <section id='projects' >
                    <div style={textStyle} className='  bg-black  h-fit flex lg:flex-row flex-col w-[100%]  justify-between lg:py-16  px-10 gap-4 lg:px-24'>

                    <h1 style={{ textDecoration: ' underline' }} className=' text-6xl text-amber-300  '>PROJECTS</h1>

                        <Card style={{ width: '20rem', height: '30rem' }}>
                            <Card.Img variant="top" className='h-64' src={comingSoon} />
                            <Card.Body>
                                <Card.Title>PROJECT 1</Card.Title>
                                <Card.Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores labore velit consectetur, cumque rerum doloribus?
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">View Project</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '30rem' }}>
                            <Card.Img variant="top" className='h-64' src={comingSoon} />
                            <Card.Body>
                                <Card.Title>PROJECT 2</Card.Title>
                                <Card.Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores labore velit consectetur, cumque rerum doloribus?
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">View Project</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '30rem' }}>
                            <Card.Img variant="top" className='h-64' src={comingSoon} />
                            <Card.Body>
                                <Card.Title>PROJECT 3</Card.Title>
                                <Card.Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores labore velit consectetur, cumque rerum doloribus?
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">View Project</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>

            </section >
            {/* contactSection */}
            <section id='contact' >

                <div style={textStyle} className='flex flex-col items-center bg-black lg:h-[85vh] h-[100vh] justify-between '>
                <motion.div initial="hidden" animate="visible" variants={textVariants}>

                    <h1 style={{ textDecoration: ' underline' }} className='text-6xl text-amber-300'>Contact Me </h1>
                    <h4 className='text-white'>Let's work together !</h4>
                    <div className='flex flex-col' >
                        <label className='text-white' htmlFor="">Full name *</label>
                        <input className='rounded-3xl  h-[7vh] lg:w-[25vw] w-[70vw] px-3' placeholder='Enter your full name ...' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white' htmlFor="">Email *</label>
                        <input className='rounded-3xl h-[7vh] lg:w-[25vw] w-[70vw] px-3' placeholder='Enter your email ...' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white' htmlFor="">Message</label>
                        <textarea className='rounded-3xl lg:lg:w-[25vw] w-[70vw]  py-2 px-3' placeholder='Enter your message ...' name="" id="" cols="30" rows="10"></textarea>    </div>
                    <button className='bg-slate-300 lg:w-[10vw] w-[40vw] py-2 rounded-2xl'> SEND </button>
                    </motion.div>

                </div>
            </section >

        </>
    );

}
