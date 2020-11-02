import React from 'react';

interface PersonProps {
  image: string;
  name: string;
  imageFont: string;
  description: string;
}

const Person: React.FC<PersonProps> = ({
  description,
  image,
  imageFont,
  name,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h4 style={{ margin: 0, textAlign: 'center' }}>{name}</h4>
      <figure>
        <img src={image} alt="" aria-hidden style={{ width: '100%' }} />
        <figcaption>
          Fonte: <a href={imageFont}>{imageFont}</a>
        </figcaption>
      </figure>
      <p style={{ padding: '0 16px', margin: 0 }}>{description}</p>
    </div>
  );
};

export default Person;
