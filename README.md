# TomasRM07.github.io
# CarDDex — Tienda de Cartas Pokémon TCG

**URL del proyecto:** TomasRM07.github.io


## Estructura del proyecto

AE6-1/
├── index.html                 
├── README.md                  
├── css/
│   ├── genericos.css           
│   ├── body.css                
│   ├── header.css              
│   ├── footer.css              
│   ├── index.css               
│   ├── tienda.css              
│   ├── nosotros.css            
│   └── contacto.css            
├── html/
│   ├── tienda.html             
│   ├── nosotros.html           
│   └── contacto.html           
├── images/
│   ├── Logo.png                
│   ├── main/                   
│   ├── nosotros/               
│   └── tienda/                 
└── pdf/
    └── condiciones.pdf         

## Navegación por el sitio

El menú de navegación está presente en todas las páginas en la cabecera superior. Los enlaces disponibles son:

- **INICIO** → Página principal con el slider de cartas y la sección informativa.
- **TIENDA** → Catálogo con las cartas disponibles para comprar.
- **NOSOTROS** → Información sobre la empresa y el equipo.
- **CONTACTO** → Formulario de contacto y redes sociales.

## Tema visual global

El modelo original usa un fondo blanco con acentos en naranja. En este caso se aplica un diseño completamente diferente con tonos oscuros y violetas. El fondo está compuesto por tres degradados radiales superpuestos en tonos morados y azules que generan profundidad visual sin necesidad de imágenes. También se define una paleta de once variables de color para mantener la coherencia visual en todos los estilos. En cuanto a tipografía, el modelo utiliza fuentes del sistema, mientras que aquí se importan dos fuentes de Google Fonts: Cinzel para títulos y elementos de marca, y Raleway para el texto general.

## Header

El modelo original presenta un encabezado blanco con texto negro y botones naranjas. En este caso se utiliza un encabezado oscuro y ligeramente transparente que permanece fijo en la parte superior al hacer scroll. El borde inferior tiene un efecto luminoso en tono violeta. La navegación está centrada mediante posicionamiento absoluto para mantenerla alineada independientemente del logo o de los botones. Los enlaces del menú tienen un subrayado animado que se expande de izquierda a derecha al pasar el cursor. Los botones se diferencian visualmente: uno es transparente con borde violeta y el otro tiene un degradado morado. Ambos se elevan ligeramente al pasar el cursor. En pantallas menores de 900 px el menú de navegación se oculta.

## Inicio

El contenedor del slider tiene bordes redondeados, un borde semitransparente violeta y un efecto de brillo interior. La animación se realiza únicamente con CSS, desplazando los slides horizontalmente en un bucle continuo de 15 segundos. La imagen principal tiene un efecto luminoso pulsante mediante un degradado circular que aumenta y disminuye de tamaño. El título usa una sombra de texto violeta que crea un efecto de brillo. La sección informativa muestra las imágenes ligeramente apagadas al inicio y recuperan brillo al pasar el cursor. En pantallas menores de 900 px el contenido pasa a organizarse en columna y en 600 px se reducen tamaños de texto e imágenes.

## Tienda

El modelo muestra tarjetas verticales en dos columnas. Aquí las tarjetas son horizontales: imagen a la izquierda e información a la derecha. Las imágenes aparecen en escala de grises y recuperan su color al pasar el cursor. Cada tarjeta incluye una etiqueta de categoría redondeada y un icono de búsqueda que aparece solo al hacer hover. Debajo del botón de compra se añade una sección adicional con tres elementos no presentes en el modelo: un botón de favoritos con icono de corazón, una barra de stock con colores que cambian según la cantidad disponible, y una zona de valoraciones con estrellas doradas y número de reseñas.

## Nosotros

El modelo muestra imagen arriba y texto abajo en una sola columna. Aquí se usa un diseño de dos columnas con imagen a la izquierda y contenido a la derecha. La imagen tiene una capa de degradado violeta semitransparente y aparece ligeramente desaturada al inicio, recuperando su aspecto al pasar el cursor. Debajo del título aparece una línea decorativa con degradado. Los iconos de redes sociales tienen un efecto de expansión circular al hacer hover simulando una onda de color violeta, y aparecen en escala de grises hasta que el usuario interactúa.

## Contacto

El modelo presenta el formulario en una sola columna centrada. Aquí se reorganiza en dos columnas: información de contacto a la izquierda y formulario a la derecha. El formulario incluye validación visual con borde y sombra roja cuando un campo tiene contenido inválido, sin necesitar JavaScript. El selector desplegable se personaliza eliminando la flecha nativa del navegador. Se añaden campos adicionales: número de teléfono y selector de tema de consulta. Además se incluye un widget circular de redes sociales: un círculo central con el logo y cinco iconos distribuidos en pentágono alrededor. Cada icono se amplía y gira 360° en sentido antihorario al pasar el cursor.

## Footer

Se mantiene la estructura del modelo pero con un sistema de cuadrícula adaptable que reorganiza las columnas automáticamente. La parte superior tiene una línea violeta semitransparente separadora. Los iconos de redes sociales se elevan y muestran un brillo violeta al pasar el cursor. En 600 px el footer pasa a dos columnas y en 400 px a una sola.

## Diseño responsive

El modelo del vídeo no incluye comportamiento responsive. En este proyecto se implementan cuatro puntos de adaptación en todos los archivos CSS:

| Breakpoint | Cambios |
|---|---|
| < 1100 px | Imágenes de tarjetas de tienda reducidas |
| < 900 px | Menú oculto, layouts en columna, tarjetas en una columna |
| < 600 px | Tipografías y espacios reducidos, tarjetas verticales, footer en 2 columnas |
| < 400 px | Footer en 1 columna |