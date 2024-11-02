import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import '../../styles/botonBanderas/styles.css';
import { thunks } from '../../redux/slice/trivia/thunks';
import { actions } from '../../redux/slice/trivia/slice';
const BotonBanderas = () => {
  const dispatch = useDispatch();
  const { status, error, currentCountry, incorrectOption, showModal, score } =
    useSelector((state) => state.trivia);

  useEffect(() => {
    dispatch(thunks.fetchCountryNames()).then(() => {
      dispatch(thunks.fetchRandomCountries());
    });
  }, [dispatch]);

  const handleNextQuestion = () => {
    dispatch(thunks.fetchRandomCountries());
  };

  const handleAnswer = (selectedOption) => {
    dispatch(actions.checkAnswer(selectedOption));
    if (!showModal) {
      handleNextQuestion();
    }
  };

  // console.log(currentCountry, 'pais correcto');
  // console.log(incorrectOption, 'pais incorrecto');
  console.log(score, 'puntaje');
  console.log(showModal, 'modal');
  return (
    <>
      {status === 'loading' && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {currentCountry && incorrectOption && (
        <section className="boton-banderas__seccion">
          <button
            onClick={() => handleAnswer(currentCountry.name)}
            className="button-banderas"
          >
            {currentCountry.name}
          </button>

          <button
            onClick={() => handleAnswer(incorrectOption.name)}
            className="button-banderas"
          >
            {incorrectOption.name}
          </button>
        </section>
      )}
    </>
  );
};

export default BotonBanderas;
