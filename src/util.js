import { isNullOrUndefined , isString } from "util";

export function isEmpty(value){
  const result = (isString(value)? isNullOrUndefined(value) || (value.trim() === "") : value.length === 0 );
  return result;
}