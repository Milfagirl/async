import read from './reader.js';
import jsonFunction from './parser.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await jsonFunction(data);
      return JSON.parse(value);
    } catch (error) {
      return 'error';
    }
  }
}
