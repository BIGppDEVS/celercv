const highlights: Array<Record<string, string>> = [
  {
    title: 'Smart',
    description:
      'Forget about Word templates and hours of editing. Powered by intelligent technologies, celerCV will save your time and guide you to the best version of your resume.'
  },
  {
    title: 'Fast',
    description:
      'Forget about Word templates and hours of editing. Powered by intelligent technologies, celerCV will save your time and guide you to the best version of your resume.'
  },
  {
    title: 'Free',
    description:
      'Everything necessary to build and download a job-winning resume is entirely free.'
  }
];

const FeatureGrid = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:py-14 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="container grid md:grid-cols-3 gap-6 lg:gap-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="ms-5 sm:ms-8 space-y-2">
              <h3 className="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                {highlight.title}
              </h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
