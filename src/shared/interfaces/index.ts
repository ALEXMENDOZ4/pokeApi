export interface Ipokemons {
    count:    number;
    next:     string;
    previous: string;
    results:  Ipokemon[];
}

export interface Ipokemon {
    name: string;
    url:  string;
    image: string;
}


export interface IpokemonByid {
    abilities:  Ability[];
    id:         number;
    name:       string;
    sprites:    Sprites;
    types:      Type[];
    stats:      Stat[];
}


export interface Ability {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

export interface Species {
    name: string;
    url:  string;
}


export interface Sprites {
    back_default:       string;
    back_female:        null;
    back_shiny:         string;
    back_shiny_female:  null;
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
    other:              Other;
}


export interface Other {
    dream_world:        DreamWorld;
}


export interface DreamWorld {
    front_default: string;
    front_female:  null;
}


export interface Type {
    slot: number;
    type: Species;
}


export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      Species;
}