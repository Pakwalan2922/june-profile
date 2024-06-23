"use client";

import SkillCard from "./SkillCard"
import { MdAddCircleOutline } from "react-icons/md";
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const Aboutme = () => {
  return (
    <section id="aboutme" className="h-full xl:h-[140vh] bg-[#121212] pb-[3rem] pt-[4rem] md:pt-[6rem]">
      <div className="container">
        <h1 className="text-[20px] font-bold uppercase text-[#EFC40F] relative mx-7 md:mx-4 lg:mx-4 xl:mx-4">About Me</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] xl:w-[80%] mx-auto gap-[3rem]'>
        <div>
          <h2 className='text-[30px] md:text-[35px] lg:text-[45px] leading-[2rem] md:leading-[3rem] capitalize mb-[3rem] font-bold text-white'>Personal <span className='text-yellow-200'>Information</span></h2>
          <div className='flex flex-col items-start mb-[3rem]'>
            <div className='flex flex-row mb-3 justify-start space-x-6'>
              <p className='text-[16px] font-medium text-[#EFC40F]'>Fullname : <span className='text-[16px] font-semibold text-white ml-4'>Pakwalan Muenhong</span></p>
            </div>
            <div className='flex flex-row mb-3 justify-start space-x-6'>
              <p className='text-[16px] font-medium text-[#EFC40F]'>Date of Birth : <span className='text-[16px] font-semibold text-white ml-4'>22 December 1986</span></p>
            </div>
            <div className='flex flex-row mb-3 justify-start space-x-6'>
              <p className='text-[16px] font-medium text-[#EFC40F]'>Age : <span className='text-[16px] font-semibold text-white ml-4'>37</span></p>
            </div>
            <div className='flex flex-row mb-3 justify-start space-x-6'>
              <p className='text-[16px] font-medium text-[#EFC40F]'>Phone : <span className='text-[16px] font-semibold text-white ml-4'>+66655919099</span></p>
            </div>
            <div className='flex flex-row mb-3 justify-start space-x-6'>
              <p className='text-[16px] font-medium text-[#EFC40F]'>Email : <span className='text-[16px] font-semibold text-white ml-4'>junnies.junny@gmail.com</span></p>
            </div>
            <div className='flex flex-row mb-3 justify-start space-x-6'>
              <p className='text-[16px] font-medium text-[#EFC40F]'>Address : <span className='text-[16px] font-semibold text-white ml-4'>Nonthaburi</span></p>
            </div>
            <div className='flex flex-row mb-3 justify-start space-x-6'>
              <p className='text-[16px] font-medium text-[#EFC40F]'>Education : <span className='text-[16px] font-semibold text-white ml-4'>Bachelor of Computer Engineering at RMUTT</span></p>
            </div>
            <h2 className='text-[30px] md:text-[35px] lg:text-[45px] leading-[2rem] md:leading-[3rem] capitalize mt-[3rem] mb-[3rem] font-bold text-white'>Work <span className='text-yellow-200'>Experience</span></h2>
            <div className='flex flex-row mb-3 justify-start space-x-6'>
              <MdAddCircleOutline className='w-[10%] h-[1.7rem] text-white' />
              <p className='w-[90%] text-[16px] font-medium text-[#EFC40F]'>2018 - Now : <span className='text-[16px] font-semibold text-white ml-4'>Frontend Developer @ Prasit Patana Public Company Limited</span></p>
            </div>
            <div className='flex flex-row mb-3 justify-start space-x-6'>
              <MdAddCircleOutline className='w-[10%] h-[1.7rem] text-white' />
              <p className='w-[90%] text-[16px] font-medium text-[#EFC40F]'>2012 - 2017 : <span className='text-[16px] font-semibold text-white ml-4'>Web Designer @ Matichon Public Company Limited</span></p>
            </div>
            <div className='flex flex-row mb-3 justify-start space-x-6'>
              <MdAddCircleOutline className='w-[10%] h-[1.7rem] text-white' />
              <p className='w-[90%] text-[16px] font-medium text-[#EFC40F]'>2009 - 2011 : <span className='text-[16px] font-semibold text-white ml-4'>Web Master @ Matichon Public Company Limited</span></p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start relative mt-0'>
          <div>
            <h2 className='text-[30px] md:text-[35px] lg:text-[45px] leading-[2rem] md:leading-[3rem] capitalize mb-[3rem] font-bold text-white'>My <span className='text-yellow-200'>Skills</span></h2>
          </div>
          <div className='grid w-full mt-1 mx-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[1rem] items-center'>
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
            >
              <SkillCard title='HTML' image='/assets/img/html.svg' percent='95' />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
            >
              <SkillCard title='CSS' image='/assets/img/css.svg' percent='95' />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
            >
              <SkillCard title='Javascript' image='/assets/img/javascript.svg' percent='90' />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
            >
              <SkillCard title='NextJS' image='/assets/img/nextjs.svg' percent='80' />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
            >
              <SkillCard title='ReactJS' image='/assets/img/reactjs.svg' percent='80' />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
            >
              <SkillCard title='Typescript' image='/assets/img/typescript.svg' percent='70' />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
            >
              <SkillCard title='Bootstrap' image='/assets/img/boorstrap.svg' percent='90' />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
            >
              <SkillCard title='Tailwind CSS' image='/assets/img/tailwindcss.svg' percent='80' />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.9)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
            >
              <SkillCard title='Wordpress' image='/assets/img/wordpress.svg' percent='90' />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme