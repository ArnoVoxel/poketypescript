import http from "../http-common";
import PokemonResource from "../types/pokemondata.type"

class PokemonDataService {
  getAll() {
    return http.get<Array<PokemonResource>>("/tutorials");
  }

  get(id: string) {
    return http.get<PokemonResource>(`/pokemon/${id}`);
  }

  findByName(name: string) {
    return http.get<PokemonResource>(`/pokemon/${name}`);
  }
}

export default new PokemonDataService();