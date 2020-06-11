import React, { useEffect } from "react";
import Banner from "../Organisms/Banner";
import store from "../../redux/store";
import { getAllSpecialities } from "../../redux/actionCreators";
import { connect } from "react-redux";
import Card from "../Organisms/Card";

const Specialities = ({ specialities }) => {
  useEffect(() => {
    store.dispatch(getAllSpecialities());
  }, []);

  return (
    <>
      <Banner
        color="first-color"
        image={{
          src: "https://pbs.twimg.com/media/EDu4t0aW4AARsKJ.jpg",
          alt: "",
        }}
        title="Especialidades"
        subtitle="Domina una tecnologia con las rutas de aprendizaje que te ofrecemos"
      />
      {specialities && (
        <main className="ed-grid m-grid-3">
          {specialities.map((s) => (
            <Card
              path="especialidades"
              picture={s.picture}
              name={s.name}
              key={s.id}
              card={s.id}
            />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  specialities: state.specialityReducer.specialities,
});

export default connect(mapStateToProps, {})(Specialities);
