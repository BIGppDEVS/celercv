import {
  IconBrandGoogle,
  IconBuildingCarousel,
  IconDog,
  IconDownload,
  IconLink
} from '@tabler/icons-react';

const OnboardingSection = () => (
  <section className="w-full container px-36 py-28 ">
    <h4 className="text-3xl mb-12 font-semibold text-slate-800 dark:text-slate-200">
      Create a Profile in Easy Steps
    </h4>
    <div className="grid grid-cols-2">
      <div>
        {/* <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
            1 Aug, 2023
          </h3>
        </div> */}
        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <IconBrandGoogle
                size={16}
                stroke={1}
                className="fill-amber-600 text-amber-600 dark:text-amber-400"
              />
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="gap-x-1.5 font-semibold text-gray-800 dark:text-white flex items-center">
              Sign Up with Google
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Find more detailed insctructions here.
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              loerm ipsum dolor sit
            </button>
          </div>
        </div>
        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <IconBuildingCarousel
                size={16}
                stroke={2}
                className=" text-amber-600 dark:text-amber-400"
              />
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Enter Details to Build Profile
            </h3>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              loerm ipsum dolor sit
            </button>
          </div>
        </div>
        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <IconLink
                size={16}
                stroke={2}
                className=" text-amber-600 dark:text-amber-400"
              />
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Share Profile Link
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Finally! You can check it out here.
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              redirect button
            </button>
          </div>
        </div>
        {/* <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
            31 Jul, 2023
          </h3>
        </div> */}
        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <IconDownload
                size={16}
                stroke={2}
                className=" text-amber-600 dark:text-amber-400"
              />
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Download Resume with pre-build Templates
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              subheading
            </p>
          </div>
        </div>
      </div>
      <div className="h-full border rounded-lg bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
    </div>
  </section>
);

export default OnboardingSection;
