"use client";

import Image from 'next/image'
import { MdOutlineSentimentSatisfied, MdOutlineFileDownload } from "react-icons/md";
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const Hero = () => {

  return (
    <section id="home" className="h-[100vh] md:h-[90vh] lg:h-[90vh] xl:h-[90vh] bg-[#121212] bg-cover bg-center">
      <div className='container mx-auto w-[90%] xl:w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <div>
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
            className='text-[35px] md:text-[45px] text-white font-bold uppercase'
          >
            Hi, I am <span className='text-[#EFC40F]'>Pakwalan!</span></motion.h1>
          <motion.h1
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
            className='text-[30px] md:text-[45px] font-bold uppercase text-yellow-200'
          >
            Frontend Developer
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
            className='mt-[1.5rem] text-[18px] text-gray-400 leading-8'
          >
            Hi!... My name is Pakwalan Muenhong, nickname June, and I am 37 years old. I currently work as a frontend developer for the Phyathai-Paolo Hospital Group.
          </motion.p>
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <button className='flex items-center space-x-2 px-[2rem] py-[1rem] bg-[#EFC40F] hover:bg-yellow-200 transition-all duration-200 text-[16px] text-black font-bold uppercase rounded-full'>
              <a href='/pdf/June_Resume2024.pdf'>
                <p>Download Resume</p>
              </a>
              <MdOutlineFileDownload className='w-[1.6rem] h-[1.7rem] text-black' />
            </button>
            <button className='flex items-center space-x-2'>
              <MdOutlineSentimentSatisfied className='w-[4rem] h-[4rem] text-[#EFC40F] hover:text-yellow-200 transition-all duration-200' />
              <a href='/pdf/June_Portfolio2024.pdf'>
                <p className='text-[16px] font-semibold text-white uppercase'>View Portfolio</p>
              </a>
            </button>
          </div>
        </div>
        <div className='w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px] xl:w-[500px] xl:h-[500px] relative mx-auto lg:flex items-center justify-center mb-4'>
          <Image src='/assets/img/june-photo-01.jpg' alt='June' layout='fill' className='object-cover rounded-full' />
        </div>
      </div>
    </section>
  )
}

export default Hero
