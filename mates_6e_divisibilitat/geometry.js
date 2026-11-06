/* Editor de punts: clic opcional i alternativa completa amb camps i botons. */
window.MatesGeometry={mount(root,task,initial=[],onChange=()=>{},locked=false){
 let points=Array.isArray(initial)?initial.map(p=>[...p]):[];const V=MatesVisual;
 function draw(){const a=task.args;root.innerHTML=`<div class="geometry-canvas">${V.grid(a.points,points,task.kind==='reflection'?a.axis:null,a.c||0,!locked)}</div><p class="figure-key"><span>● Figura inicial</span><span>◆ La teva construcció</span></p><p>Vèrtexs inicials: ${a.points.map((p,i)=>`${'ABC'[i]} (${p[0]}; ${p[1]})`).join(' · ')}. X cap a la dreta, Y cap amunt.</p><div class="point-list">${points.length?points.map((p,i)=>`<span>(${p[0]}; ${p[1]}) ${locked?'':`<button type="button" data-remove="${i}" aria-label="Treu el punt ${p[0]}, ${p[1]}">×</button>`}</span>`).join(''):'Encara no has afegit cap punt.'}</div>${locked?'':`<fieldset class="point-controls"><legend>Afegeix un vèrtex amb els controls o tocant la quadrícula</legend><label>X <input data-x type="number" inputmode="numeric" min="-4" max="4" value="1"></label><label>Y <input data-y type="number" inputmode="numeric" min="-4" max="4" value="1"></label><button type="button" data-add>Afegeix el punt</button><button type="button" data-clear>Neteja</button></fieldset>`}<p class="point-notice" role="status"></p>`;
 if(locked)return;
 const announce=text=>root.querySelector('.point-notice').textContent=text;
 const add=(x,y)=>{if(!Number.isInteger(x)||!Number.isInteger(y)||Math.abs(x)>4||Math.abs(y)>4){announce('Escriu coordenades enteres entre −4 i 4.');return}if(points.some(p=>p[0]===x&&p[1]===y)){announce('Aquest punt ja hi és.');return}if(points.length>=3){announce('El triangle ja té tres vèrtexs. Treu-ne un per canviar-lo.');return}points.push([x,y]);onChange(points);draw();root.querySelector('[data-x]')?.focus()};
 root.querySelector('[data-add]').onclick=()=>add(MatesMath.integer(root.querySelector('[data-x]').value),MatesMath.integer(root.querySelector('[data-y]').value));
 root.querySelector('[data-clear]').onclick=()=>{points=[];onChange(points);draw()};
 root.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{points.splice(+b.dataset.remove,1);onChange(points);draw()});
 root.querySelector('svg').onclick=e=>{const p=e.target.closest('[data-point]');if(p){const [x,y]=p.dataset.point.split(',').map(Number);const i=points.findIndex(v=>v[0]===x&&v[1]===y);if(i>=0){points.splice(i,1);onChange(points);draw()}else add(x,y)}};
 }
 draw();return{get:()=>points.map(p=>[...p])};
}};
