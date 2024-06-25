//import { el } from '@zero-dependency/dom'
import { Fireworks } from 'fireworks-js'

export const reward = () => {
   // something happens here
   const container = document.querySelector('.container');
   const fireworks = new Fireworks(container, { autoresize: true });
   fireworks.start();
    
};