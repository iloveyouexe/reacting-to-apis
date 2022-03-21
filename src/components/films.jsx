import React from "react";

const FilmCard = ({ films }) => {
  return (
    <section className="row justify-content-center mt-5">
      {films.map((film) => (
        <div
          className="card col-3 shadow-lg p-3 mb-5 bg-body rounded"
          key={film.id}
        >
          <img src={film.image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <h4 className="card-title">{film.release_date}</h4>
            <p className="card-text">{film.description}</p>
            <a href={film.url} className="btn btn-primary">
              View API resource
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FilmCard;
