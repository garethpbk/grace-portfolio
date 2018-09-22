import React from 'react';

const StaticArt = props => {
  const { image, materials, name, size, year } = props.data;

  return (
    <div>
      <img src={image.file.url} alt={image.title} />
      <p>{name}</p>
      <p>{size}</p>
      <p>{materials.materials}</p>
      <p>{year}</p>
    </div>
  );
};

export default StaticArt;
