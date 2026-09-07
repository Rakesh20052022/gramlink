import React from 'react'

const About = () => {
  return (

    <section className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-900">
          About GramLink
        </h2>

        <p className="mt-9 text-lg text-green-800 max-w-3xl mx-auto">
          GramLink is on a mission to empower rural communities through
                digital connectivity and education. We connect villagers,
                artisans, and farmers with buyers, mentors, and local services —
                all from a lightweight, easy-to-use website.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-bold text-green-900">Empower</h3>
            <p className="text-green-700 mt-2">
              Learn modern skills and access digital tools.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-bold text-green-900">Connect</h3>
            <p className="text-green-700 mt-2">
              Build trust and trade within the community.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-bold text-green-900">Grow</h3>
            <p className="text-green-700 mt-2">
              Create sustainable income opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About ;