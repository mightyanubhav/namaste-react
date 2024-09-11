
import React from 'react';
import ReactDOM from 'react-dom/client';

const head_1 = React.createElement('h1', {}, 'this is first h1');
const head_2 = React.createElement('h1', {}, "this is second h1");
const head_3 = React.createElement('h3', {}, 'this is h2 named h3');


const child1 = React.createElement('div', {id:'child1'}, [head_1, head_2, head_3]);
const child2 = React.createElement('div', {id:'child2'}, [head_1, head_2, head_3]);

const parent = React.createElement('div', {id:'parent'}, [child1,child2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);