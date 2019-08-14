import Stethee from "../models/Stethee";
import Serializer from '../abstracts/Serializer.abstract'
import StateOfOperation from "../classes/StateOfOperation";
export default interface SerializerEventInterface extends Serializer{
    stethee:Stethee;
    stateOfOps:StateOfOperation;
    serialize():Stethee;
}
