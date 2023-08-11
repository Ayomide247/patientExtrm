import React from 'react';
import Navbar from '../components/Navbar';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BsArrowRight, BsBook, BsBookFill, BsClock, BsCommand, BsEnvelope, BsEnvelopeAtFill, BsFillTelephoneXFill, BsGear, BsGlobe, BsLightbulb, BsMailbox, BsPersonFillGear, BsPhone, BsPhoneFill, BsPhoneLandscape } from "react-icons/bs"
import care1 from "../assets/image/care1.jpg";
import care2 from "../assets/image/care2.jpg";
import care3 from "../assets/image/care3.jpg";
import care4 from "../assets/image/care4.jpg";
import care5 from "../assets/image/care5.jpg";
import care6 from "../assets/image/care6.jpg";
import nurse1 from "../assets/image/nurse1.png";
import nurse2 from "../assets/image/nurse2.png";
import nurse3 from "../assets/image/nurse3.png";
import nurse4 from "../assets/image/nurse4.jpg";
import nurse5 from "../assets/image/nurse5.jpg";
import hero1 from "../assets/image/hero1.jpg";
import skills from "../assets/image/skills.jpg";
import service from "../assets/image/services.png";
import healthcare from "../assets/image/healtcare.jpg";
import { Cards } from '../utilities/data';
import OurTeamCards from '../components/OurTeamCards';
import { FaBusinessTime, FaSpinner } from 'react-icons/fa';


