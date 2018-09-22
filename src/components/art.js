import React from 'react';
import styled from 'styled-components';

const Art = props => {
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

export default Art;
