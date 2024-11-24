import React from 'react';
import { Play, Music as MusicIcon } from 'lucide-react';

const Music = () => {
  const albums = [
    {
      title: "Ethereal Rhythms",
      year: "2023",
      cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Classical Fusion",
      year: "2022",
      cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Harmonic Journey",
      year: "2021",
      cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="music" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Music</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our discography and immerse yourself in our unique blend of classical and contemporary sounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-purple-900/20 p-6 transition-transform hover:-translate-y-2">
              <img
                src={album.cover}
                alt={album.title}
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{album.title}</h3>
              <p className="text-purple-400 mb-4">{album.year}</p>
              <button className="flex items-center text-sm text-purple-400 hover:text-purple-300">
                <Play className="w-4 h-4 mr-2" />
                Listen Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Music;
