const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto');
const root=path.resolve(__dirname,'..'),read=n=>fs.readFileSync(path.join(__dirname,n),'utf8');
const ctx={window:{}};vm.runInNewContext(read('questions.js'),ctx);
const bank=JSON.parse(JSON.stringify(ctx.window.MEDI_QUESTIONS)),baseline=JSON.parse(read('claredat-protection.json')),changes=JSON.parse(read('claredat-canvis.json')),E=require('./engine.js');
const fields=['pregunta','opcions','explicacio','perQueNo','pista'];
assert.equal(bank.length,180);assert.equal(new Set(bank.map(q=>q.id)).size,180);assert.equal(new Set(bank.map(q=>q.pregunta)).size,180);assert.equal(new Set(bank.map(q=>q.pista)).size,180);assert.equal(new Set(bank.flatMap(q=>q.perQueNo.slice(1))).size,540);
assert.deepEqual(bank.map(q=>Object.fromEntries(Object.entries(q).filter(([k])=>!fields.includes(k)))),baseline.bank,'IDs, ordre, resposta correcta, conceptes, fonts, cobertura i revisió conservats');
for(const q of bank){assert.equal(q.opcions.length,4);assert.equal(new Set(q.opcions).size,4);assert.equal(q.correcta,0);assert.equal(q.perQueNo.length,4);assert(q.pista.length>=35);assert(q.explicacio.split('. ').length>=2);for(let i=1;i<4;i++)assert(q.perQueNo[i].length>=30,q.id);for(const f of fields)for(const text of Array.isArray(q[f])?q[f]:[q[f]])assert(!/fletx|dibuix|esquema|etiqueta|assenyal(?:es|at)|\bSNC\b|\bSNP\b/i.test(text),q.id+' '+f);}
for(const c of changes){const q=bank.find(q=>q.id===c.id);assert(q);for(const [field,value]of Object.entries(c.fields)){assert(fields.includes(field));assert.deepEqual(q[field],value.despres);assert.notDeepEqual(value.abans,value.despres);}}
assert.equal(changes.length,52);assert.equal(changes.filter(c=>c.fields.pregunta).length,34);
const restored=JSON.parse(JSON.stringify(bank));for(const c of changes){const q=restored.find(q=>q.id===c.id);for(const [field,value]of Object.entries(c.fields))q[field]=value.abans;}
assert.equal(crypto.createHash('sha256').update(JSON.stringify(restored)).digest('hex'),baseline.bankBeforeHash,'Només han canviat els camps documentats; les altres 128 preguntes són idèntiques');
for(const [file,hash]of Object.entries(baseline.files))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex'),hash,file+' intacte');
const session={mode:'practice',ids:['locomotor-020','nervios-048'],index:1,results:[{id:'locomotor-020',choice:0}],order:[2,0,3,1]};
const raw={version:1,bankRevision:2,answers:{'locomotor-020':{attempts:3,correct:2}},errors:{'nervios-048':{due:4}},seen:['l-ossos'],days:['2026-11-14'],round:3,exams:[{date:'14/11/2026',score:7.5,bankRevision:2}],session};
const old=JSON.stringify(raw),clean=E.clean(raw,bank);assert.equal(JSON.stringify(raw),old);for(const field of ['answers','errors','seen','days','round','exams','session'])assert.deepEqual(clean[field],raw[field]);assert.equal(clean.bankHistory.length,0);
console.log(`PASS claredat: 180 preguntes, 52 millorades / 34 enunciats, 180 pistes i 540 feedbacks únics; sense gràfics absents ni sigles; ${Object.keys(baseline.files).length} fitxers intactes; progrés i sessió conservats.`);
