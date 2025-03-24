// Este código debe añadirse al final de tu HTML, justo antes de cerrar </body>
// O puedes guardarlo como un archivo .js separado e incluirlo con <script src="tuarchivo.js"></script>

document.addEventListener('DOMContentLoaded', function() {
  // Elementos principales
  const menuDisplay = document.getElementById('menu-display');
  const playButton = document.getElementById('play');
  const spectateButton = document.getElementById('spectate');
  const gameDisplay = document.getElementById('game-display');
  const hudDisplay = document.getElementById('hud-display');
  
  // Función para ocultar el menú e iniciar el juego
  function startGame(spectatorMode = false) {
    // Ocultar el menú
    menuDisplay.classList.remove('visible');
    menuDisplay.classList.add('hidden');
    menuDisplay.classList.remove('pointer-events-all');
    menuDisplay.classList.add('pointer-events-none');
    
    // Hacer visible el juego y el HUD
    gameDisplay.classList.add('visible');
    gameDisplay.classList.remove('hidden');
    hudDisplay.classList.add('visible');
    hudDisplay.classList.remove('hidden');
    hudDisplay.classList.add('pointer-events-all'); // Permitir interacción con el HUD
    
    console.log(spectatorMode ? 'Iniciando en modo espectador' : 'Iniciando juego');
    
    // Aquí iría el código para iniciar el juego
    // Este código probablemente ya exista en tu main.bundle.js
  }
  
  // Función para mostrar el menú (para ESC)
  function showMenu() {
    // Mostrar menú
    menuDisplay.classList.add('visible');
    menuDisplay.classList.remove('hidden');
    menuDisplay.classList.add('pointer-events-all');
    menuDisplay.classList.remove('pointer-events-none');
    
    // Opcionalmente, pausar el juego si está implementado en tu juego
    console.log('Menú mostrado');
  }
  
  // Asignar eventos a los botones
  playButton.addEventListener('click', function() {
    startGame(false);
  });
  
  spectateButton.addEventListener('click', function() {
    startGame(true);
  });
  
  // Capturar tecla ESC para mostrar el menú
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      // Solo mostrar el menú si no está ya visible
      if (menuDisplay.classList.contains('hidden')) {
        showMenu();
      }
    }
  });
  
  // Arreglo para asegurar que el menú esté centrado
  const menuContainer = document.querySelector('.menu-container');
  if (menuContainer) {
    menuContainer.style.margin = '0 auto';
  }
  
  // Sobrescribir cualquier evento existente en los botones (por si acaso)
  // Esta técnica utiliza la propiedad onclick directamente
  playButton.onclick = function() {
    startGame(false);
    return false; // Prevenir comportamiento por defecto
  };
  
  spectateButton.onclick = function() {
    startGame(true);
    return false; // Prevenir comportamiento por defecto
  };
  
  console.log('Sistema de menú inicializado correctamente');
});
