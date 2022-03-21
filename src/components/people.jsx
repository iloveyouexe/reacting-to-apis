import React from "react";

const PeopleCard = ({ people }) => {
  return (
    <section className="row justify-content-center mt-5">
      {people.map((people) => (
        <>
          <div
            className="card col-3 shadow-lg p-3 mb-5 bg-body rounded"
            key={people.id}
          >
            <div className="card-header">{people.name}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{people.age}</li>
              <li className="list-group-item">{people.gender}</li>
            </ul>
          </div>
        </>
      ))}
    </section>
  );
};

export default PeopleCard;
