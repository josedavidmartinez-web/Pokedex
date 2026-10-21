//Definimos una interface ya que
// solo vamos a definir propiedades 

import { IStas } from "./stat.model";

/**
 * pokemon.model.ts: Al ser un modelo asegura que los datos se 
 */
export interface IPokemon{

    id: number;
    name: string;
    type1:string;
    // ?:Indica que es opcional (puede no existir)
    type2?:string;
    sprite: string;
    height: number;
    weight:number;
    abilities: string[];
    hidenAbility?: string;
    //Objeto para trabajar con los stats 
   // stats:{
      //  base_stats: number;
       // name: string;
   // }
   stats: IStas[];
    
    
}




