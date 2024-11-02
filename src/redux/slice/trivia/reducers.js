export default {
  checkAnswer: (state, action) => {
    const isCorrect = action.payload === state.currentCountry.name;
    if (isCorrect) {
      state.score += 1;
    } else {
      state.showModal = true;
      state.score = 0;
    }
  },
  hideModal: (state) => {
    state.showModal = false;
  },
  resetScore: (state) => {
    state.score = 0;
  },
};
