import React from 'react';
import Card from '../card/flags_card';
import BotonBanderas from '../botonBanderas/boton-banderas';

const TriviaPage = () => {
  return (
    <div className="my-auto w-full flex flex-col gap-6">
      <Card />
      <BotonBanderas />
    </div>
  );
};

export default TriviaPage;
