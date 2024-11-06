const triviaReducer = {
  checkAnswer: (state, action) => {
    const isCorrect = action.payload === state.currentCountry.name;
    if (isCorrect) {
      state.score += 1;
    } else {
      state.showModal = true; // Muestra el modal si la respuesta es incorrecta
    }
  },
  hideModal: (state) => {
    state.showModal = false; // Cierra el modal
  },
  resetScore: (state) => {
    state.score = 0; // Reinicia el puntaje
  },
  showModal: (state) => {
    state.showModal = true; 
  }
};
export default triviaReducer;
