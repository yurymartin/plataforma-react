import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../redux/store";
import { getSpeciality } from "../../redux/actionCreators";
import Banner from "../Organisms/Banner";

const Speciality = ({ speciality }) => {
  useEffect(() => store.dispatch(getSpeciality(1)), []);

  return (
    <>
      {speciality && (
        <>
          <Banner
            color="dark-color"
            title={speciality.data.name}
            subtitle={speciality.data.subtitle}
            image={{
              src: "https://i.ytimg.com/vi/bp3BEL-qI8U/maxresdefault.jpg",
              alt: speciality.data.name,
            }}
            courseBanner
            poster={speciality.data.picture}
            info={speciality.data.information}
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                <div>
                  <h3 className="t4">¿Qué aprendeás?</h3>
                  <ul>
                    {speciality.data.abilities.map((a) => (
                      <li key={a.id}>{a.description}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Cónocimientos previos</h3>
                  <ul>
                    {speciality.data.knowledge.map((a) => (
                      <li key={a.id}>{a.description}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Nivel</h3>
                  <p>{speciality.data.level}</p>
                </div>
              </div>
              <h2>Temario de la especialidad</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {speciality.data.courses.map((cl) => (
                  <div className="course-class l-section" key={cl.id}>
                    <div className="ed-grid m-grid-3">
                      <img src={cl.picture} alt={cl.name} />
                      <div className="m-cols-2">
                        <h3>{cl.name}</h3>
                        <p>{cl.information}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  speciality: state.specialityReducer.speciality,
});

export default connect(mapStateToProps, {})(Speciality);
