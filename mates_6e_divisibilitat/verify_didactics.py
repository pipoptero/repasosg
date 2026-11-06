"""Revisió numèrica independent: enumeració, divisió entera i geometria pròpia.
No importa math.js ni els generadors del banc o de les dades didàctiques.
"""
import json, re, subprocess
from pathlib import Path
from fractions import Fraction
P=Path(__file__).resolve().parent
D=json.loads((P/'didactic-data.json').read_text(encoding='utf-8'))
def divisors(n): return [v for v in range(1,n+1) if n%v==0]
def gcd(a,b): return max(set(divisors(a))&set(divisors(b)))
def lcm(a,b): return next(v for v in range(max(a,b),a*b+1) if v%a==v%b==0)
js="const H=require('./mates_6e_divisibilitat/didactic-math.js'),D=require('./mates_6e_divisibilitat/didactic-data.js');console.log(JSON.stringify([...D.models,...D.cases].map(H.solution)))"
actual=json.loads(subprocess.check_output(['node','-e',js],cwd=P.parent,encoding='utf-8'))
for c,s in zip(D['models']+D['cases'],actual):
 a,b=c['a'],c['b']; base=lcm(a,b) if c['method']=='lcm' else gcd(a,b)
 assert base==c['expectedBase']==s['base'],c['id']
 mode=c['mode']
 if mode=='boxes': final=[base//a,base//b]
 elif mode in ['mixed','singleBags','ribbons']:
  final=[base,a//base,b//base]
  if mode=='ribbons':final.append(a//base+b//base)
 elif mode=='rounds':final=[base//c['period']]
 elif mode=='content':final=[a//base]
 elif mode=='pieces':final=[a//base+b//base]
 else:final=[base]
 assert final==c['expectedFinal']==s['final'],c['id']
 for op in s['operations']+s['checks']:
  expected=Fraction(op['left'],op['right']) if op['operator']=='÷' else op['left']+op['right']
  assert expected==op['result'],(c['id'],op)
 expected_lists=[[a*i for i in range(1,base//a+1)],[b*i for i in range(1,base//b+1)]] if c['method']=='lcm' else [divisors(a),divisors(b)]
 assert s['lists']==expected_lists,c['id']
for c in D['criteria']:
 assert c['yes']%c['d']==0
 assert all(n%c['d'] for n in c['no'])
for c in D['edgeCases']:assert (lcm(c['a'],c['b']),gcd(c['a'],c['b']))==(c['lcm'],c['gcd'])
assert [n for n in range(1,100) if all(n%d==0 for d in [2,3,5])]==[30,60,90]
assert [d for d in [2,3,4,5,6,9,10] if 2028%d==0]==[2,3,4,6]
js="const fs=require('fs'),vm=require('vm'),c={window:{}};vm.runInNewContext(fs.readFileSync('./mates_6e_divisibilitat/content.js','utf8'),c);console.log(JSON.stringify(c.window.MATES_LESSONS))"
L=json.loads(subprocess.check_output(['node','-e',js],cwd=P.parent,encoding='utf-8'))
answers={'multiples':[4*i for i in range(1,5)],'divisors':14%4,'criteris':sum(map(int,str(216))),'tots-divisors':divisors(16),'primers':'compost' if len(divisors(9))>2 else 'primer','factors':[2,2,5],'mcm':lcm(4,10),'mcd':gcd(8,12),'metode':'múltiple','coincidencies':lcm(5,6)//5,'repartiments':6//gcd(6,9),'girs':'oest','simetries':3}
for k,expected in answers.items():assert L[k]['tryIt']['answer']==expected,k
# Check every explicit elementary equation in the new lesson prose. Exclude
# descriptive formula variables and decimal-free Euclidean remainder sentences.
sup={'²':'**2','³':'**3'}
def calc(expr):
 expr=expr.replace('×','*').replace('÷','/').replace('−','-')
 for k,v in sup.items():expr=expr.replace(k,v)
 if not re.fullmatch(r'[\d\s+*/.()\-]+',expr):raise ValueError(expr)
 return eval(expr,{'__builtins__':{}},{})
equations=[]
expr=r'[0-9]+[²³]?(?:\s*[×÷+−]\s*[0-9]+[²³]?)*'
def verify_equations(key,text):
 for m in re.finditer(r'(?<![\d])'+expr+r'(?:\s*=\s*'+expr+r')+',text):
  parts=re.split(r'\s*=\s*',m.group())
  for left,right in zip(parts,parts[1:]):
   assert abs(calc(left)-calc(right))<1e-9,(key,left,right)
   equations.append((key,left,right))
for key,l in L.items():verify_equations(key,json.dumps(l,ensure_ascii=False))
js="const H=require('./mates_6e_divisibilitat/didactic-math.js'),D=require('./mates_6e_divisibilitat/didactic-data.js');console.log(JSON.stringify(D.criteria.flatMap(c=>[c.yes,...c.no,c.question,2028].map(n=>H.walk(n,c.d)))))"
walks=json.loads(subprocess.check_output(['node','-e',js],cwd=P.parent,encoding='utf-8'))
for w in walks:
 assert w['ok']==(w['n']%w['d']==0)
 assert 'Residu '+str(w['n']%w['d']) in w['verification']
 verify_equations('criteri '+str(w['d']),json.dumps(w,ensure_ascii=False))
# Enumerated claims not reducible to elementary equation extraction.
assert divisors(15)==[1,3,5,15] and divisors(36)==[1,2,3,4,6,9,12,18,36]
assert [(15//d,15%d) for d in [1,2,3,4]]==[(15,0),(7,1),(5,0),(3,3)]
assert divisors(1)==[1] and divisors(2)==[1,2] and divisors(21)==[1,3,7,21]
assert lcm(12,18)==36 and gcd(12,18)==6 and (7+lcm(8,12))%24==7
points=[(1,1),(3,1),(1,2)];rotated=[(y,-x) for x,y in points]
assert rotated==[(1,-1),(1,-3),(2,-1)]
assert all(x*x+y*y==rx*rx+ry*ry for (x,y),(rx,ry) in zip(points,rotated))
assert [(-x,y) for x,y in [(1,1),(3,1),(2,3)]]==[(-1,1),(-3,1),(-2,3)]
assert (0-70)%360==290
print(f'PASS Python didàctic independent: 18 històries i totes les seves operacions/llistes; 7 criteris; 13 propostes; {len(equations)} equacions de teoria/criteris; divisors, límits, rellotge, girs i reflexos.')
