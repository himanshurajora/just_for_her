import { Decode, Encode } from "./decoder";

export function Verify(key: string){
    if( Decode(Encode(key, key), key) === Decode("U2FsdGVkX1+iUeFJ8tv3USO7cewyWy+GHAUlmdvNZZ0=", key) ? "true" : "false") console.log("hello")
    else{console.log("false")}
}