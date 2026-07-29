export function Card({ titulo, descripcion, imagen, precio }) {
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