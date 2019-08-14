import Stethee from "../models/Stethee";
import Serializer from '../abstracts/Serializer.abstract'
export default interface SerializerGetInterface extends Serializer{
    stethee:Stethee;
    serialize():Stethee;
    parseGetCommand():object;
}
