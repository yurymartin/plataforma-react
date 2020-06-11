import React, { useEffect } from "react";
import Banner from "../Organisms/Banner";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getAllPosts } from "../../redux/actionCreators";
import Publicaction from "../Organisms/Publicaction";

const Home = ({ posts }) => {
  useEffect(() => {
    store.dispatch(getAllPosts());
  }, []);

  return (
    <>
      <Banner
        color="dark-color"
        image="https://i.ytimg.com/vi/bp3BEL-qI8U/maxresdefault.jpg"
        title="Bienvenido a la experiencia más increible en educacion online. Comienza hoy mismo a aprender"
        subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estás buscando contenido de calidad. Aquí lo encontrás"
        home
        poster="https://edteam-media.s3.amazonaws.com/courses/original/7fd29763-c6b4-4a98-951b-65a5b26b8aaa.png"
      />
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          {posts ? (
            <div>
              {posts.map((p) => (
                <Publicaction
                  title={p.title}
                  author={p.author}
                  fecha={p.fecha}
                  content={p.content}
                  key={p.id}
                />
              ))}
            </div>
          ) : (
            <p>No existe publicaciones en la BD</p>
          )}
        </div>
        <div>
          <h3> Lista de categorías </h3>
          <ul className="data-list">
            <li>
              <span>React.js</span>
            </li>
            <li>
              <span>React native</span>
            </li>
            <li>
              <span>Angular</span>
            </li>
            <li>
              <span>Vue.js</span>
            </li>
            <li>
              <span>HTML</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

export default connect(mapStateToProps, {})(Home);
