import React from 'react';

export function Person({
  person,
}) {
  return (
    <>
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}
      {person.isMarried ? (
        <p className="Person__partner">
          {person.sex === 'f' ? `My husband's` : `My wife's`}
          {` name is ${person.partnerName}`}
        </p>
      ) : (
        <p className="Person__partner">
          I am not married
        </p>
      )}
    </>
  );
}
