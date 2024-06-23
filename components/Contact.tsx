"use client";

import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Link from 'next/link';

const contactData =[
  {
    image: '/assets/img/facebook.png',
    name: 'junniezz',
    link: 'https://www.facebook.com/junniezz'
  },
  {
    image: '/assets/img/line.png',
    name: 'junnies_june',
    link: 'https://line.me/ti/p/EmHGXxJuW_'
  },
  {
    image: '/assets/img/phone.png',
    name: '+66 65 591 9099',
    link: 'tel:0655919099'
  },
  {
    image: '/assets/img/mail.png',
    name: 'junnies.junny@gmail.com',
    link: 'mailto:junnies.junny@gmail.com'
  },
]

const Contact = () => {
  return (
    <section id="contact" className="h-full xl:h-[90vh] pt-[4rem] pb-[4rem] bg-[#121212]">
      <div className='container mx-auto h-full flex flex-col items-center justify-center'>
        <h2 className='text-[30px] md:text-[35px] lg:text-[45px] leading-[2rem] md:leading-[3rem] capitalize mb-[3rem] font-bold text-white'>Contact <span className='text-yellow-200'>Me</span></h2>
        {/* contact grid */}
        <div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12 w-[90%] xl:w-full'>
          {contactData.map((contact, index) => {
            return (
              <div
                key={index}
                className='flex flex-col items-center justify-center'
              >
                {/* image */}
                <motion.div
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: false, amount: 0.2 }}
                  className='relative w-full mx-auto mb-2'
                >
                  <Link href={contact.link}>
                    <Image
                      src={contact.image}
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ width: '70%', height: 'auto' }}
                      alt='Contact Image'
                      priority
                      className='relative mx-auto scale-100 hover:scale-105 xl:scale-50 xl:hover:scale-75 transition-all duration-200'
                    />
                  </Link>
                </motion.div>
                {/* name */}
                <motion.div
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: false, amount: 0.2 }}
                  className='hidden xl:block'
                >
                  <Link href={contact.link}>
                    <h2 className='text-[16px] font-semibold mb-3 lowercase'>{contact.name}</h2>
                  </Link>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact