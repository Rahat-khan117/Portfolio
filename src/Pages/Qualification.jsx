import React from 'react';

const Qualification = () => {
    return (
        <section className="py-16">
  {/* Title */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold">Qualification</h2>
    <p className="mt-2">My personal journey</p>
  </div>

  {/* Tabs */}
  <div className="flex justify-center gap-8 mb-12">
    <div className="flex items-center gap-2 cursor-pointer font-semibold">
      <i className="fa-solid fa-graduation-cap"></i> Education
    </div>
    <div className="flex items-center gap-2 cursor-pointer font-semibold">
      <i className="fa-solid fa-briefcase"></i> Experience
    </div>
  </div>

  {/* Timeline */}
  <div className="grid  grid-cols-2 gap-10 max-w-4xl mx-auto relative">
    {/* Vertical line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] ">
    <div class="h-80 border-l-5"></div>
    </div>

    {/* Education Column */}
    <div className="space-y-10">
      {/* Item */}
      <div className="relative pr-8">
        {/* Dot */}
        <div className="absolute right-[-32px] -top-1 w-5 h-5 rounded-full border-4 z-10 bg-white"></div>
        <div className='absolute right-[-4px] -top-3'> 
            <h3 className="sm:text-lg text-sm font-bold">Applied Mathematics</h3>
            <p>University of Rajshahi</p>
             <p className="text-sm mt-1">📅 2023 - Present</p>
        </div>
      </div>

      {/* Item */}
      <div className="relative pr-8">
        <div className="absolute right-[-32px] top-41 w-5 h-5 rounded-full border-4 z-10 bg-white"></div>
        <div className='absolute right-[-5px] top-40'>
            <h3 className="sm:text-lg text-sm font-bold">Programming leaning</h3>
            <p>University of Rajshahi</p>
            <p className="text-sm mt-1">📅 2025 - Present</p>
        </div>
      </div>
    </div>
    
    
    {/* Experience Column */}
    <div className="space-y-10">

      {/* Item */}
      <div className="relative pl-8">
        <div className="absolute left-[-28px] top-26 w-5 h-5 rounded-full border-4 z-10 bg-white"></div>
        <div className='pt-25 -ml-7'>
            <h3 className="sm:text-lg text-sm font-bold">JavaScript learning</h3>
            <p>Programming Hero</p>
            <p className="text-sm mt-1">📅 2024 - 2025</p>
        </div>
      </div>

      {/* Item */}
      <div className="relative pl-8">
        <div className="absolute left-[-28px] top-21 w-5 h-5 rounded-full border-4 z-10 bg-white"></div>
        <div className='pt-19 -ml-7'>
            <h3 className="sm:text-lg text-sm font-bold">Typescript Learning</h3>
           <p>Programming Hero</p>
            <p className="text-sm mt-1">📅 2025 - present</p>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Qualification;