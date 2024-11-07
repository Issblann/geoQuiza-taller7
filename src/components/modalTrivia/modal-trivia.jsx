import React, { useEffect, useState } from 'react';
import { FaTwitter, FaFacebook, FaPinterest, FaWhatsapp } from 'react-icons/fa';
import '../../styles/modalTrivia/styles.css';

const Modal = ({ showModal, onClose, score, currentCountry, incorrectOption }) => {
  const [visible, setVisible] = useState(false);
  const gameUrl = window.location.href;
  const shareText = `¡Mi puntaje es ${score}! ¿Puedes superarlo? Juega aquí: ${gameUrl}`;

  useEffect(() => {
    setVisible(showModal);
  }, [showModal]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  if (!visible) return null;
  const isWinningScore = score === 261;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-score">
          <span>{score}</span>
        </div>
        {isWinningScore ? (
          <h2>¡Felicitaciones! ¡Alcanzaste el puntaje perfecto de 261!</h2>
        ) : (
          <h2>Oh no! Fallaste</h2>
        )}
        <div className="modal-score-text">
          Puntos: {score}
        </div>
        <div className="modal-countries">
          {currentCountry && (
            <div className="country">
              <img src={currentCountry.flag} alt={currentCountry.name} />
              <h1>{currentCountry.name}</h1>
              <p>Idioma(s): {currentCountry.languages ? Object.values(currentCountry.languages).join(', ') : 'No disponible'}</p>
              <p>Región: {currentCountry.region}</p>
              <p>Población: {currentCountry.population.toLocaleString()}</p>
              <p>Subregión: {currentCountry.subregion}</p>
              <p>Capital: {currentCountry.capital}</p>
              <p>Moneda: {currentCountry.currencies}</p> 
              <a href={currentCountry.googleMaps} target="_blank" rel="noopener noreferrer">
                Ver en Google Maps
              </a>
            </div>
          )}
          {!isWinningScore && incorrectOption && (
            <div className="country">
              <img src={incorrectOption.flag} alt={incorrectOption.name} />
              <h1>{incorrectOption.name}</h1>
              <p>Idioma(s): {incorrectOption.languages ? Object.values(incorrectOption.languages).join(', ') : 'No disponible'}</p>
              <p>Región: {incorrectOption.region}</p>
              <p>Población: {incorrectOption.population.toLocaleString()}</p>
              <p>Subregión: {incorrectOption.subregion}</p>
              <p>Capital: {incorrectOption.capital}</p>
              <p>Moneda: {incorrectOption.currencies}</p>
              <a href={incorrectOption.googleMaps} target="_blank" rel="noopener noreferrer">
                Ver en Google Maps
              </a>
            </div>
          )}
        </div>
        <p>Invita a tus amigos a participar</p>
        <div className="modal-share">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-share-icon"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(gameUrl)}&quote=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-share-icon"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(gameUrl)}&description=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-share-icon"
          >
            <FaPinterest size={24} />
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-share-icon"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
        <button onClick={handleClose} className="modal-retry-button">
          {isWinningScore ? 'Jugar de Nuevo' : 'Volver a Jugar'}
        </button>
      </div>
    </div>
  );
};

export default Modal;
