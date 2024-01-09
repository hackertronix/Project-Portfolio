import Image from 'next/image';

export default function Home() {
  return (
    // Surface
    <div className="relative min-h-screen bg-custom-color">
      {/* Radial gradient */}
      <div className="bg-halo-gradient fixed flex h-screen w-screen items-center justify-center">
        {/* Card */}
        <div className="relative mx-12 max-w-sm rounded-xl bg-white shadow-xl sm:mx-auto sm:max-w-sm md:mx-auto">
          <div className="mx-auto p-6">
            {/* Pill */}
            <div className="flex max-w-fit items-center justify-evenly rounded-full bg-salmon-200 p-1 shadow-inner">
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
                width={22}
                height={22}
                alt="Contact Prateek"
              />
            </div>
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

              <ul className="mt-16 space-y-6 text-sm font-light tracking-normal text-salmon-900">
                <li className="flex items-center">
                  <Image
                    src="/linkedin.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />

                  <p className="px-6">Work experience & timeline</p>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/twitter.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />

                  <p className="px-6">Shoot me a DM</p>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/github.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />

                  <p className="px-6">Stuff I work on for fun</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
