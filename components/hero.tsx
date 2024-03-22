import { IconArrowRight } from '@tabler/icons-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden my-12">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
            href="#"
          >
            lorem ipsum dolors sit
            <span className="flex items-center gap-x-1">
              <span className="border-s border-gray-200 ps-2">Explore</span>
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>
        <div className="mt-5 max-w-4xl text-center mx-auto">
          <h1 className="block font-extrabold text-4xl md:text-5xl lg:text-6xl">
            Free&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              resume builder
            </span>
            &nbsp;for modern job seekers
          </h1>
        </div>
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400 font-mono">
            Make you profile visible to world with celerCV
          </p>
        </div>
        <div className="mt-8 gap-3 flex justify-center">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-yellow-600 to-orange-600 hover:from-orange-600 hover:to-amber-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4"
            href="#"
          >
            Get Started
            <IconArrowRight size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
