'use client';
import Image from 'next/image';
import { delay, motion } from 'framer-motion';
import Link from 'next/link';
import BioCard from '@/app/components/BioCard';

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

        <BioCard />
      </div>
    </div>
  );
}
