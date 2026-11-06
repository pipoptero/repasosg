(function(root){
'use strict';
const M=root.MatesMath||(typeof require==='function'?require('./math.js'):null);
const KEY='mates6e_div_v1',REVISION=1;
function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
function exam(bank){const take=(topic,n,format)=>{const pool=bank.filter(q=>q.topic===topic&&q.essential);const first=format?shuffle(pool.filter(q=>q.format===format)).slice(0,1):[];return [...first,...shuffle(pool.filter(q=>!first.includes(q))).slice(0,n-first.length)]};return shuffle([
 ...take('multiples',2,'number'),...take('divisors',2),...take('criteris',2,'table'),...take('tots-divisors',2,'list'),...take('primers',2),...take('factors',2,'list'),
 ...take('mcm',3,'number'),...take('mcd',3,'number'),...take('metode',2),...take('coincidencies',2,'problem'),...take('repartiments',2,'problem'),...take('girs',3,'geometry'),...take('simetries',3,'geometry')]);}
const fresh=()=>({version:1,bankRevision:REVISION,answers:{},errors:{},seen:[],history:[],archive:[],session:null,notice:''});
const object=x=>x&&typeof x==='object'&&!Array.isArray(x);
const copy=x=>JSON.parse(JSON.stringify(x));
function snapshot(raw){if(!object(raw)||typeof raw.prompt!=='string'||typeof raw.solution!=='string'||!Array.isArray(raw.steps)||!raw.steps.every(s=>typeof s==='string')||![0,1,2].includes(raw.world)||typeof raw.topic!=='string'||typeof raw.format!=='string')return undefined;const clean={prompt:raw.prompt,solution:raw.solution,steps:[...raw.steps],world:raw.world,topic:raw.topic,format:raw.format};if(typeof raw.submitted==='string')clean.submitted=raw.submitted;if(typeof raw.feedback==='string')clean.feedback=raw.feedback;
 const f=raw.figure,a=f?.task?.args,v=f?.visual,points=ps=>Array.isArray(ps)&&ps.length<=6&&ps.every(p=>Array.isArray(p)&&p.length===2&&p.every(n=>Number.isFinite(n)&&Math.abs(n)<=4));
 if(object(f)&&object(a)){const geometry=f.format==='geometry'&&points(a.points)&&((f.task.kind==='rotation'&&Number.isInteger(a.angle)&&a.angle%90===0)||(f.task.kind==='reflection'&&['vertical','horizontal'].includes(a.axis)&&Number.isInteger(a.c)&&Math.abs(a.c)<=1));const visual=object(v)&&(v.kind==='rectangle'||v.kind==='compass'&&Number.isFinite(v.start)&&(v.end===undefined||Number.isFinite(v.end))||points(v.points)&&(v.kind==='transform'&&Number.isFinite(v.angle)||v.kind==='mirror'&&['vertical','horizontal'].includes(v.axis)&&Number.isFinite(v.c)));if(geometry||visual)clean.figure=copy(f);}
 return clean;
}
function clean(raw,bank){const s=fresh(),by=new Map(bank.map(q=>[q.id,q]));if(!object(raw))return s;if(raw.version!==1){s.archive=[{date:new Date().toISOString(),reason:'Format de dades incompatible',progress:copy(raw)}];s.notice='El format del progrés no és compatible. Conservem les dades a l’arxiu i comencem una sessió segura.';return s;}
 s.archive=Array.isArray(raw.archive)?raw.archive.filter(object):[];
 s.history=Array.isArray(raw.history)?raw.history.filter(h=>object(h)&&typeof h.id==='string'&&typeof h.date==='string'&&Number.isFinite(Date.parse(h.date))&&Number.isFinite(h.score)&&h.score>=0&&h.score<=10&&Array.isArray(h.results)&&h.results.length<=180&&h.results.every(r=>object(r)&&typeof r.id==='string'&&typeof r.ok==='boolean')).slice(-60).map(h=>({...copy(h),results:h.results.map(r=>{const item={...copy(r),snapshot:snapshot(r.snapshot)},q=by.get(r.id);if(!q||!M.check(q,r.answer).valid)item.revision=0;return item})})):[];
 s.seen=Array.isArray(raw.seen)?[...new Set(raw.seen.filter(x=>bank.some(q=>q.topic===x)))]:[];
 s.notice=typeof raw.notice==='string'?raw.notice:'';
 if(raw.bankRevision!==REVISION){const archived=copy(raw);delete archived.archive;s.archive.push({date:new Date().toISOString(),reason:'Canvi de versió editorial',progress:archived});s.notice='Hem actualitzat els exercicis. Conservem les dades anteriors a l’arxiu; cap simulacre antic es corregirà amb el banc nou.';return s;}
 if(object(raw.answers))for(const [id,a]of Object.entries(raw.answers))if(by.has(id)&&object(a)&&a.revision===by.get(id).revision&&Number.isInteger(a.attempts)&&a.attempts>0&&Number.isInteger(a.correct)&&a.correct>=0&&a.correct<=a.attempts)s.answers[id]={revision:a.revision,attempts:a.attempts,correct:a.correct};
 if(object(raw.errors))for(const [id,e]of Object.entries(raw.errors))if(by.has(id)&&object(e)&&e.revision===by.get(id).revision&&Number.isFinite(e.createdAt)&&typeof e.explanation==='string'&&M.check(by.get(id),e.answer).valid)s.errors[id]=copy(e);
 const z=raw.session;if(z){let valid=object(z)&&z.bankRevision===REVISION&&typeof z.id==='string'&&['practice','review','exam'].includes(z.mode)&&Array.isArray(z.ids)&&z.ids.length>0&&z.ids.length<=180&&new Set(z.ids).size===z.ids.length&&z.ids.every(id=>by.has(id)&&z.revisions?.[id]===by.get(id).revision)&&Number.isInteger(z.index)&&z.index>=0&&z.index<=z.ids.length&&Array.isArray(z.results)&&z.results.length>=z.index&&z.results.length<=Math.min(z.index+1,z.ids.length)&&object(z.drafts)&&object(z.orders);
  if(valid)valid=z.results.every((r,i)=>object(r)&&r.id===z.ids[i]&&r.revision===by.get(r.id).revision&&M.check(by.get(r.id),r.answer).valid);
  if(valid){s.session=copy(z);s.session.results=s.session.results.map(r=>({...r,snapshot:snapshot(r.snapshot),ok:M.check(by.get(r.id),r.answer).ok}));
   for(const id of z.ids){const q=by.get(id),values=q.options?.map(o=>o.value)||[];if(values.length){const order=s.session.orders[id];if(!Array.isArray(order)||order.length!==values.length||new Set(order).size!==values.length||order.some(v=>!values.includes(v)))s.session.orders[id]=shuffle(values)}
    const d=s.session.drafts[id];if(d!==undefined){let safe=false;const text=x=>(typeof x==='string'&&x.length<=1000)||Number.isSafeInteger(x);
     if(q.format==='number'||q.format==='list')safe=text(d)||(q.format==='list'&&Array.isArray(d)&&d.length<=100&&d.every(Number.isSafeInteger));
     if(q.format==='problem')safe=object(d)&&text(d.value)&&typeof d.unit==='string'&&d.unit.length<50;
     if(q.format==='single')safe=d===null||values.includes(d);
     if(q.format==='multi')safe=Array.isArray(d)&&d.length<=100&&d.every(Number.isSafeInteger);
     if(q.format==='table')safe=Array.isArray(d)&&d.length===q.task.args.ns.length*q.task.args.ds.length&&d.every(v=>v===0||v===1||v===null);
     if(q.format==='geometry')safe=Array.isArray(d)&&d.length<=3&&d.every(p=>Array.isArray(p)&&p.length===2&&p.every(n=>Number.isInteger(n)&&Math.abs(n)<=4));
     if(!safe)delete s.session.drafts[id];
    }
   }
  }else{s.archive.push({date:new Date().toISOString(),reason:'Sessió incompatible o incompleta',session:copy(z)});s.notice='La sessió no es pot reprendre amb seguretat. L’hem conservada a l’arxiu; el progrés vàlid continua disponible.';}
 }
 return s;
}
function start(mode,items){const ids=items.map(q=>q.id);return{id:Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,9),bankRevision:REVISION,mode,ids,revisions:Object.fromEntries(items.map(q=>[q.id,q.revision])),index:0,results:[],drafts:{},orders:Object.fromEntries(items.filter(q=>q.options).map(q=>[q.id,shuffle(q.options.map(o=>o.value))]))}}
function record(state,q,result){const a=state.answers[q.id]||{revision:q.revision,attempts:0,correct:0};a.attempts++;if(result.ok)a.correct++;state.answers[q.id]=a;if(result.ok)delete state.errors[q.id];else{const old=state.errors[q.id];state.errors[q.id]={revision:q.revision,concept:q.topic,answer:copy(result.answer),explanation:result.detail||M.errorHint(q,result.answer),createdAt:old?.createdAt||Date.now(),updatedAt:Date.now()}}}
function finish(state,bank){const z=state.session;if(!z||z.index!==z.ids.length)return null;if(state.history.some(h=>h.id===z.id)){state.session=null;return null}const by=new Map(bank.map(q=>[q.id,q]));if(z.mode==='exam')for(const r of z.results)record(state,by.get(r.id),r);const h={id:z.id,bankRevision:REVISION,mode:z.mode,date:new Date().toISOString(),score:10*z.results.filter(r=>r.ok).length/z.ids.length,results:copy(z.results)};state.history.push(h);state.history=state.history.slice(-60);state.session=null;return h}
const api={KEY,REVISION,shuffle,exam,fresh,clean,start,record,finish};root.MatesEngine=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
