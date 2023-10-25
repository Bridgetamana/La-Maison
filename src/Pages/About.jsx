import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 lg:px-6 py-28">
      <div className='flex justify-center'>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 ">About Us</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="mb-4">
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Our Story</h2>
          <p className="mb-4">
            Welcome to La Maison Real Estate, your trusted partner in finding the perfect home. We are a dedicated team of real estate professionals with a passion for helping you discover the property of your dreams.
          </p>
          <p className="mb-4">
            Our mission is to make the home-buying and selling experience as seamless and enjoyable as possible. With years of experience in the real estate industry, we have built a reputation for providing excellent service and expert guidance.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="mb-4">
            At La Maison Real Estate, we understand that your home is not just a place to live; it's where memories are made, dreams are realized, and futures are shaped. That's why we are committed to finding the right property that suits your unique lifestyle and needs.
          </p>
          <p className="mb-4">
            Meet our dedicated team of real estate professionals who are here to assist you every step of the way. We are passionate about real estate, and we take pride in helping you find the perfect home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
