import React from 'react';

const StaticArt = props => {
  const { bigImage, image, materials, name, size, year } = props.data;

  return (
    <div>
      <a href={bigImage.file.url} target="_blank" rel="noopener noreferrer">
        <img src={image.file.url} alt={image.title} />
      </a>
      <p>{name}</p>
      <p>{size}</p>
      <p>{materials.materials}</p>
      <p>{year}</p>
    </div>
  );
};

export default StaticArt;
