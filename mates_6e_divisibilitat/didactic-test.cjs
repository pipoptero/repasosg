/* Regressió del reforç: aritmètica, dades i límits de l'arquitectura. */
const assert=require('assert/strict'),fs=require('fs'),path=require('path'),crypto=require('crypto'),vm=require('vm');
const D=require('./didactic-data.js'),H=require('./didactic-math.js'),M=require('./math.js'),E=require('./engine.js'),bank=require('./bank.json');
assert.deepEqual(D,JSON.parse(fs.readFileSync(path.join(__dirname,'didactic-data.json'),'utf8')));
assert.deepEqual(H.divisors,[2,3,4,5,6,9,10]);
let comparisons=0;
for(let n=0;n<=10000;n++)for(const d of H.divisors){assert.equal(H.criterion(n,d),n%d===0,`${n}/${d}`);comparisons++}
for(const d of H.divisors)for(const n of [100020,123456,99999,1000000,Number.MAX_SAFE_INTEGER])assert.equal(H.criterion(n,d),n%d===0);
for(const n of [-1,1.2,NaN,Infinity])assert.throws(()=>H.criterion(n,6));assert.throws(()=>H.criterion(42,0));
assert(H.criterion(42,6));assert(!H.criterion(44,6));assert(!H.criterion(45,6));assert.deepEqual(H.divisors.filter(d=>H.criterion(2028,d)),[2,3,4,6]);
for(const c of D.criteria){assert(H.criterion(c.yes,c.d));for(const n of c.no)assert(!H.criterion(n,c.d));for(const n of [c.yes,...c.no,c.question]){const w=H.walk(n,c.d);assert.equal(w.ok,n%c.d===0);assert(w.verification.includes(`Residu ${n%c.d}`));assert(w.lines.length>=2)}}
assert.equal(D.models.length,6);assert.equal(D.cases.length,12);assert.equal(new Set(D.cases.map(c=>c.story)).size,12);assert.deepEqual(['Fàcil','Connecta','Interpreta'].map(level=>D.cases.filter(c=>c.level===level).length),[4,4,4]);
for(const c of [...D.models,...D.cases]){const s=H.solution(c);assert.equal(s.base,c.expectedBase,c.id);assert.deepEqual(s.final,c.expectedFinal,c.id);for(const o of [...s.operations,...s.checks])assert.equal(o.result,o.operator==='÷'?o.left/o.right:o.left+o.right,c.id);for(const o of s.checks)assert.equal(o.result,Math.floor(o.result));assert.equal(c.data.length,2);assert(c.meaning&&c.unit&&c.reason);assert(!bank.some(q=>q.prompt===c.story));}
for(const c of D.edgeCases){assert.equal(M.lcm(c.a,c.b),c.lcm);assert.equal(M.gcd(c.a,c.b),c.gcd)}
for(const q of bank.filter(q=>q.format==='problem')){const p=H.problem(q);assert.equal(p.value,q.answer);assert.equal(p.base,p.method==='lcm'?M.lcm(q.task.args.a,q.task.args.b):M.gcd(q.task.args.a,q.task.args.b));if(['cycleCount','clock','groupsContent'].includes(q.task.kind))assert(p.operations.length>0)}
const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'content.js'),'utf8'),ctx);const L=ctx.window.MATES_LESSONS,W=ctx.window.MATES_WORLDS;
assert.equal(Object.keys(L).length,13);assert.equal(JSON.stringify(W.flatMap(w=>w.topics)),JSON.stringify(Object.keys(L)));for(const l of Object.values(L))for(const k of ['goal','because','check','tryIt'])assert(l[k]);
assert.equal(E.KEY,'mates6e_div_v1');assert.equal(bank.length,180);assert.deepEqual([0,1,2].map(w=>bank.filter(q=>q.world===w).length),[80,70,30]);
const protectedFiles=JSON.parse(fs.readFileSync(path.join(__dirname,'didactic-protection.json'),'utf8'));for(const [file,hash]of Object.entries(protectedFiles))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(__dirname,'..',file))).digest('hex'),hash,file+' modificat');
for(const file of ['didactics.js','didactic-math.js','didactic-data.js'])assert(!/localStorage\s*\./.test(fs.readFileSync(path.join(__dirname,file),'utf8')),file+' no ha de desar intents');
console.log(`PASS reforç JS: ${comparisons} comprovacions de criteris + nombres grans; 7 fitxes, 6 models, 12 casos 4+4+4, 10 miniqüestions, 13 lliçons, feedback avançat; ${Object.keys(protectedFiles).length} hashes intactes.`);
