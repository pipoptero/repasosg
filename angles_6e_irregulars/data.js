(function(root){
const columns=[{id:'verb',title:'Verb',label:'forma base'},{id:'simple',title:'Past Simple',label:'passat simple'},{id:'participle',title:'Past Participle',label:'participi'},{id:'translation',title:'Translation',label:'traducció al català'}];
const rows=[
['be','was / were','been','ser / estar',['ser','estar']],
['buy','bought','bought','comprar'],
['come','came','come','venir'],
['cut','cut','cut','tallar'],
['dig','dug','dug','cavar / excavar',['cavar','excavar']],
['do','did','done','fer'],
['draw','drew','drawn','dibuixar'],
['drink','drank','drunk','beure'],
['eat','ate','eaten','menjar'],
['feed','fed','fed','alimentar'],
['feel','felt','felt','sentir (emocions/tacte)',['sentir','sentir (emocions/tacte)']],
['find','found','found','trobar'],
['fly','flew','flown','volar'],
['get','got','got','aconseguir / obtenir',['aconseguir','obtenir']],
['give','gave','given','donar'],
['go','went','gone','anar'],
['grow up','grew up','grown up','créixer'],
['have','had','had','tenir']
].map(([verb,simple,participle,translation,translations])=>({id:verb.replace(/ /g,'-'),verb,simple,participle,translation,translations:translations||[translation]}));
const cases=rows.flatMap(row=>columns.map(col=>({id:row.id+':'+col.id,row:row.id,cue:col.id})));
const data={columns,rows,cases};if(typeof module!=='undefined')module.exports=data;root.IrregularsData=data;
})(typeof window==='undefined'?globalThis:window);
