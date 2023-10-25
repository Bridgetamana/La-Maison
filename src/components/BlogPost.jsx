import React from 'react';

const BlogPost = ({ imageUrl, date, title }) => {
  return (
    <div>
      <img src={imageUrl} alt="A building" className="w-full" />
      <div className="bg-white rounded-sm mb-6 p-4 space-y-4">
        <div className="flex space-x-4 items-center">
          <div className="w-4 h-4 rounded-full bg-indigo-700"></div>
          <p className="text-gray-600">{date}</p>
        </div>
        <hr className="w-44 my-3" />
        <p className="font-medium  text-xl">{title}</p>
        <button className="py-2 px-4 bg-blue-200 text-indigo-500 font-semibold rounded-md">Read More</button>
      </div>
    </div>
  );
};

export default BlogPost;
