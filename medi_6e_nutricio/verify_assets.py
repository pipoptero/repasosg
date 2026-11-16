"""Verifica fidelitat dels recursos sense modificar les imatges originals."""
from pathlib import Path
from PIL import Image, ImageChops
import hashlib

root=Path(__file__).resolve().parent
originals=root.parent/'material_medi_6e_nutricio'
for topic,name in [('digestiu','aparell digestiu.png'),('excretor','sistema excretor.png'),('circulatori','aparell circulatori.png')]:
    source=Image.open(originals/name).convert('RGB')
    asset=root/'assets'/(topic+'-resum.webp')
    result=Image.open(asset).convert('RGB')
    assert source.size==result.size==(1199,1312)
    assert ImageChops.difference(source,result).getbbox() is None
    assert asset.stat().st_size<(originals/name).stat().st_size
for name,asset in [('completar_excretor.JPG','excretor-parts.jpg'),('completar_excretor_recurregut_de_lorina.JPG','excretor-recorregut.jpg'),('completar_aparell_digestiu.JPG','digestiu-parts.jpg'),('completar_recurregut_dels_alimentsJPG.JPG','digestiu-recorregut.jpg'),('completar_aparell_circulatori_la_sang.JPG','circulatori-sang.jpg')]:
    assert hashlib.sha256((originals/name).read_bytes()).digest()==hashlib.sha256((root/'assets'/asset).read_bytes()).digest()
assert len(list((root/'assets').iterdir()))==8
assert not list(root.rglob('*.pdf'))
print('PASS imatges: 3 WebP sense diferències de píxels RGB, 5 JPEG idèntics, 8 assets i cap PDF al mòdul.')
