import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import '../../styles/botonBanderas/styles.css';
import { thunks } from '../../redux/slice/trivia/thunks';
import { actions } from '../../redux/slice/trivia/slice';
const BotonBanderas = () => {
  const dispatch = useDispatch();
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const { status, error, currentCountry, incorrectOption, showModal, score } =
    useSelector((state) => state.trivia);

  useEffect(() => {
    if (currentCountry && incorrectOption) {
      const options = [
        { name: currentCountry.name, isCorrect: true },
        { name: incorrectOption.name, isCorrect: false },
      ];
      setShuffledOptions(shuffleArray(options));
    }
  }, [currentCountry, incorrectOption]);

  const handleNextQuestion = () => {
    dispatch(thunks.fetchRandomCountries());
  };

  const handleAnswer = (selectedOption) => {
    dispatch(actions.checkAnswer(selectedOption));
    if (selectedOption === currentCountry.name) {
      correctSound.play();
    } else {
      incorrectSound.play();
    }

    handleNextQuestion();
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const correctSound = new Audio('/audio/yay-6120.mp3');

  const incorrectSound = new Audio('/audio/trumpet-fail-242645.mp3');

  return (
    <>
      {status === 'loading' && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {currentCountry && incorrectOption && (
        <section className="boton-banderas__seccion">
          {shuffledOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.name)}
              className="button-banderas"
            >
              {option.name}
            </button>
          ))}
        </section>
      )}
    </>
  );
};

export default BotonBanderas;
