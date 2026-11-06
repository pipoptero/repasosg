const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');
const sandbox={window:{}};for(const file of ['questions.js','content.js'])vm.runInNewContext(fs.readFileSync(path.join(__dirname,file),'utf8'),sandbox);
const bank=sandbox.window.MEDI_QUESTIONS,worlds=sandbox.window.MEDI_WORLDS,E=require('./engine.js');
assert.equal(bank.length,180);assert.equal(new Set(bank.map(q=>q.id)).size,180);assert.equal(new Set(bank.map(q=>q.pregunta)).size,180);
assert(bank.filter(q=>q.proces==='comprensió/aplicació').length>=72);
for(const w of worlds){const qs=bank.filter(q=>q.tema===w.id);assert.equal(qs.length,60);assert(qs.filter(q=>q.importància==='imprescindible').length>=36)}
for(const q of bank){assert.equal(q.opcions.length,4);assert.equal(new Set(q.opcions).size,4);assert(Number.isInteger(q.correcta)&&q.correcta>=0&&q.correcta<4);assert(q.explicacio.split('. ').length>=2);assert(q.font&&q.pagina&&!q.pagina.includes('pendent'));assert(worlds.find(w=>w.id===(q.theoryTema||q.tema)).lessons.some(l=>l[0]===q.theoryAnchor));assert(['fàcil','mitjà','repte'].includes(q.nivell));}
for(let n=0;n<1000;n++){const qs=E.exam(bank);assert.equal(qs.length,30);assert.equal(new Set(qs.map(q=>q.id)).size,30);for(const w of worlds){const part=qs.filter(q=>q.tema===w.id);assert.equal(part.length,10);assert(new Set(part.map(q=>q.subtema)).size>=3);assert(part.every(q=>q.importància==='imprescindible'))}}
assert.equal(Object.keys(E.clean({version:1,answers:{bad:{attempts:NaN}},session:{ids:['bad']}},bank).answers).length,0);
const home=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');assert(!home.includes('mode_vacances_estiu.html'));for(const p of ['missio_catala_6e.html','Academia_de_Palabras/index.html','medi_reproduccion_sexual_asexual_nuticion.html','medi_activitat_politica_recursos.html','repas_ciencies.html'])assert(home.includes(p));
console.log('PASS: 180 ítems, 60/món, camps, opcions, fonts, ancoratges, 1000 simulacres equilibrats, estat corrupte, enllaços històrics.');
for(const w of worlds)console.log(w.id, [...new Set(bank.filter(q=>q.tema===w.id).map(q=>q.subtema))].map(s=>s+': '+bank.filter(q=>q.tema===w.id&&q.subtema===s).length).join('; '));
