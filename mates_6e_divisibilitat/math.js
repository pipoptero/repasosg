/* Matemàtica pura: compartida per la web i les proves. Cap accés al DOM. */
(function(root){
'use strict';
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b)[a,b]=[b,a%b];return a};
const lcm=(a,b)=>a&&b?Math.abs(a/gcd(a,b)*b):0;
function divisors(n){if(!Number.isInteger(n)||n<1)throw Error('Cal un enter positiu');const a=[];for(let d=1;d*d<=n;d++)if(n%d===0){a.push(d);if(d*d!==n)a.push(n/d)}return a.sort((a,b)=>a-b)}
const multiples=(n,count,start=0)=>Array.from({length:count},(_,i)=>n*(i+start));
const isPrime=n=>Number.isInteger(n)&&n>1&&divisors(n).length===2;
function primeFactors(n){if(!Number.isInteger(n)||n<2)throw Error('Cal un enter de 2 o més');const a=[];for(let d=2;d*d<=n;d++)while(n%d===0){a.push(d);n/=d}if(n>1)a.push(n);return a}
const sumDigits=n=>[...String(Math.abs(n))].reduce((s,x)=>s+Number(x),0);
const divisible=(n,d)=>Number.isInteger(n)&&Number.isInteger(d)&&d!==0&&n%d===0;
function criterion(n,d){if(d===2)return n%2===0;if(d===3||d===9)return sumDigits(n)%d===0;if(d===4)return(n%100)%4===0;if(d===5)return n%10===0||n%10===5;if(d===10)return n%10===0;return divisible(n,d)}
const rotate=([x,y],angle)=>{const r=angle*Math.PI/180;return [x*Math.cos(r)+y*Math.sin(r),-x*Math.sin(r)+y*Math.cos(r)].map(v=>Math.round(v*1e8)/1e8)}; // Coordenades cartesianes: angle positiu = horari.
const reflect=([x,y],axis,c=0)=>axis==='vertical'?[2*c-x,y]:[x,2*c-y];
function expected(q){const t=q.task,a=t.args||{};switch(t.kind){
 case 'fixed':return a.value;
 case 'product':return a.n*a.k;
 case 'quotient':return a.n/a.d;
 case 'remainder':return a.n%a.d;
 case 'multiples':return multiples(a.n,a.count,a.start);
 case 'range':return Array.from({length:a.hi-a.lo+1},(_,i)=>i+a.lo).filter(n=>n%a.n===0&&(!a.odd||n%2===1));
 case 'divisors':return divisors(a.n);
 case 'divisorCount':return divisors(a.n).length;
 case 'factorPair':return a.n/a.d;
 case 'selectDivisors':return a.options.filter(d=>divisible(a.n,d));
 case 'selectMultiples':return a.options.filter(n=>divisible(n,a.n));
 case 'selectCriteria':return a.options.filter(d=>a.ns.every(n=>criterion(n,d)));
 case 'criteriaTable':return a.ns.flatMap(n=>a.ds.map(d=>criterion(n,d)?1:0));
 case 'digits':return Array.from({length:10},(_,d)=>d).filter(d=>a.ds.every(k=>criterion(Number(a.pattern.replace('?',d)),k)));
 case 'sumDigits':return sumDigits(a.n);
 case 'primeSelect':return a.options.filter(isPrime);
 case 'primeFactors':return primeFactors(a.n);
 case 'gcd':return gcd(a.a,a.b);
 case 'lcm':return lcm(a.a,a.b);
 case 'commonDivisors':return divisors(gcd(a.a,a.b));
 case 'commonMultiples':return multiples(lcm(a.a,a.b),a.count,1);
 case 'groupsContent':return a.n/gcd(a.a,a.b);
 case 'cycleCount':return lcm(a.a,a.b)/a.period;
 case 'clock':return (a.start+lcm(a.a,a.b))%24;
 case 'turn':return ((a.start+a.angle)%360+360)%360;
 case 'rotation':return a.points.map(p=>rotate(p,a.angle));
 case 'reflection':return a.points.map(p=>reflect(p,a.axis,a.c));
 default:throw Error('Operació desconeguda: '+t.kind);
}}
const sorted=a=>[...a].sort((x,y)=>x-y);
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
function integer(raw){if(typeof raw==='number')return Number.isSafeInteger(raw)?raw:null;const s=String(raw??'').trim();if(!/^-?\d+$/.test(s))return null;const n=Number(s);return Number.isSafeInteger(n)?n:null}
function check(q,raw){const target=expected(q);let value=raw;const invalid=error=>({valid:false,ok:false,error});
 if(q.format==='number'||q.format==='problem'){const n=integer(q.format==='problem'?raw?.value:raw);if(n===null)return invalid('Escriu un nombre enter, sense punts de milers. Encara no compta com a intent.');if(q.format==='problem'){if(!raw.unit)return invalid('Tria la unitat abans de comprovar.');value={value:n,unit:raw.unit};return {valid:true,ok:n===target&&raw.unit===q.unit,normalized:value,detail:n===target&&raw.unit!==q.unit?'El valor numèric encaixa, però revisa la unitat que demana la pregunta.':''}}value=n;
 }else if(q.format==='list'){const parts=Array.isArray(raw)?raw:String(raw??'').trim().split(/[;,\s×x*]+/).filter(Boolean);if(!parts.length)return invalid('Escriu la llista de nombres separats per comes.');value=parts.map(integer);if(value.some(n=>n===null))return invalid('La llista ha de contenir només nombres enters.');if(q.task.kind!=='primeFactors'&&new Set(value).size!==value.length)return invalid('Hi ha nombres repetits. Escriu cada nombre una sola vegada; no compta com a error.');return {valid:true,ok:same(sorted(value),sorted(target)),normalized:value};
 }else if(q.format==='multi'){if(!Array.isArray(raw)||raw.some(x=>!Number.isSafeInteger(x)))return invalid('Revisa la selecció.');value=[...new Set(raw)];return{valid:true,ok:same(sorted(value),sorted(target)),normalized:value};
 }else if(q.format==='table'){if(!Array.isArray(raw)||raw.length!==target.length||raw.some(x=>x!==0&&x!==1))return invalid('Completa totes les caselles amb Sí o No.');value=raw;
 }else if(q.format==='geometry'){if(!Array.isArray(raw)||!raw.length)return invalid('Afegeix els punts de la figura transformada.');if(raw.some(p=>!Array.isArray(p)||p.length!==2||p.some(x=>integer(x)===null||Math.abs(Number(x))>4)))return invalid('Cada punt necessita x i y enters entre −4 i 4.');value=raw.map(p=>p.map(Number));const key=p=>p.join(',');if(new Set(value.map(key)).size!==value.length)return invalid('No repeteixis punts.');return {valid:true,ok:same(value.map(key).sort(),target.map(key).sort()),normalized:value};
 }else if(q.format==='single'){if(typeof raw!=='string'||!q.options.some(o=>o.value===raw))return invalid('Tria una resposta abans de comprovar.');value=raw;}
 return {valid:true,ok:same(value,target),normalized:value};
}
function errorHint(q,answer){const a=q.task.args||{},n=typeof answer==='object'?answer?.value:Number(answer);
 if(['gcd','lcm'].includes(q.task.kind)){const other=q.task.kind==='lcm'?gcd(a.a,a.b):lcm(a.a,a.b);if(n===other&&n!==expected(q))return q.task.kind==='lcm'?'Aquest valor és el m.c.d.: divideix les dades. Aquí necessitem un múltiple comú positiu, que sigui el més petit.':'Aquest valor és el m.c.m.: és un múltiple. Aquí necessitem un divisor comú tan gran com sigui possible.'}
 if(['gcd','lcm'].includes(q.task.kind)&&Number.isSafeInteger(n)){if(n<=0)return 'Aquí busquem un resultat positiu. El zero no és divisor i no es pren com a mínim comú múltiple.';if(q.task.kind==='lcm'){const d=[a.a,a.b].find(d=>n%d!==0);return d?`${n} no és múltiple de ${d}: la divisió deixa residu ${n%d}. La coincidència ha de passar les dues divisions exactes.`:`${n} és un múltiple comú, però no el primer positiu. Compara les llistes per trobar una coincidència anterior.`;}const total=[a.a,a.b].find(total=>total%n!==0);return total?`${n} no divideix exactament ${total}: queda un residu de ${total%n}. El divisor comú ha de servir per a totes dues dades.`:`${n} sí que és un divisor comú, però no és el més gran. Busca les parelles de factors que encara falten.`;}
 if(['quotient','factorPair'].includes(q.task.kind)&&Number.isSafeInteger(n))return `Amb el factor escrit, ${a.d} × ${n} = ${a.d*n}, però volem reconstruir ${a.n}. Revisa la multiplicació inversa.`;
 if(q.task.kind==='remainder'&&n===Math.floor(a.n/a.d))return 'El valor escrit coincideix amb el quocient. Aquí la pregunta demana el residu: el que sobra després de formar els grups complets.';
 if(q.task.kind==='sumDigits'&&n===a.n%10)return 'El nombre escrit coincideix amb l’última xifra. La pregunta demana sumar-les totes.';
 if(q.format==='list'&&q.task.kind==='divisors'){if(answer.includes(0))return 'La llista conté 0. No podem dividir entre 0: busca divisors positius.';const missing=expected(q).filter(x=>!answer.includes(x));const extra=answer.filter(x=>!divisible(a.n,x));return extra.length?'Hi ha algun nombre que no fa una divisió exacta. Comprova cada parella amb una multiplicació.':missing.length?'Els nombres escrits divideixen bé, però encara falta alguna parella de factors. Revisa la llista completa.':'Revisa els divisors.'}
 if(q.format==='geometry'){const alternative=a.points?.map(p=>q.task.kind==='rotation'?rotate(p,-a.angle):reflect(p,a.axis==='vertical'?'horizontal':'vertical',a.c));if(alternative&&same(answer.map(p=>p.join(',')).sort(),alternative.map(p=>p.join(',')).sort()))return q.task.kind==='rotation'?'Els punts coincideixen amb el gir en el sentit contrari. Revisa horari i antihorari.':'Els punts coincideixen amb el reflex sobre l’altre tipus d’eix. Mira si l’eix dibuixat és vertical o horitzontal.';return 'Compara cada punt amb la figura inicial i amb el centre o l’eix. La forma i la mida s’han de conservar.'}
 if(q.task.kind==='primeFactors'&&Array.isArray(answer)){const large=answer.find(n=>n>a.n);if(large!==undefined)return `El factor ${large} és més gran que ${a.n}. Un factor primer positiu no pot superar el producte que volem reconstruir.`;const composite=answer.find(n=>!isPrime(n));if(composite!==undefined)return `El factor ${composite} no és primer. Encara cal descompondre’l; tots els factors de la llista han de ser primers.`;const product=answer.reduce((s,n)=>s*n,1);return `El producte dels factors escrits és ${product}, però ha de reconstruir ${a.n}. Revisa si falta o sobra alguna repetició.`;}
 if(q.format==='multi'){const target=expected(q),extra=answer.find(n=>!target.includes(n)),missing=target.find(n=>!answer.includes(n));return extra!==undefined?`Has marcat ${extra}, que no compleix totes les condicions. Comprova’l amb la definició o amb la divisió corresponent.`:`La selecció encara és incompleta: falta comprovar ${missing}. Cada candidat s’ha de revisar per separat.`;}
 if(q.format==='table'){const i=answer.findIndex((v,i)=>v!==expected(q)[i]),n=a.ns[Math.floor(i/a.ds.length)],d=a.ds[i%a.ds.length];return `Primera casella per revisar: ${n}, divisible per ${d}. La divisió deixa residu ${n%d}; per això la resposta ha de ser ${n%d===0?'Sí':'No'}. Comprova després la resta de caselles.`;}
 if(q.format==='single')return q.options.find(o=>o.value===answer)?.why||'Compara la definició amb el cas concret.';
 return 'El resultat no coincideix amb totes les condicions. Segueix els passos i comprova’l amb l’operació inversa.';
}
const api={gcd,lcm,divisors,multiples,isPrime,primeFactors,sumDigits,divisible,criterion,rotate,reflect,expected,check,errorHint,integer};root.MatesMath=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
