"use client";

import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Link from 'next/link';

const projectsData = [
  {
    image: '/assets/img/project-01.jpg',
    title: 'Landing Page Campaign',
    detail: 'Created by Codeigniter Framework',
    link: 'https://www.phyathai.com/app/allyoucanbe/'
  },
  {
    image: '/assets/img/project-02.jpg',
    title: 'Landing Page Center Promote',
    detail: 'Created by Next.js',
    link: 'https://www.phyathai.com/app/DentalCenterPYT2-TH/'
  },
  {
    image: '/assets/img/project-03.jpg',
    title: 'Health Addict Website',
    detail: 'Created by HTML, CSS, Javascript, Bootstrap 4',
    link: 'https://www.healthaddict.com/'
  },
  {
    image: '/assets/img/project-04.jpg',
    title: 'Store Health Addict Website',
    detail: 'Created by Shopify Platform',
    link: 'https://store.healthaddict.com/'
  },
  {
    image: '/assets/img/project-05.jpg',
    title: 'Jarken Website',
    detail: 'Created by HTML, CSS, Javascript, Bootstrap 4',
    link: 'http://www.jarken.net/'
  },
  {
    image: '/assets/img/project-06.jpg',
    title: 'Kinesia Website',
    detail: 'Created by HTML, CSS, Javascript, Bootstrap 4',
    link: 'https://kinesiapilates.co.th/'
  },
  {
    image: '/assets/img/project-07.jpg',
    title: 'Nutrepreme Website',
    detail: 'Created by Wordpress',
    link: 'https://nutrepreme.com/'
  },
  {
    image: '/assets/img/project-08.jpg',
    title: 'Phyathai-Paolo Covid-19 Campaign Dashboard',
    detail: 'Created by Angular',
    link: ''
  },
  {
    image: '/assets/img/project-09.jpg',
    title: 'Phyathai Income Dashboard',
    detail: 'Created by Angular',
    link: ''
  },
]

const Projects = () => {
  return (
    <section id="projects" className='bg-[#121212] pb-[3rem] pt-[4rem] md:pt-[6rem]'>
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <h2 className='text-[30px] md:text-[35px] lg:text-[45px] leading-[2rem] md:leading-[3rem] capitalize mb-[3rem] font-bold text-white text-center'>My <span className='text-yellow-200'>Projects</span></h2>
        {/* project grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mb-12 w-[90%] xl:w-full'>
          {projectsData.map((project, index) => {
            return (
              <div 
                key={index}
                className='flex flex-col items-center text-center'
              >
                {/* image */}
                <motion.div
                  variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: false, amount: 0.2 }}
                  className='relative w-full mx-auto mb-4'
                >
                  <Image
                    src={project.image}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: '100%', height: 'auto' }}
                    alt='Project Image'
                    priority
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn('up', 0.3)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: false, amount: 0.2 }}
                  className='block h-[110px] overflow-hidden mt-8'
                >
                  {/* name */}
                  <h2 className='text-[22px] font-bold mb-3'>{project.title}</h2>
                  {/* detail */}
                  <p>{project.detail}</p>
                </motion.div>
                {/* link */}
                <motion.div
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {project.link ? (
                    <button className='flex items-center space-x-2 px-[1.5rem] py-[0.7rem] bg-[#EFC40F] hover:bg-yellow-200 transition-all duration-200 text-[14px] text-black font-bold uppercase rounded-full mx-auto mt-[30px]'>
                      <Link href={project.link}>
                        <p>View more</p>
                      </Link>
                    </button>
                  ) : null}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects