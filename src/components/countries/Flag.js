import React from 'react';

const Flag = ({ flag }) => {
  return (
    <div
      className="w-full h-40 lg:w-66 lg:h-40 rounded-t-md"
      style={{
        background: `url(${flag}) no-repeat center center/cover`,
      }}></div>
  );
};

export default Flag;
