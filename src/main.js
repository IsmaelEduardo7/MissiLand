import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'
import 'flowbite';

// 1. Componente de Tarjeta (Definido aquí para evitar errores de importación)
function Card({ titulo, descripcion, imagen, precio }) {
    return `
        <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg flex flex-col justify-between">
            <div class="px-4 py-3">
                <h2 class="text-lg font-bold text-gray-800 uppercase">${titulo}</h2>
                <p class="mt-1 text-xs text-gray-500">${descripcion}</p>
            </div>

            <img class="object-cover w-full h-48" src="${imagen}" alt="${titulo}">

            <div class="flex items-center justify-between px-4 py-3 bg-purple-900">
                <span class="text-lg font-bold text-white">$${precio}</span>
                <button class="px-3 py-1.5 text-xs font-bold text-purple-900 uppercase transition-colors duration-300 bg-purple-200 rounded hover:bg-purple-300">
                    Añadir
                </button>
            </div>
        </div>
    `;
}

// 2. Datos de tus 4 componentes de juegos
const juegos = [
    {
        titulo: "Cyberpunk 2077",
        descripcion: "Un RPG de acción y aventura en el fascinante mundo abierto de Night City.",
        imagen: "/imgs/cyber.png",
        precio: "59.99"
    },
    {
        titulo: "Elden Ring",
        descripcion: "Levántate, Sinluz, y déjate guiar por la gracia para esgrimir el poder del Círculo.",
        imagen: "/imgs/eldem.jpg",
        precio: "69.99"
    },
    {
        titulo: "GTA VI",
        descripcion: "Revive la época dorada con el reciente y gran nuevo juego, que rompe expectativas.",
        imagen: "/imgs/gta6.jpg",
        precio: "99.99"
    },
    {
        titulo: "EA Sports FC 27",
        descripcion: "Es el simulador de fútbol de Electronic Arts, destacando por el modo mundo abierto.",
        imagen: "/imgs/fifa27.jpg",
        precio: "89.99"
    }
];

// 3. Render de la portada principal (solo si existe #app)
const app = document.querySelector('#app');
if (app) {
  app.innerHTML = `
  <section id="center">
    <div class="hero">
      <img src="${heroImg}" class="base" width="170" height="179">
      <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
      <img src="${viteLogo}" class="vite" alt="Vite logo" />
    </div>
    <div>
      <h1>Get started</h1>
      <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
    </div>
    <button id="counter" type="button" class="counter"></button>
  </section>

  <div class="ticks"></div>

  <section id="next-steps">
    <div id="docs">
      <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
      <h2>Documentation</h2>
      <p>Your questions, answered</p>
      <ul>
        <li>
          <a href="https://vite.dev/" target="_blank">
            <img class="logo" src="${viteLogo}" alt="" />
            Explore Vite
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img class="button-icon" src="${javascriptLogo}" alt="">
            Learn more
          </a>
        </li>
      </ul>
    </div>
    <div id="social">
      <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
      <h2>Connect with us</h2>
      <p>Join the Vite community</p>
      <ul>
        <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
        <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
        <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
        <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
      </ul>
    </div>
  </section>

  <div class="ticks"></div>
  <section id="spacer"></section>
  `;

  const counterBtn = document.querySelector('#counter');
  if (counterBtn) {
    setupCounter(counterBtn);
  }
}

// 4. Render directo para el catálogo/nosotros
function renderCatalogo() {
    const contenedor = document.getElementById('grid-juegos');
    if (contenedor) {
        contenedor.innerHTML = juegos.map(juego => Card(juego)).join('');
    }
}

renderCatalogo();
document.addEventListener('DOMContentLoaded', renderCatalogo);