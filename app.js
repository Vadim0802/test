import * as obj from './src/customObject.js';
import { crc32 } from './main.js';

const map = obj.make();
obj.set(map, 'aaaaa0.462031558722291', 'vvv');
obj.set(map, 'aaaaa0.0585754039730588', 'boom!');

const result1 = obj.get(map, 'aaaaa0.462031558722291');
console.log(result1);
