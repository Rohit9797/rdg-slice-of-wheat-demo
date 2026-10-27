'use strict';
const toggle=document.getElementById('menuToggle');const nav=document.getElementById('navLinks');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{const filter=tab.dataset.filter;document.querySelectorAll('.tab').forEach(t=>{const selected=t===tab;t.classList.toggle('active',selected);t.setAttribute('aria-pressed',String(selected));});document.querySelectorAll('.menu-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter;});}));
const dialog=document.getElementById('lightbox'),img=document.getElementById('lightboxImage'),caption=document.getElementById('lightboxCaption');
function showImage(src,description){img.src=src;img.alt=description;caption.textContent=description;dialog.showModal();}
document.querySelectorAll('.gallery-item').forEach(el=>el.addEventListener('click',()=>showImage(el.dataset.src,el.dataset.caption)));
document.getElementById('viewMenu').addEventListener('click',()=>showImage('assets/menu.webp','Original RDG’s Slice of Wheat menu board — confirm current prices with the cafe'));
document.getElementById('closeLightbox').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
document.getElementById('year').textContent=new Date().getFullYear();

// Accessible two-branch selector.
document.querySelectorAll('.branch-tab').forEach(button=>button.addEventListener('click',()=>{const branch=button.dataset.branch;document.querySelectorAll('.branch-tab').forEach(tab=>{const active=tab===button;tab.classList.toggle('active',active);tab.setAttribute('aria-pressed',String(active));});document.querySelectorAll('.branch-panel').forEach(panel=>{const active=panel.dataset.panel===branch;panel.classList.toggle('active',active);panel.hidden=!active;});}));
