import PokemonResource from "../types/pokemondata.type";
import { AxiosInstanceService } from "./axios-instance.service";

class PokemonDataService extends AxiosInstanceService {
  constructor() {
    super(`https://pokeapi.co/api/v2`);
  }

  getAll() {
    return this.get<Array<PokemonResource>>("/tutorials");
  }

  getById(id: string) {
    return this.get<PokemonResource>(`/pokemon/${id}`);
  }

  findByName(name: string) {
    return this.get<PokemonResource>(`/pokemon/${name}`);
  }
}

const pokemonDataService = new PokemonDataService();
export default pokemonDataService;
