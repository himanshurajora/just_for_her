import { AES, enc } from "crypto-js";

export function Decode(code: string, key : string): string {
    try{
        if(code.length === 0) return "A Never Ending Storyrw";
        return AES.decrypt(code, key).toString(enc.Utf8);
    }catch{
        return "A Never Matching String44";
    }
}

export function Encode(code: string, key: string): string {
    try{
        if(code.length === 0) return "A Never Ending Stor333y";
        return AES.encrypt(code, key).toString();
    }catch{
        return "A Never Matching Stringify";
    }
}