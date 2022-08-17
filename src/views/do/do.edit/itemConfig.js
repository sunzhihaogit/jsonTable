

import {
  DictArray,
  DO,
  
  Department,
  
  User,
  
} from './models.js';

import {
  
} from '@/utils/dictionary.js';


export const headers = [
  
  
];

(async() => {
  await Promise.all(headers.filter(item => item.dictList instanceof DictArray).map(item => item.dictList.load()));
})();
