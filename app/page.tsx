import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-auto rounded-md bg-white p-8">
      <div>
        <p>Available for projects</p>
      </div>
      <div className="mt-16 space-y-4">
        <p>
          👋🏻 I am <span className="font-medium">Prateek</span>, a product
          engineer from Bangalore, India. I specialize in creating native iOS &
          Android apps. I have a strong eye for design & UX and have published
          several books on mobile design & development.
        </p>
        <p>
          In my free time, I like to mentor beginners in tech, break in to the
          industry
        </p>
      </div>
      <div className="mt-8 font-light">
        <p>Skills - Swift, Kotlin, Kotlin Multiplatform, React, TypeScript</p>
      </div>
    </div>
  );
}
