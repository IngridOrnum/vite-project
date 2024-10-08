import {SOME_LOCAL_VALUE} from "./values.js";

console.log('local value:', SOME_LOCAL_VALUE);
console.log(`some environmental value:, ${import.meta.env.VITE_NAME_OF_DEPLOYER}`)

