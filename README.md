
# Prueba técnica — React developer

He usado Vite para crear el proyecto de React con JS. No he usado Redux ni ningún contexto porque no creo que tuviera mucho sentido implementarlo en esta situacíon, ya que la estructura de componentes era muy simple.

En el primer commit no he podido acabar. Me falta los estilos para resoluciones mayores al movil. El hover sobre la card de la pelicula. El popUp. Estado de loading y error. La parte opcional. Testing.

Voy a seguir para acabarlo y dejarlo un poco mejor y rellenar correctamente el readme.

Segundo commit con todo lo básico implementado. Estilos acabados (con mobile-first). Manejo de carga y error. Faltan los test y las cosas opcionales. Continuare con ellas después.

Tercer commit con el añadido de las implementaciones opcionales. Falta arreglar un poco el componente Gallery.jsx que tiene demasiada logica junta y se pueden separar algunas cosas todavia en componentes mas pequeños. Tambien falta el testing.

Cuarto commit donde he configuado el testing y he hecho algunos test. Tengo un poco verdes los test con fetch y actulizacion de dom. Tengo que pegarle un repaso para poder terminarlos y dejarlo acabado.

Creo que he implementado las funcionalidades bastante bien. Podría mejorar el desplegable para elegir año por si la data recoge un numero muy alto de años, que este limitado a un tamaño y tenga un scroll. O quiza que fuera un input de texto limitado un poder poner un digito de 4 cifras y que sino exista la busqueda salga vacia y muestre un texto de no resultados. También quizá anclar la paginación en el bottom del contenedor cuando no este lleno de elementos. Los estilos podrian estar mejor también.

Con más tiempo habría analizado mejor el contenido de la página y estructurado mejor los estilos y también planificar mejor como hacer los componentes para no tener que ajustar tanto.


## INICIAR EL PROYECTO

Primero hay que instalar node.js en su ultima version estable sino la tienes. Luego puedes descargar o clonar el repositorio. Una vez dentro del directorio en la terminal, usar los singuientes comandos:

~~~
npm install
~~~

para instalar todas las dependencia. Despues para iniciar el proyecto 

~~~
npm run dev
~~~

El proyecto se desplegará en uno de los puertos del LocalHost y ya solo queda abrirlo