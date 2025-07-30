# Introduccion a Git y GitHub

## Comandos Basicos:

- `ls`: Lista todas las carpetas y archivos del directorio
- `ls -a`: Lista todas las carpetas y archivos del directorio incluyendo los archivos ocultos
- `cd`: Navega al directorio principal
- `cd nombreDeLaRuta`: Navega al directorio indicado
- `cd ..`: Navega un directorio para atras
- `pwd`: Muestra la ruta completa del directorio
- `mkdir nombreDeLaCarpeta`: Crea una carpeta nueva
- `touch nombreDelArchivo`: Crea un nuevo archivo

> [!WARNING]
> Tiene que especificar el tipo de archivo a crear. Por ejemplo .css .html .md .js

## Configurar Git por primera vez

1. Configurar su nombre de usuario

```bash
git config --global user.name "nombreDeUsuarioDeGitHub"
```

2. Configurar su email de GitHub

```bash
git config --global user.email "emailDeGitHub@mail.com"
```

- Para verificar que todo este correcto:

```bash
git config user.name
```

> [!NOTE]
> Este comando verifica y devuelve su nombre de usuario

```bash
git config --list
```

> [!NOTE]
> Este comando verifica y devuelve una lista completa de sus datos

## Inicializar un REPOSITORIO con comando que tira GitHub

```bash
echo "# Gen_103" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/abigail-salas/Gen_103.git
git push -u origin main
```

> [!NOTE]
> ↑↑↑↑ Serie de comando que da github a la hora de crear un nuevo repositorio

1. `echo "# Gen_103" >> README.md` (opcional)

   - Crea un archivo llamado "README.md"

2. `git init` (se usa **una sola vez, _OBLIGATORIO_**)

   - Inicializa un nuevo repositorio de Git en el directorio actual

3. `git add README.md` o `git add .` (se va a utilizar en más de una ocasion)

   - Agrega el archivo "README.md" (o cualquier otro archivo o carpeta que se indique Ej `index.html`) al _area de preparacion_. Con el `.` general, agregamos TODOS los archivos y carpetas del directorio

4. `git commit -m "first commit"` (se va a utilizar en más de una ocasion)

   - Registra todos los cambios que se agregaron anteriormente al _area de preparacion_ con un comentario en especifico haciendo referencia al cambio hecho. En este caso es "first commit"

5. `git branch -M main` (se usa **una sola vez, _OBLIGATORIO_**)

   - Crea y cambia a la rama "main", que sera la rama principal

6. `git remote add origin https://github.com/abigail-salas/Gen_103.git` (se usa **una sola vez, _OBLIGATORIO_**)

   - Enlaza su repositorio local con el reposirotio remoto de GitHub

7. `git push -u origin main` (se va a utilizar en más de una ocasion sin el "-u")

   - Sube todos los cambios subidos y comentados al repositorio remoto

## Inicializar un REPOSITORIO con comando propios

> [!CAUTION]
> **se usan una sola vez, de manera _OBLIGATORIA_**

1. Inicializamos el repositorio

   ```bash
   git init
   ```

2. Creamos y cambiamos a la rama "main"

   ```bash
   git branch -M main
   ```

3. Enlazamos nuestro repositorio local con el remoto

   ```bash
   git remote add origin https://github.com/abigail-salas/Gen_103.git
   ```

## Comando a realizar cada vez que hay un cambio a subir

> [!IMPORTANT]
> **se usan en más de una ocasion**

1. Subimos los cambios al _area de preparacion_

   ```bash
   git add .
   ```

2. Comentamos / registramos los cambios subidos al _area de preparacion_

   ```bash
   git commit -m "comentario relacionado"
   ```

3. Subimos todos los cambios al repositorio remoto

   ```bash
   git push origin main
   ```

## Otros cambios útiles de Git

- Ver en qué estado esta el repositorio

```bash
git status
```

- Ver el historial de commits

```bash
git log
```

- Clonar un repositorio

```bash
git clone https://github.com/abigail-salas/Gen_103.git
```
