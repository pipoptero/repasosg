"""Verifica la ratlla mostrada amb divisions, primalitat i enumeració independents."""
from pathlib import Path
import json,subprocess,hashlib
P=Path(__file__).resolve().parent
js="const R=require('./mates_6e_divisibilitat/ratlla.js');console.log(JSON.stringify({numbers:Array.from({length:999},(_,i)=>R.decompose(i+2)),pairs:[[12,18],[12,20],[100,300],[459,728],[9,9],[4,12],[8,15]].flatMap(([a,b])=>['mcm','mcd'].map(kind=>({a,b,kind,...R.select(a,b,kind)})))}))"
data=json.loads(subprocess.check_output(['node','-e',js],cwd=P.parent,encoding='utf-8'))
def prime(n):return n>=2 and all(n%d for d in range(2,n))
for d in data['numbers']:
 n=d['n'];left=n;factors=[];counts={}
 for row in d['rows']:
  assert row['left']==left
  p=row['prime'];assert prime(p) and left%p==0
  assert p==next(v for v in range(2,left+1) if left%v==0)
  left//=p;assert row['quotient']==left
  factors.append(p);counts[p]=counts.get(p,0)+1
 assert left==1 and factors==d['factors']
 product=1
 for p in factors:product*=p
 assert product==n
 assert d['powers']==[{'prime':p,'exponent':e} for p,e in counts.items()]
gold={100:[2,2,5,5],300:[2,2,3,5,5],459:[3,3,3,17],728:[2,2,2,7,13]}
by={d['n']:d for d in data['numbers']}
for n,factors in gold.items():assert by[n]['factors']==factors
assert [r['left'] for r in by[100]['rows']]+[1]==[100,50,25,5,1]
for d in data['pairs']:
 a,b=d['a'],d['b']
 expected=next(n for n in range(max(a,b),a*b+1) if n%a==n%b==0) if d['kind']=='mcm' else max(n for n in range(1,min(a,b)+1) if a%n==b%n==0)
 assert d['value']==expected,(a,b,d['kind'])
 for p in d['choices']:
  assert p['inA']==d['first']['factors'].count(p['prime'])
  assert p['inB']==d['second']['factors'].count(p['prime'])
  assert p['exponent']==(max(p['inA'],p['inB']) if d['kind']=='mcm' else min(p['inA'],p['inB']))
for f,h in json.loads((P/'ratlla-protection.json').read_text(encoding='utf-8')).items():assert hashlib.sha256((P.parent/f).read_bytes()).hexdigest()==h,f
print('PASS ratlla independent: 999 descomposicions, cada divisor primer minim i cada quocient; 100/300/459/728; 14 seleccions mcm/mcd amb limits; 134 fitxers protegits intactes.')
