import React from 'react';
import { Users } from 'lucide-react';

const About = () => {
  const members = [
    {
      name: "Pratik Maharjan",
      instrument: "",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Marcus Rodriguez",
      instrument: "Piano",
      image: "https://images.unsplash.com/photo-1549442523-5426dd285c30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Elena Petrov",
      instrument: "Cello",
      image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "David Kim",
      instrument: "Percussion",
      image: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Harmonic Fusion is a groundbreaking instrumental ensemble that bridges
            the gap between classical masterpieces and contemporary innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-purple-400">{member.instrument}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
