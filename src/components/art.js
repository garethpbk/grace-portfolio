import React from 'react';
import Base from './base';

const Art = props => {
  const { image, materials, name, size, year } = props.pageContext.edge.node;
  const { index, links } = props.pageContext;

  return (
    <Base
      links={links}
      index={index}
      render={() => (
        <div>
          <img src={image.file.url} alt={image.title} />
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
