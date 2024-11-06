import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "../../styles/card/styles.css";
import logo from '../../assets/images/logo.jpg';

const Card = () => {
  const { currentCountry } = useSelector((state) => state.trivia);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500); // Duración de la animación

    return () => clearTimeout(timer);
  }, [currentCountry]);

  return (
    <div className="card">
      <img className="card__logo" src={logo} alt="Logo" />
      {currentCountry ? (
        <>
          <h2 className="card__title">¿A cuál país pertenece esta bandera?</h2>
          <div className={`card__flag-container ${animate ? 'fade-in' : ''}`}>
            <img className="card__flag" src={currentCountry.flag} alt={`Bandera de ${currentCountry.name}`} />
          </div>
        </>
      ) : (
        <p className="card__loading">Cargando...</p>
      )}
    </div>
  );
};

export default Card;
