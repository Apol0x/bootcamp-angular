import {Owner} from './owner';
/* import {Visit} from './visit'; */
/* import {PetType} from './pettype';
 */

export interface Owner {
  id: number;
  name: string;
  birthData: string;
  //type: PetType;
  owner: Owner;
    //visits: Visit[];
}