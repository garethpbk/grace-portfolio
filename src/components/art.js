import React from 'react';
import Base from './base';

const Art = props => {
  const {
    bigImage,
    image,
    materials,
    name,
    size,
    year,
  } = props.pageContext.edge.node;
  const { index, links } = props.pageContext;

  return (
    <Base
      links={links}
      index={index}
      art={true}
      render={() => (
        <div>
          <a href={bigImage.file.url} target="_blank" rel="noopener noreferrer">
            <img src={image.file.url} alt={image.title} />
          </a>
          <p>{name}</p>
          <p>{size}</p>
          <p>{materials.materials}</p>
          <p>{year}</p>
        </div>
      )}
    />
  );
};

export default Art;
