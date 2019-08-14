
//uses decorator pattern for get, set and event during READ - https://sourcemaking.com/design_patterns/decorator
import Stethee from "../models/Stethee";

export default abstract class Serializer{
    abstract serialize():Stethee;
}
