'use client';
import Image from 'next/image';
import { delay, motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    // Surface
    <div className="relative min-h-screen bg-custom-color">
      {/* Radial gradient */}
      <div className="fixed flex h-screen w-screen items-center justify-center bg-halo-gradient">
        {/* Line grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
          }}
          className="visible absolute z-0 flex h-screen w-screen items-center justify-center opacity-25 max-sm:hidden"
        >
          <div className="absolute -top-1 h-full w-px translate-x-56 bg-line-gradient"></div>
          <div className="absolute -top-1 h-full w-px -translate-x-56 bg-line-gradient"></div>
          <div className="absolute top-72 h-full w-px rotate-90 bg-line-gradient"></div>
          <div className="absolute -top-72 h-full w-px rotate-90 bg-line-gradient"></div>
        </motion.div>

        {/* Card */}

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
          className="relative mx-12 max-w-sm rounded-xl bg-white shadow-xl sm:mx-auto sm:max-w-sm md:mx-auto"
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
                  👋🏻 I am <span className="font-medium">Prateek</span>, a
                  product engineer from Bangalore, India. I specialize in
                  creating native iOS & Android apps. I have a strong eye for
                  design & UX and have published several books on mobile design
                  & development.
                </p>
                <p>
                  In my free time, I like to mentor beginners in tech, break in
                  to the industry
                </p>
              </div>
              <div className="mt-8 font-light">
                <p>
                  Skills - Swift, Kotlin, Kotlin Multiplatform, React,
                  TypeScript
                </p>
              </div>
              {/* Links */}
              <div className="mt-16 flex flex-col space-y-6 text-sm font-light leading-7 tracking-normal text-salmon-900">
                <a href="https://linkedin.com/in/hackertronix">
                  <div className="flex items-center justify-start hover:underline">
                    <Image
                      src="/linkedin.svg"
                      width={24}
                      height={24}
                      alt="LinkedIn"
                    />
                    <p className="px-6 leading-7">Work experience & timeline</p>
                  </div>
                </a>
                <a href="https://x.com/hackertronix">
                  <div className="flex items-center justify-start hover:underline ">
                    <Image
                      src="/twitter.svg"
                      width={24}
                      height={24}
                      alt="Twitter"
                    />
                    <p className="px-6 leading-7">Shoot me a DM</p>
                  </div>
                </a>
                <a href="https://github.com/hackertronix">
                  <div className="flex items-center justify-start hover:underline">
                    <Image
                      src="/github.svg"
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                    <p className="px-6 leading-7">Stuff I work on for fun</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
