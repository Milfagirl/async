import GameSavingLoader from './gameSavingLoader.js';

(async () => {
  try {
    const gameSaving = GameSavingLoader.load();
    console.log(gameSaving);
  } catch (error) {
    console.error(error);
  }
})();
