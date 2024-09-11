/**
 *  <div id='parent'>
 *      <div id='child'>
 *              <h1>"this is the first h1"</h1>
 *              <h1>"this is second h1"</h1>
 *              <h2>"this is h2 tag" </h2>
 *      </div>
 *      <div id='child2'>
 *              <h1>"this is the first h1"</h1>
 *              <h1>"this is second h1"</h1>
 *              <h2>"this is h2 tag" </h2>
 *      </div>
 * </div>
 */

const head_1 = React.createElement('h1', {}, 'this is first h1');
const head_2 = React.createElement('h1', {}, "this is second h1");
const head_3 = React.createElement('h3', {}, 'this is h2');

const child1 = React.createElement('div', {id:'child1'}, [head_1, head_2, head_3]);
const child2 = React.createElement('div', {id:'child2'}, [head_1, head_2, head_3]);

const parent = React.createElement('div', {id:'parent'}, [child1,child2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);