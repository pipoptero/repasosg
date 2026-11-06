/* Capa de presentació. Només llegeix dades de sessió; no puntua ni desa progrés. */
(()=>{
 let previousRoot;
 function decorate(){
  const root=app.firstElementChild;if(!root||root===previousRoot)return;previousRoot=root;
  const [page,id]=location.hash.slice(1).split('/');
  const current=state.session&&qBy(state.session.ids[state.session.index]);
  const topic=page==='teoria'?world(id)?.id:page==='joc'?current?.tema:page==='practica'?world(id)?.id:null;
  document.body.dataset.world=topic||'map';
  document.body.dataset.view=page==='joc'&&!state.session?'results':page||'mapa';
  if(page==='errors'){const description=app.querySelector('h1+p');if(description)description.textContent=description.textContent.replace(/^1 preguntes pendents/,'1 pregunta pendent')}
  document.querySelectorAll('header nav a').forEach(a=>{const active=a.hash==='#'+(page||'mapa');if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  const quiz=app.querySelector('.quiz');
  if(quiz&&state.session){quiz.dataset.step=String(state.session.index+1);const exam=state.session.mode==='exam';quiz.dataset.mode=exam?'exam':'practice';const result=state.session.results[state.session.index];if(result&&exam){const chosen=quiz.querySelector('[data-choice="'+result.choice+'"]');chosen?.classList.add('answer-selected');chosen?.setAttribute('aria-label',chosen.textContent+' · La teva resposta desada')}if(result&&!exam){quiz.querySelectorAll('[data-choice]').forEach(b=>{if(+b.dataset.choice===current.correcta)b.setAttribute('aria-label',b.textContent+' · Resposta correcta');else if(+b.dataset.choice===result.choice)b.setAttribute('aria-label',b.textContent+' · La teva resposta, per repassar')})}}
  if(quiz&&current){
   const banner=document.createElement('div');banner.className='quiz-world-banner';
   const image=document.createElement('img');image.src='assets/teoria/'+worldArt[current.tema];image.alt='';image.width=76;image.height=76;
   banner.append(image,quiz.querySelector('.eyebrow + p'));quiz.querySelector('.eyebrow').after(banner);
   const progress=quiz.querySelector('progress');const track=document.createElement('div');track.className='quiz-track';progress.before(track);
   const count=progress.nextElementSibling;track.append(count,progress);
   const label=document.createElement('span');label.className='track-caption';label.textContent=`${state.session.index} de ${state.session.ids.length} completades`;track.append(label);
   const hint=quiz.querySelector(':scope > details');if(hint)hint.classList.add('quiz-hint');
  }
  if(page==='teoria')app.querySelectorAll('.lesson').forEach((lesson,i)=>{
   lesson.querySelector('h2').dataset.chapter=String(i+1).padStart(2,'0');const visuals=lesson.querySelector('.study-visuals');
   if(visuals){lesson.classList.add(visuals.children.length>1?'has-visual-pair':'has-visual');lesson.querySelector(':scope > p').after(visuals)}
  });
  if(page==='teoria'&&!app.querySelector('.chapter-nav')){const w=world(id)||worlds[0];const chapters=document.createElement('nav');chapters.className='chapter-nav';chapters.setAttribute('aria-label','Apartats d’aquest món');for(const [anchor,title]of w.lessons){const a=document.createElement('a');a.href='#teoria/'+w.id+'/'+anchor;a.textContent=title;chapters.append(a)}app.querySelector('.lesson')?.before(chapters)}
 }
 const observer=new MutationObserver(decorate);observer.observe(app,{childList:true,subtree:true});window.addEventListener('hashchange',()=>queueMicrotask(decorate));decorate();
})();
