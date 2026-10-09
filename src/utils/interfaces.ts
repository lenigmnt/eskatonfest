/*
 * Représente un artiste tel qu'il est stocké
 * dans la table "artist" 
 */
export interface Artist {
  artist_id: number
  name: string
  image: string | null
  description: string | null
  genre: string | null
}

/*
 * Représente les infos d'une performance artistique
 * nécessaires pour le filter par jour.
 */
export interface Performance {
  day_id: number
}

/*
 * Représente un artiste accompagné de ses performances,
 * tel qu'il est récupéré dans la requête.
 */
export interface ArtistWithPerformances extends Artist {
  performance: Performance[]
}