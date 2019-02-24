import React from 'react';
import { Link } from 'gatsby';

const Component = ({ slug, name, otherNames, description, examplesCount }) => (
  <Link
    to={`components/${slug}`}
    className="component-card text-black no-underline h-full block w-full p-4 border-red-light border-2 text-shadow-none hover:shadow-md"
  >
    <div className="flex justify-between items-center">
      <h2>{name}</h2>
      <p>
        <strong>{examplesCount}</strong> example
        {parseInt(examplesCount, 10) !== 1 && 's'}
      </p>
    </div>

    {otherNames && <p className="italic">Other names: {otherNames}</p>}
    {description && (
      <div
        dangerouslySetInnerHTML={{
          __html: description
        }}
      />
    )}
  </Link>
);

export default Component;
