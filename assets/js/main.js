const THEME_KEY='cabine-pro-theme';
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme',theme);
  localStorage.setItem(THEME_KEY,theme);
  document.querySelectorAll('[data-theme-toggle]').forEach(function(btn){btn.textContent=theme==='dark'?'☀️ Light':'🌙 Dark';});
}
function initTheme(){
  applyTheme(localStorage.getItem(THEME_KEY)||'light');
  document.querySelectorAll('[data-theme-toggle]').forEach(function(btn){
    btn.addEventListener('click',function(){applyTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark');});
  });
}
function toast(message){
  var el=document.querySelector('.toast');
  if(!el){el=document.createElement('div');el.className='toast';document.body.appendChild(el);}
  el.textContent=message;
  el.classList.add('show');
  setTimeout(function(){el.classList.remove('show');},1700);
}
function initCopy(){
  document.querySelectorAll('[data-copy]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var el=document.getElementById(btn.dataset.copy);
      if(!el)return;
      if(navigator.clipboard){navigator.clipboard.writeText(el.textContent.trim());}
      toast('Texto copiado.');
    });
  });
}
function initForms(){
  document.querySelectorAll('[data-login-form]').forEach(function(form){
    form.addEventListener('submit',function(e){e.preventDefault();toast('Entrando...');setTimeout(function(){location.href='app.html';},450);});
  });
  document.querySelectorAll('[data-create-briefing]').forEach(function(form){
    form.addEventListener('submit',function(e){e.preventDefault();toast('Gerando briefing seguro...');setTimeout(function(){location.href='briefing.html';},600);});
  });
}
function initCabine(){
  var tele=document.querySelector('[data-teleprompter]');
  if(!tele)return;
  var size=24;
  var plus=document.querySelector('[data-font-plus]');
  var minus=document.querySelector('[data-font-minus]');
  var safe=document.querySelector('[data-safe-toggle]');
  if(plus)plus.addEventListener('click',function(){size=Math.min(38,size+2);tele.style.setProperty('--tp-size',size+'px');});
  if(minus)minus.addEventListener('click',function(){size=Math.max(18,size-2);tele.style.setProperty('--tp-size',size+'px');});
  if(safe)safe.addEventListener('click',function(){
    var next=safe.dataset.state==='on'?'off':'on';
    safe.dataset.state=next;
    safe.textContent=next==='on'?'Modo Seguro: ON':'Modo Seguro: OFF';
    document.querySelectorAll('[data-risk="verify"]').forEach(function(el){el.style.display=next==='on'?'none':'block';});
    toast(next==='on'?'Modo Seguro ativado.':'Modo Seguro desativado.');
  });
  document.querySelectorAll('[data-risk="verify"]').forEach(function(el){el.style.display='none';});
}
function initSources(){
  var filters=document.querySelectorAll('[data-source-filter]');
  if(!filters.length)return;
  filters.forEach(function(btn){
    btn.addEventListener('click',function(){
      filters.forEach(function(b){b.classList.remove('dark');});
      btn.classList.add('dark');
      var f=btn.dataset.sourceFilter;
      document.querySelectorAll('[data-source-level]').forEach(function(row){row.style.display=f==='all'||row.dataset.sourceLevel===f?'grid':'none';});
    });
  });
}
document.addEventListener('DOMContentLoaded',function(){initTheme();initCopy();initForms();initCabine();initSources();});