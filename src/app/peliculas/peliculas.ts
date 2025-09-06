import { actorAutocompleteDTO } from "../actores/actores";

export interface peliculaDTO{
    id: number;
    titulo: string;
    fechaLanzamiento: Date;
    trailer: string;
    poster?: string;
}

export interface peliculaCreacionDTO{
    titulo: string;
    fechaLanzamiento: Date;
    trailer: string;
    poster?: File;
    geneorsIds?: number[],
    cinesIds?: number[],
    actores?: actorAutocompleteDTO[];
}