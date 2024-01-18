'use client';
import Image from 'next/image';
import { delay, motion } from 'framer-motion';
import Link from 'next/link';

export default function BioCard() {
  {
    /* Card */
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        bounce: 0.25,
        velocity: 2,

        delay: 0.5,
        duration: 1,
      }}
      className="relative mx-12 max-w-sm rounded-sm bg-white shadow-xl sm:mx-auto sm:max-w-sm md:mx-auto"
    >
      <div className="mx-auto p-6">
        {/* Pill */}
        <a href="mailto:leavethemails@gmail.com">
          <div className="flex max-w-fit items-center justify-evenly rounded-full bg-salmon-200 p-1 shadow-inner transition ease-in-out hover:cursor-pointer hover:shadow-md hover:shadow-salmon-200/30">
            {/* Ping */}
            <div className="relative ml-1 flex h-3 w-3 items-center justify-center">
              <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>

            <div className="text px-2 text-xs font-light text-salmon-600">
              <p>Available for projects</p>
            </div>

            <Image
              src="/arrow.svg"
              width={18}
              height={18}
              alt="Contact Prateek"
            />
          </div>
        </a>
        <div className=" text-sm font-light tracking-normal text-salmon-900">
          <div className="mt-8 space-y-4 ">
            <p>
              👋🏻 I am <span className="font-medium">Prateek</span>, a product
              engineer from Bangalore, India. I specialize in creating native
              iOS & Android apps. I have a strong eye for design & UX and have
              published several books on mobile design & development.
            </p>
            <p>
              In my free time, I like to mentor beginners in tech, break in to
              the industry
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
