import http from "../http-common";
import IPokemonData from "../types/pokemondata.type"

class PokemonDataService {
  getAll() {
    return http.get<Array<IPokemonData>>("/tutorials");
  }

  get(id: string) {
    return http.get<IPokemonData>(`/pokemon/${id}`);
  }

  findByName(name: string) {
    return http.get<Array<IPokemonData>>(`/pokemon/${name}`);
  }
}

export default new PokemonDataService();