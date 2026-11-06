"""Segona capa independent: enumeració exhaustiva i girs per quarts enters.
No importa build_bank.py ni utilitza les funcions JavaScript."""
from pathlib import Path
import json,math,re,hashlib,subprocess
root=Path(__file__).parent
bank=json.loads((root/'bank.json').read_text(encoding='utf-8'))
def divisors(n):return [i for i in range(1,n+1) if n//i*i==n]
def common(a,b):return [i for i in range(1,min(a,b)+1) if a%i==b%i==0]
def multiple(a,b):return next(i for i in range(max(a,b),a*b+1) if i%a==i%b==0)
def factors(n):
 result=[]
 while n>1:
  p=next(i for i in range(2,n+1) if n%i==0)
  result.append(p);n//=p
 return result
checked=0
for q in bank:
 a=q['task']['args'];k=q['task']['kind'];expected=None
 if k=='fixed':
  if q['format']=='single':
   # Revisió editorial separada de conceptes: únicament l'elecció de mètode alterna.
   expected='1' if q['topic']=='metode' and any(w in q['prompt'] for w in ['Retallem','18 targetes','torres','32 adhesius','caramels','cordes']) else '0'
  elif 'quart de volta' in q['prompt']:expected=360//4
  elif 'volta completa' in q['prompt']:expected=4*90
  else:expected=int(re.search(r'a (\d+) caselles',q['prompt']).group(1))
 elif k=='product':expected=sum([a['n']]*a['k'])
 elif k in ['quotient','factorPair']:expected=next(i for i in range(a['n']+1) if i*a['d']==a['n'])
 elif k=='remainder':expected=a['n']-a['d']*(a['n']//a['d'])
 elif k=='multiples':expected=list(range(a['n']*a['start'],a['n']*(a['start']+a['count']),a['n']))
 elif k=='range':expected=[n for n in range(a['lo'],a['hi']+1) if n//a['n']*a['n']==n and (not a.get('odd') or n%2)]
 elif k=='divisors':expected=divisors(a['n'])
 elif k=='divisorCount':expected=len(divisors(a['n']))
 elif k=='selectDivisors':expected=[d for d in a['options'] if d>0 and d in divisors(a['n'])]
 elif k=='selectMultiples':expected=[n for n in a['options'] if n//a['n']*a['n']==n]
 elif k=='selectCriteria':expected=[d for d in a['options'] if all(d in divisors(n) for n in a['ns'])]
 elif k=='criteriaTable':expected=[int(d in divisors(n)) for n in a['ns'] for d in a['ds']]
 elif k=='digits':expected=[d for d in range(10) if all(int(a['pattern'].replace('?',str(d)))%v==0 for v in a['ds'])]
 elif k=='sumDigits':expected=sum(int(c) for c in str(a['n']))
 elif k=='primeSelect':expected=[n for n in a['options'] if n>1 and not any(n%d==0 for d in range(2,n))]
 elif k=='primeFactors':expected=factors(a['n'])
 elif k=='gcd':expected=max(common(a['a'],a['b']))
 elif k=='lcm':expected=multiple(a['a'],a['b'])
 elif k=='commonDivisors':expected=common(a['a'],a['b'])
 elif k=='commonMultiples':expected=[n for n in range(1,a['a']*a['b']*a['count']+1) if n%a['a']==n%a['b']==0][:a['count']]
 elif k=='groupsContent':expected=a['n']//max(common(a['a'],a['b']))
 elif k=='cycleCount':expected=multiple(a['a'],a['b'])//a['period']
 elif k=='clock':expected=(a['start']+multiple(a['a'],a['b']))%24
 elif k=='turn':expected=(a['start']+a['angle'])%360
 elif k=='rotation':
  expected=[]
  for p in a['points']:
   x,y=p
   for _ in range((a['angle']//90)%4):x,y=y,-x
   expected.append([x,y])
 elif k=='reflection':
  expected=[]
  for x,y in a['points']:
   if a['axis']=='vertical':expected.append([a.get('c',0)-(x-a.get('c',0)),y])
   else:expected.append([x,a.get('c',0)-(y-a.get('c',0))])
 else:raise AssertionError(k)
 assert expected==q['answer'],(q['id'],expected,q['answer'])
 if q['format']=='geometry':
  before=a['points'];after=expected
  for i in range(3):
   for j in range(3):assert sum((before[i][d]-before[j][d])**2 for d in [0,1])==sum((after[i][d]-after[j][d])**2 for d in [0,1])
  if k=='reflection':
   dim=0 if a['axis']=='vertical' else 1
   for p,r in zip(before,after):assert (p[dim]+r[dim])/2==a.get('c',0) and p[1-dim]==r[1-dim]
 checked+=1
# Empremtes completes del mòdul Medi i dels preparatoris protegits.
protected=json.loads((root/'protection.json').read_text(encoding='utf-8'))
for name,expected in protected.items():assert hashlib.sha256(Path(name).read_bytes()).hexdigest()==expected,name
assert len(list(Path('material_mates_6e').glob('*')))==16
for p in Path('material_mates_6e').glob('*'):
 assert subprocess.run(['git','check-ignore','-q',str(p)]).returncode==0,p
for p in root.rglob('*'):
 if p.is_file():assert p.suffix.lower() not in ['.pdf','.jfif','.jpg','.png','.mp4','.pptx']
print(f'PASS Python independent: {checked} claus recalculades; geometria, distàncies i eixos; {len(protected)} fitxers protegits idèntics; 16 originals exclosos de Git.')
