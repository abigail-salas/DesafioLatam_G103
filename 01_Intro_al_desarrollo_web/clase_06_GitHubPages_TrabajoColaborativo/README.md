# Comandos para trabajo colaborativo

- Listar todas las ramas lcoales que hay en el repo. Resalta la actual con un asterisco

```bash
git branch
```

- Para crear una rama nueva

```bash
git branch nombreDeRama
```

- Se utiliza para cambiar entre ramas

```bash
git checkout nombreDeRama
```

- Crear y cambiar a una nueva rama con un solo comando

```bash
git checkout -b nombreDeRama
```

- Traer todos los cambios desde la rama

```bash
git pull origin nombreDeRama
```

# Simular un flujo de tranajo

### 1. Hacer Fork o no?

- **Fork**: Hacer un fork de un repo es útil cuando no tienen permiso de colaborador en el repo original. Un fork crea un nuevo repo que va a ser una copia del repo original. Lo crea en su cuenta de GitHub

- **Colaboracion**: Si fueron agregados como colaboradores en el repo, **NO es necesario hacer un fork**. Pueden trabajar directamente desde el repo original.

### 2. Clonar el repositorio

```bash
git clone https://github.com/usuario/repositorio.git
```

### 3. Creacion y uso de ramas

Para eviatr conflictos al trabajar sobre el mismo repo, cada colaborador debera **trabajar sobre su propia rama**

1. Primero se aseguran de estar en la rama principal (`main`) y que la copia local esté actualizada

```bash
git checkout main
git pull origin main
```

2. Pasamos a crear una nueva rama de trabajo. Esta rama debe tener un nombre de refencia a lo que van a trabajar o en su defecto su propio nombre o apellido

```bash
git checkout -b nombreDeRama
```

### 4. Subir y fusionar los cambios

1. **Desde tu rama** podés empezar a trabajar y hacer diferentes cambios. Luego, subiras los cambios realizados desde tu propia rama

```bash
git add .
git commit -m "commit de refencia"
git push origin nombreDeSuRama
```

### 5. Fusionar y actualizar las ramas

1. Tarea del dueño del repositorio:

- Se cambia a la rama del compañero (Ej: rama-camilo, rama-juan, etc), haz click en el boton "Create Pull Request" y se abre el PR
- Se procede a verificar las ramas que van a combinar. Base main, compare rama-camilo
- Haz click en "Create pull request"
- Procede a revisar que no haya conflictos y esté todo correcto. De lo contrario, solucionar los coonflictos.
- Haz click en "Merge pull request"
- Haz click en "Confirm merge"

### 5. Actualizar tu repositorio local

1. Tareas de colaboradores y dueño (cada uno con sus proopias ramas)

- Movemos a la rama main y traemos los cambios

```bash
git checkout main
git pull origin main
```

2. Volvemos a la rama personal y fusinamos con la rama main

```bash
git checkout mi-rama
git merge main
```

3. Si aparecen conflictos de choque de codigo, se resuleven en el momento

4. Se sigue trabajando normalmente (crear, editar y luego subir)

```bash
git add .
git commit -m "commit de refencia"
git push origin nombreDeSuRama
```
