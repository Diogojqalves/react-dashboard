import React from 'react';

function WelcomeBanner() {
  return (
    <div className="relative bg-emerald-900 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">

      {/* Background illustration */}


      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-neutral-50 font-bold mb-1">Boa tarde, João Alves. 👋</h1>
        <p className='text-neutral-50 '>Eis o que está a acontecer com os seus projectos hoje:</p>
      </div>

    </div>
  );
}

export default WelcomeBanner;
