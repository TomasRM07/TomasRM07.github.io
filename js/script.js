function elegirInicial() {
    var starters = [
        {
            nombre: 'Treecko',
            tipo: 'TIPO PLANTA',
            emoji: '🍃',
            clase: 'planta'
        },
        {
            nombre: 'Torchic',
            tipo: 'TIPO FUEGO',
            emoji: '🔥',
            clase: 'fuego'
        },
        {
            nombre: 'Mudkip',
            tipo: 'TIPO AGUA',
            emoji: '💧',
            clase: 'agua'
        }
    ];

    var elegido = starters[Math.floor(Math.random() * starters.length)];

    var card = document.getElementById('starter-card');
    var resultado = document.getElementById('starter-resultado');

    card.className = 'starter-card ' + elegido.clase;
    document.getElementById('starter-emoji').textContent = elegido.emoji;
    document.getElementById('starter-nombre').textContent = elegido.nombre;
    document.getElementById('starter-tipo').textContent = elegido.tipo;

    resultado.className = 'starter-resultado visible';
}