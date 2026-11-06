"""Retalls deterministes dels originals locals; no dibuixa ni genera anatomia.
Executar des de l'arrel: python medi_6e_cos_huma/extract_visuals.py
Coordenades en punts PDF, origen superior esquerre. Requereix PyMuPDF i Pillow.
"""
import io
import json
from pathlib import Path
import pymupdf
from PIL import Image

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT.parent / 'material_medi_6e'
OUT = ROOT / 'assets' / 'teoria'
OUT.mkdir(parents=True, exist_ok=True)
RECORDS = [
 ('respiratori-parts','APARELL RESPIRATORI.pdf',1,(292,397,518,544),'r-vies','El recorregut i les parts',"Segueix l’aire des de les fosses nasals fins als bronquíols i els alvèols.","Dibuix dels apunts amb fosses nasals, faringe, laringe, tràquea, bronquis, bronquíols, pulmons i alvèols."),
 ('respiratori-moviments','APARELL RESPIRATORI.pdf',2,(287,263,517,418),'r-moviments','Inspiració i expiració',"A l’esquerra, el diafragma baixa i entra aire. A la dreta, puja i l’aire surt. Compara les fletxes dels apunts.","Comparació original dels apunts: inspiració a l’esquerra amb diafragma avall i entrada d’aire; expiració a la dreta amb diafragma amunt i sortida d’aire."),
 ('respiratori-alveols','APARELL RESPIRATORI.pdf',2,(86,571,293,700),'r-gasos','Els alvèols i la sang',"L’O₂ passa de l’aire a la sang; el CO₂ passa de la sang als alvèols.","Alvèols envoltats de vasos sanguinis i detall ampliat de l’intercanvi d’oxigen i diòxid de carboni."),
 ('locomotor-medulla-ossia','APARELL LOCOMOTOR.pdf',1,(323,330,532,532),'l-ossos','A dins dels ossos',"El dibuix mostra la medul·la òssia, on es formen cèl·lules sanguínies.","Il·lustració de la fitxa amb ossos de formes diferents i un tall que assenyala la medul·la òssia."),
 ('locomotor-esquelet','El_Cuaderno_Secreto_de_Súper_Anatomía.pdf',5,(510,143,815,742),'l-funcions','L’esquelet ens sosté',"Observa el crani, la columna i els ossos de les extremitats. No cal memoritzar noms nous.","Retall de l’esquelet humà de la guia, amb crani, tronc, braços i cames."),
 ('locomotor-musculatura','El_Cuaderno_Secreto_de_Súper_Anatomía.pdf',11,(420,164,963,713),'l-musculs','La musculatura',"Vista anterior i posterior de la musculatura. Ampliació visual: fixa’t en la distribució, sense memoritzar una llista de músculs.","Dues figures de la guia que mostren la musculatura vista de davant i de darrere, sense els rètols originals en castellà."),
 ('locomotor-articulacio','El_Cuaderno_Secreto_de_Súper_Anatomía.pdf',8,(397,145,906,590),'l-articulacions','Cartílag i lligaments',"La superfície clara és el cartílag. Les bandes que uneixen els ossos són lligaments.","Detall d’una articulació de la guia, amb cartílag als extrems dels ossos i lligaments entre ells."),
 ('locomotor-tendo','El_Cuaderno_Secreto_de_Súper_Anatomía.pdf',12,(180,245,510,500),'l-musculs','Tendó: múscul amb os',"Ampliació: la zona fibrosa clara uneix el múscul vermell amb l’os blau.","Detall retallat de la guia: inserció del múscul en l’os mitjançant un tendó, sense els rètols en castellà."),
 ('nervios-neurona','SISTEMA NERVIÓS.pdf',3,(309,221,539,330),'n-neurones','Les parts de la neurona',"Localitza el soma, les dendrites, l’axó i el botó terminal al dibuix dels apunts.","Neurona de la fitxa escolar amb els rètols soma, dendrita, axó i botó terminal en català."),
 ('nervios-central','SISTEMA NERVIÓS.pdf',3,(76,578,304,747),'n-central','Encèfal i medul·la espinal',"El crani protegeix l’encèfal i la columna protegeix la medul·la. Dins l’encèfal, diferencia cervell, cerebel i bulb raquidi.","Dibuix escolar del cervell, cerebel, bulb raquidi, encèfal i medul·la espinal, amb els noms en català."),
 ('nervios-nervi','SISTEMA NERVIÓS.pdf',4,(301,123,534,434),'n-periferic','Els nervis connecten el cos',"Observa com un nervi conté fibres de diverses neurones i arriba a les fibres musculars.","Il·lustració de la fitxa amb un nervi, una neurona i una fibra muscular, etiquetats en català."),
 ('nervios-voluntaria','SISTEMA NERVIÓS.pdf',2,(312,114,542,298),'n-respostes','Una resposta voluntària',"Parlar és una acció que podem decidir conscientment, com mostra la fotografia dels apunts.","Fotografies de la fitxa escolar amb exemples de menjar i parlar com a accions voluntàries."),
 ('nervios-reflexa','SISTEMA NERVIÓS.pdf',2,(312,322,542,494),'n-respostes','Una resposta reflexa',"Tancar els ulls per evitar que hi entri aigua és el reflex que exemplifica la fitxa.","Fotografia dels apunts: una nena tanca els ulls davant l’aigua, exemple de resposta reflexa."),
]
manifest=[]
for name, source, page, box, anchor, title, caption, alt in RECORDS:
    with pymupdf.open(SOURCE / source) as doc:
        pix=doc[page-1].get_pixmap(matrix=pymupdf.Matrix(3,3),clip=pymupdf.Rect(box),alpha=False)
    im=Image.open(io.BytesIO(pix.tobytes('png'))).convert('RGB')
    im.thumbnail((1200,1400),Image.Resampling.LANCZOS)
    target=OUT/(name+'.webp')
    im.save(target,'WEBP',quality=87,method=6)
    manifest.append(dict(id=name,src='assets/teoria/'+target.name,width=im.width,height=im.height,bytes=target.stat().st_size,font=source,pagina=page,retall=list(box),anchor=anchor,title=title,caption=caption,alt=alt,tractament='Retall directe, rasterització i compressió WebP; sense redibuixar ni generar contingut.'))
(OUT/'fonts.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(ROOT/'visuals.js').write_text('/* Retalls dels originals; procedència i coordenades a assets/teoria/fonts.json. */\nwindow.MEDI_VISUALS = '+json.dumps(manifest,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
print(f'{len(manifest)} retalls, {sum(r["bytes"] for r in manifest)/1024:.1f} KiB totals')
