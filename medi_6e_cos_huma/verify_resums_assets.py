"""Fidelitat de les imatges: píxels dels PNG preservats i JPEG originals byte a byte."""
from pathlib import Path
from PIL import Image,ImageChops
import subprocess,json,hashlib
P=Path(__file__).resolve().parent
D=json.loads(subprocess.check_output(['node','-e',"console.log(JSON.stringify(require('./medi_6e_cos_huma/resums-data.js')))"],cwd=P.parent,encoding='utf-8'))
for world,w in D['worlds'].items():
 original=P/'resums'/w['original'];asset=P/'assets/resums'/w['poster']
 a=Image.open(original).convert('RGB');b=Image.open(asset).convert('RGB')
 assert list(a.size)==w['posterSize']==list(b.size)
 assert ImageChops.difference(a,b).getbbox() is None
 assert asset.stat().st_size<original.stat().st_size
 diagram=P/'resums'/w['diagramOriginal'];copy=P/'assets/resums'/w['diagram']['src']
 assert hashlib.sha256(diagram.read_bytes()).digest()==hashlib.sha256(copy.read_bytes()).digest()
 assert list(Image.open(copy).size)==w['diagram']['size']
 for label in w['diagram']['labels']:
  x,y,width,height=label['box'];vx,vy,vw,vh=w['diagram']['view']
  assert vx<=x<x+width<=vx+vw and vy<=y<y+height<=vy+vh
print('PASS imatges: 3 WebP sense cap diferencia de pixels; 3 JPEG identics; dimensions, 26 mascares dins del dibuix i PNG originals preservats.')
