import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import '../../styles/botonBanderas/styles.css';
import { thunks } from '../../redux/slice/trivia/thunks';
import { actions } from '../../redux/slice/trivia/slice';

const BotonBanderas = () => {
  const dispatch = useDispatch();
  const { status, error, currentCountry, incorrectOption, showModal, score } = useSelector((state) => state.trivia);
  const [answerStatus, setAnswerStatus] = useState(null); // Nuevo estado

  useEffect(() => {
    dispatch(thunks.fetchCountryNames()).then(() => {
      dispatch(thunks.fetchRandomCountries());
    });
  }, [dispatch]);

  const handleNextQuestion = () => {
    setAnswerStatus(null); // Restablece el estado al cambiar la pregunta
    dispatch(thunks.fetchRandomCountries());
  };

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === currentCountry.name;
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
    dispatch(actions.checkAnswer(selectedOption));

    if (!showModal) {
      setTimeout(handleNextQuestion, 1000); // Espera antes de mostrar la siguiente pregunta
    }
  };

  return (
    <>
      {status === 'loading' && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {currentCountry && incorrectOption && (
        <section className="boton-banderas__seccion">
          <button
            onClick={() => handleAnswer(currentCountry.name)}
            className={`button-banderas ${answerStatus === 'correct' ? 'correct' : ''}`}
          >
            {currentCountry.name}
          </button>
          <button
            onClick={() => handleAnswer(incorrectOption.name)}
            className={`button-banderas ${answerStatus === 'incorrect' ? 'incorrect' : ''}`}
          >
            {incorrectOption.name}
          </button>
        </section>
      )}
    </>
  );
};

export default BotonBanderas;
