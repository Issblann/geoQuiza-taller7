import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import '../../styles/botonBanderas/styles.css';
import { thunks } from '../../redux/slice/trivia/thunks';
import { actions } from '../../redux/slice/trivia/slice';
import Modal from '../../components/modalTrivia/modal-trivia';
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
    if (selectedOption !== currentCountry.name) {
      dispatch(actions.showModal());
    } else {
      handleNextQuestion();
    }
  };

  // console.log(currentCountry, 'pais correcto');
  // console.log(incorrectOption, 'pais incorrecto');
  console.log(score, 'puntaje');
  console.log(showModal, 'modal');
  const closeModal = () => {
    dispatch(actions.resetScore()); // Reinicia el puntaje
    dispatch(actions.hideModal());  // Cierra el modal
    handleNextQuestion();           // Genera una nueva pregunta
  };
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
      <Modal
        showModal={showModal}
        onClose={closeModal}
        score={score}
        currentCountry={currentCountry}
        incorrectOption={incorrectOption}
      />
    </>
  );
};

export default BotonBanderas;
