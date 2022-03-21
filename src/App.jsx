import React from "react";
import FilmCard from "./components/films";
import PeopleCard from "./components/people";
import "./App.css";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [filmPage, setFilmPage] = useState([]);
  const [peoplePage, setPeoplePage] = useState([]);
  //   const buttonRef = useRef(); I commented this out, It disables buttons on click depending on which page you are on.

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFilms(res);
      });
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPeople(res);
      });
  }, []);

  function filmButton(e) {
    setPeoplePage("");
    setFilmPage(<FilmCard films={films} />);
  }

  function peopleButton(e) {
    setFilmPage("");
    setPeoplePage(<PeopleCard people={people} />);
  }

  //   function disableButton() {
  //     buttonRef.current.disabled = true; // this disables the button
  //   }

  return (
    <main className="container">
      <section className="col justify-content-center mt-5">
        <div id="headerDiv">
          <img src="/imgs/HeaderPhoto.png" alt="" />
        </div>

        <div id="buttonDiv">
          <button
            className="btn btn-lg btn-outline-dark"
            // ref={buttonRef}
            onClick={() => {
              filmButton();
              //   disableButton();
            }}
          >
            Get Films!
          </button>
          <button
            shadow
            p-3
            mb-5
            bg-body
            rounded
            className="btn btn-lg btn-outline-dark"
            // ref={buttonRef}
            onClick={() => {
              peopleButton();
              //   disableButton();
            }}
          >
            Get People!
          </button>
        </div>
      </section>
      {filmPage}
      {peoplePage}
      <div className="col">
        <div class="card shadow-lg p-3 mb-5 bg-body rounded">
          <div class="card-body">
            <p class="card-text">
              This lab shows off some of my React abilities! It utilizes
              conditonal rendering, fetching data from a REST API utilizing an
              useEffect hook, managing mulitple array maps, utilizing an
              useState hook, and Bootstrap for that iconic style! If you like
              what you see, message me at{" "}
              <a href="tech.hhamilton@gmail.com">tech.hhamilton@gmail.com</a>{" "}
              and lets talk!
            </p>
            <a
              href="https://github.com/iloveyouexe"
              target="_blank"
              class="btn btn-primary"
            >
              My Github!
            </a>
          </div>
        </div>
      </div>
      <img className="nofaceGif" src="/imgs/noface.gif" alt="" />
    </main>
  );
};

export default App;
