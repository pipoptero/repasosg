'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),D=require('./data.js'),E=require('./engine.js');
assert.equal(D.questions.length,180);assert.equal(new Set(D.questions.map(q=>q.id)).size,180);
assert.equal(new Set(D.questions.map(q=>q.prompt+'\n'+q.stimulus)).size,180);
for(const s of D.sections)assert.equal(D.questions.filter(q=>q.section===s.id).length,30);
let fields=0;
for(const q of D.questions){assert(q.hint.length>35);assert(q.explanation.length>20);assert(q.source.length>15);assert(D.sections.some(s=>s.id===q.section));for(const f of q.fields){fields++;assert(f.answers.length);assert(f.answers.every(a=>typeof a==='string'&&a.length));if(f.options){assert.equal(new Set(f.options).size,f.options.length);assert(f.options.length>=2);assert(f.answers.every(a=>f.options.includes(a)));for(const bad of f.options.filter(o=>!f.answers.includes(o)))assert(!E.accepts(f,bad),q.id)}assert(!E.accepts(f,''));assert(!E.accepts(f,'resposta impossible'));assert(E.accepts(f,f.answers[0].toUpperCase()),q.id)}const g=E.grade(q.id,q.fields.map(f=>f.answers[0]));assert(g.ok,q.id);const bad=E.grade(q.id,q.fields.map(()=>'?'));assert(!bad.ok);let state=E.blank();E.record(state,bad);assert(E.errors(state).includes(q.id));E.record(state,g);assert(!E.errors(state).includes(q.id));assert.equal(E.clean(JSON.parse(JSON.stringify(state))).records[q.id].attempts,2)}
for(const[a,b]of [['mà','ma'],['bé','be'],['déu','dèu'],['sé','se'],['són','son'],['col·legi','col.legi'],['col·legi','col-legi'],['col·legi','collegi'],['t’escolto','tescolto']])assert(!E.accepts({answers:[a]},b));
assert(E.accepts({answers:['m’agrada']}," m'agrada "));assert(E.accepts({answers:['mà']},'ma\u0300'));assert(E.accepts({answers:['Si fa sol, sortirem.']},'si fa sol , sortirem'));assert(!E.accepts({answers:['Si fa sol, sortirem.']},'Si fa sol sortirem.'));
for(let i=0;i<1000;i++){const ids=E.choose('mixed',30);assert.equal(new Set(ids).size,30);for(const s of D.sections)assert.equal(ids.filter(id=>E.byId(id).section===s.id).length,5)}
for(const s of D.sections){assert.equal(E.choose(s.id,30).length,30);assert(E.choose(s.id,6).every(id=>E.byId(id).section===s.id))}
assert.equal(E.clean({version:1,session:{ids:['missing']}}).session,null);assert.deepEqual(E.clean({version:2}),E.blank());
const ids=E.choose('mixed',6),session={mode:'exam',ids,index:0,results:[],draft:['mà']};assert(E.cleanSession(session));session.ids.push(ids[0]);assert.equal(E.cleanSession(session),null);
const complete={mode:'practice',ids:[D.questions[0].id],index:1,results:[{id:D.questions[0].id,answers:D.questions[0].fields.map(f=>f.answers[0]),ok:false}],draft:[]};assert(E.cleanSession(complete,true).results[0].ok);assert.equal(E.grade('missing',[]),null);
const home=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');for(const url of ['catala_6e_sa1/index.html','angles_6e_irregulars/index.html','medi_6e_nutricio/index.html','medi_6e_cos_huma/index.html','mates_6e_divisibilitat/index.html','missio_catala_6e.html'])assert(home.includes(url));
const upcoming=home.match(/<section class="upcoming-exams"[\s\S]*?<\/section>/)[0];assert.equal((upcoming.match(/<article /g)||[]).length,3);
for(const asset of ['ela-resum.webp','oracions-resum.webp','comes-explicatives.webp'])assert(fs.statSync(path.join(__dirname,'assets',asset)).size>10000);
assert(!/\.pdf|\.jfif/.test(fs.readdirSync(__dirname).join(',')));for(const f of ['app.js','engine.js'])assert(!/localStorage\.(clear|removeItem)/.test(fs.readFileSync(path.join(__dirname,f),'utf8')));
console.log(JSON.stringify({questions:180,sections:6,perSection:30,fields,balancedExams:1000,strictAccents:true,allAnswersAndDistractors:true,independentProgress:E.KEY},null,2));