const Home = () => {
    const containerStyle = {
        backgroundImage: `url(${skills})`,

    };
    const heroStyle = {
        backgroundImage: `url(${hero1})`,

    };
    const landingStyle = {
        backgroundImage: `url(${healthcare})`,

    };
    return (
        <div className="p-0 m-0 overflow-x-hidden text-slate-700">
            <Navbar />
            <section id='Home' className=' mt-20 w-full  bg-fixed  rounded-xl bg-no-repeat bg-cover'
                style={landingStyle}
            >
                <div className='grid lg:flex lg:flex-col-2 lg:justify-between md:justify-center  bg-[#1B2732]/70 px-5 lg:px-[10rem] py-16 lg:py-32'>
                    <div className='grid justify-start text-start w-full lg:w-[50%]'>
                        <h4 className='text-green-500 font-bold text-md md:text-lg'>WELCOME TO OUR MEDICAL CARE CENTER</h4>
                        <h1 className='text-white font-bold text-[40px] text-center md:text-start md:text-[60px]'>Take Care of Your Health</h1>

                        <div className='my-16 text-center md:text-start md:my-20'>

                            <Splide
                                options={{
                                    rewind: true,
                                    width: 700,
                                    autoplay: true,
                                    // gap   : '1rem',
                                    arrows: false,
                                }}
                                hasTrack={false}
                                // aria-label='...'
                                className="slider"
                            >
                                <SplideTrack>
                                    <SplideSlide>
                                        <div className="slider-1">

                                            <p className='text-white font-medium text-[20px]'><span className='text-[#FF6000] font-medium text-[20px]'>Patient 10303 |</span> Just set a compliant to Critical while leaving Pharmacy</p>

                                        </div>
                                    </SplideSlide>

                                    <SplideSlide>
                                        <div className="slider-1">
                                            <p className='text-white font-medium text-[20px]'><span className='text-[#FF6000] font-medium text-[23px]'>Patient 10303 |</span> Just set a compliant to Critical while leaving Pharmarcy</p>
                                        </div>
                                    </SplideSlide>

                                    <SplideSlide>
                                        <div className="slider-1">
                                            <p className='text-white font-medium text-[20px]'><span className='text-[#FF6000] font-medium text-[23px]'>Patient 10303 |</span> Just set a compliant to Critical while leaving Pharmarcy</p>
                                        </div>
                                    </SplideSlide>
                                </SplideTrack>
                            </Splide>



                        </div>
                    </div>

                    <div className='  w-full lg:w-[40%]  flex justify-center my-auto transition transform ease-in-out duration-700  '>

                        <Splide
                            options={{
                                rewind: true,
                                width: 500,
                                autoplay: true,
                                // gap   : '1rem',
                                arrows: false,
                            }}
                            hasTrack={false}
                            // aria-label='...'
                            className="slider "
                        >
                            <SplideTrack>
                                <SplideSlide>
                                    <div className="slider-1  ">
                                        <img className='w-[500px] h-[300px] rounded-xl  ' src={care1}></img>
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className="slider-1">
                                        <img className='w-[500px] h-[300px] rounded-xl ' src={care2}></img>
                                    </div>
                                </SplideSlide>

                                <SplideSlide>
                                    <div className="slider-1">
                                        <img className='w-[500px] h-[300px] rounded-xl' src={care3}></img>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="slider-1">
                                        <img className='w-[500px] h-[300px] rounded-xl' src={care4}></img>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="slider-1">
                                        <img className='w-[500px] h-[300px] rounded-xl' src={care5}></img>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="slider-1">
                                        <img className='w-[500px] h-[300px] rounded-xl' src={care6}></img>
                                    </div>
                                </SplideSlide>
                            </SplideTrack>
                        </Splide>
                    </div>
                </div>
            </section>
            <section id='Why' className='w-full h-full text-center md:text-start bg-fixed  bg-no-repeat bg-cover bg-white  '
            >
                <div className='lg:flex  justify-between   py-16 px-5 lg:px-28 md:py-28 m-auto '>
                    <div className='lg:w-1/2 md:w-[80%] md:m-auto md:text-center lg:m-0 lg:text-start w-full py-5 md:py-0'>
                        <h1 className='font-bold text-[40px] mb-5 '>Why Choose Us</h1>
                        <p className='lg:w-[80%] font-medium '>Lorem Ipsum is simply dummy text of the printing and type setting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum excepturi omnis dolores nihil vel culpa. Consequuntur nam necessitatibus nulla, fuga natus itaque quo repellendus aliquid tempora officiis, amet autem ipsa?Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eaque quisquam! Maiores dolore rem veniam voluptas laboriosam atque tenetur odit cupiditate maxime provident dignissimos ducimus nemo, omnis reprehenderit velit cum.</p>


                    </div>
                    <div className='lg:w-1/2 md:w-[70%]  lg:grid lg:grid-cols-2 justify-between md:mx-auto lg:mx-0 gap-10'>
                        <div class="rounded-lg overflow-hidden shadow shadow-black bg-white w-[100%] hover:scale-105 transition transform duration-700 ease-in-out my-10 lg:my-0">
                            <img class="w-full h-48 object-cover" src={nurse1} alt="Card Image"></img>
                            <div class="px-6 py-4 text-center">
                                <div class="font-bold text-xl mb-2 py-2 text-orange-500">Strategy & Research</div>
                                <p class="text-gray-700 text-md">
                                    Quibusdam soluta porro consequuntur earum corrupti tempore dolorem sit.
                                </p>
                            </div>

                        </div>
                        <div class="rounded-lg overflow-hidden shadow shadow-black bg-white w-[100%] hover:scale-105 transition transform duration-700 ease-in-out my-10 lg:my-0">
                            <img class="w-full h-48 object-cover" src={nurse2} alt="Card Image"></img>
                            <div class="px-6 py-4 text-center">
                                <div class="font-bold text-xl mb-2 py-2 text-orange-500">Design & Developement</div>
                                <p class="text-gray-700 text-md">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>

                        </div>
                        <div class="rounded-lg overflow-hidden shadow shadow-black bg-white w-[100%] hover:scale-105 transition transform duration-700 ease-in-out my-10 lg:my-0">
                            <img class="w-full h-48 object-cover" src={nurse3} alt="Card Image"></img>
                            <div class="px-6 py-4 text-center">
                                <div class="font-bold text-xl mb-2 py-2 text-orange-500">Management & Marketing</div>
                                <p class="text-gray-700 text-md">
                                    Quibusdam soluta porro consequuntur earum corrupti tempore dolorem sit.
                                </p>
                            </div>

                        </div>
                        <div class="rounded-lg overflow-hidden shadow shadow-black bg-white w-[100%] hover:scale-105 transition transform duration-700 ease-in-out my-10 lg:my-0">
                            <img class="w-full h-48 object-cover" src={nurse5} alt="Card Image"></img>
                            <div class="px-6 py-4 text-center">
                                <div class="font-bold text-xl mb-2 py-2 text-orange-500">Analysing & Checking</div>
                                <p class="text-gray-700 text-md">
                                    Quibusdam soluta porro consequuntur earum corrupti tempore dolorem sit.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>


            </section >
            <section id='About' className=' bg-green-50 bg-fixed  rounded-xl bg-no-repeat bg-cover'
                style={containerStyle}
            >

                <div className='bg-[#1B2732]/80 w-full lg:px-28 p-5 text-slate-100'>


                    <div className='md:grid grid-cols-2 gap-20 justify-between '>
                        <div className='my-10'>
                            <img className='rounded-lg shadow-black shadow-md lg:w-[100%]' src={care6}></img>
                        </div>
                        <div className='text-start lg:m-auto '>
                            <h1 className='font-bold text-[30px] lg:text-[50px] my-5'>About Us</h1>
                            <div>
                                <h4 className='font-bold text-[20px] my-5'>Who We Are</h4>
                                <p className='font-medium text-[16px] my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel aut animi quam ducimus consequatur voluptas delectus, sapiente, explicabo nam quasi! Corporis ipsum quae repellendus molestias a quaerat recusandae similique!                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius exercitationem suscipit ex quasi in iure dolorem cupiditate corrupti ducimus ipsa.</p>

                                <button className='flex px-5 py-3 border gap-3  border-[#FF6000] hover:bg-[#FF6000] font-semibold hover:text-white  transition transform duration-700 ease-in-out '>Read More <BsArrowRight className='m-auto ' /></button>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-10 justify-between'>
                        <div className='text-start lg:m-auto lg:w-[40%] '>
                            <h1 className='font-bold text-[30px] lg:text-[50px] my-5'>Our Skills</h1>
                            <div>
                                <p className='font-medium text-[16px] my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel aut animi quam ducimus consequatur voluptas delectus, sapiente, explicabo nam quasi! Corporis ipsum quae repellendus molestias a quaerat recusandae similique!</p>


                            </div >

                            <div className='my-20'>
                                <div className='my-5'>
                                    <p className='font-medium'>Clinical Process Management</p>
                                    <div className='flex my-1'>
                                        <p className='border-t-4 w-[79%] border-orange-500 '></p>
                                        <span className='bg-black text-sm px-1 text-white font-semibold '>95%</span>
                                        <p className='border-t-4 w-[1%] border-white '></p>
                                    </div>
                                </div>

                                <div className='my-5'>
                                    <p className='font-medium'>Technology</p>
                                    <div className='flex my-1'>
                                        <p className='border-t-4 w-[60%] border-orange-500 '></p>
                                        <span className='bg-black text-sm px-1 text-white font-semibold '>80%</span>
                                        <p className='border-t-4 w-[20%] border-white '></p>
                                    </div>
                                </div>

                                <div className='my-5'>
                                    <p className='font-medium'>Patient Experience</p>
                                    <div className='flex my-1'>
                                        <p className='border-t-4 w-[70%] border-orange-500 '></p>
                                        <span className='bg-black text-sm px-1 text-white font-semibold '>90%</span>
                                        <p className='border-t-4 w-[10%] border-white '></p>
                                    </div>
                                </div>

                                <div className='my-5'>
                                    <p className='font-medium'>Customer Management</p>
                                    <div className='flex my-1 '>
                                        <p className='border-t-4 w-[72%] border-orange-500'></p>
                                        <span className='bg-black text-sm px-1 text-white font-semibold '>92%</span>
                                        <p className='border-t-4 w-[8%] border-white '></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[50%] h-[600px] bg-fixed  rounded-xl bg-no-repeat bg-cover'
                            style={containerStyle}
                        >
                            <img></img>
                        </div>

                    </div>
                </div>


            </section>
            <section id='Services' className='md:py-16 lg:px-28 py-10 px-5 md:px-10'>
                <div className='text-center'>
                    <h1 className='text-[50px] font-medium '>Our Service</h1>
                    <p className='font-medium text-center md:px-28'>Lorem Ipsum is simply dummy text of the printing and type setting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries.</p>
                </div>

                <div className='grid lg:grid-cols-3 gap-20 md:my-28'>
                    <div>
                        <div className='text-center my-20 '>
                            <div className=''>
                                <BsGear className='text-[50px] m-auto text-orange-500' />
                            </div>

                            <h4 className='font-medium text-[20px] my-5'>Highly customizable</h4>
                            <p className='font-medium text-[16px] px-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel viverra odio, non pellentesque tortor.</p>
                        </div>

                        <div className='text-center my-20 '>
                            <div className=''>
                                <BsClock className='text-[50px] m-auto text-orange-500' />
                            </div>

                            <h4 className='font-medium text-[20px] my-5'>Optimised for speed</h4>
                            <p className='font-medium text-[16px] px-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel viverra odio, non pellentesque tortor.</p>
                        </div>
                    </div>
                    <div className='m-auto'>
                        <img src={nurse4} alt="" className='mx-auto px-10' />
                    </div>
                    <div>
                        <div className='text-center my-20 '>
                            <div className=''>
                                <BsLightbulb className='text-[50px] m-auto text-orange-500' />
                            </div>

                            <h4 className='font-medium text-[20px] my-5'>Features & plugins</h4>
                            <p className='font-medium text-[16px] px-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel viverra odio, non pellentesque tortor.</p>
                        </div>

                        <div className='text-center my-20 '>
                            <div className=''>
                                <BsCommand className='text-[50px] m-auto text-orange-500' />
                            </div>

                            <h4 className='font-medium text-[20px] my-5'>Optimised for speed</h4>
                            <p className='font-medium text-[16px] px-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel viverra odio, non pellentesque tortor.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='Team' className=' bg-fixed  rounded-xl bg-no-repeat bg-cover'
                style={heroStyle}
            >

                <div className='bg-black/50 md:py-16 md:px-28 py-10 px-5'>

                    <div className='text-center text-slate-300'>
                        <h1 className='text-[50px] font-medium '>Our Team</h1>
                        <p className='font-medium text-center md:px-32'>Lorem Ipsum is simply dummy text of the printing and type setting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries.</p>
                    </div>

                    <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-16 justify-center'>
                        {Cards.map((card) => (
                            <OurTeamCards
                                key={card.id}
                                data={card}
                            />
                        ))}
                    </div>
                </div>

            </section>
            <section id='Contact' className='md:py-16 lg:px-28 py-10 px-5'>
                <div className='text-center'>
                    <h1 className='text-[50px] font-medium '>Get In Touch</h1>
                    <p className='font-medium text-center md:px-28'>Lorem Ipsum is simply dummy text of the printing and type setting industry when an unknown printer took a galley of type and scrambled.</p>
                </div>

                <div className='grid md:grid-cols-2 gap-10 lg:px-28 my-10 font-medium text-[16px]'>
                    <div className='bg-gray-100 flex gap-10 items-center p-5 rounded-lg'>
                        <div className='bg-orange-500 p-5 rounded-full text-[20px] font-extrabold text-white shadow'>
                            <BsBookFill className='animate-pulse' />
                        </div>
                        <div>
                            <p className='font-bold'>Address:</p>
                            <p>2885 Walt Nuzum Farm Road,</p>
                            <p>Lagos</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 flex gap-10 items-center p-5 rounded-lg'>
                        <div className='bg-orange-500 p-5 rounded-full text-[20px] font-extrabold text-white shadow'>
                            <BsFillTelephoneXFill className='animate-pulse' />
                        </div>
                        <div>
                            <p className='font-bold'>Mobile:</p>
                            <p>+234,8067797474</p>
                            <p>+234,7058683929</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 flex gap-10 items-center p-5 rounded-lg'>
                        <div className='bg-orange-500 p-5 rounded-full text-[20px] font-extrabold text-white shadow'>
                            <BsEnvelopeAtFill className='animate-pulse' />
                        </div>
                        <div>
                            <p className='font-bold'>Email:</p>
                            <p>info@example.com
                            </p>
                            <p>support@example.com</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 flex gap-10 items-center p-5 rounded-lg'>
                        <div className='bg-orange-500 p-5 rounded-full text-[20px] font-extrabold text-white shadow'>
                            <FaSpinner className='animate-spin' />
                        </div>
                        <div>
                            <p className='font-bold'>Timing:</p>
                            <p>Mon-Fri - 9:00 AM to 5:00 PM</p>
                            <p>sat - 10:00 AM to 1:00 PM</p>
                        </div>
                    </div>
                </div>
                <form className='bg-gray-100 grid gap-10 items-center py-10 lg:mx-44 rounded-lg md:px-32 px-5 shadow'>

                    <input type="text" placeholder='Name*' className='w-full py-3 px-5  outline-none shadow' />
                    <input type="text" placeholder='Email*' className='w-full py-3 px-10 outline-none shadow' />
                    <input type="text" placeholder='Subject*' className='w-full py-3 px-10 outline-none shadow' />
                    <textarea type="text" placeholder='Message' className='w-full h-[200px] px-10 py-5  outline-none shadow'></textarea>

                    <button className='bg-orange-500 w-fit m-auto py-3 px-10 font-bold text-slate-50 hover:bg-inherit border border-orange-500 hover:text-slate-500 transition transform duration-700 ease-in-out'>Send Message</button>


                </form>
            </section>
        </div >
    )
}

export default Home