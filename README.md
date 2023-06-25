# Techbook Store

Un E-Commerce de libros y laptops

## Backend

Si no funciona
```npm run dev```
usar
```npm run start```

El .env incluido es para una base de datos, hosteada por nosotros, que funciona remotamente.
Puede cambiar el .env para utilizar su propia base de datos.

### Consultas:
```
/tags [GET] -> Devuelve todos los tags registrados en el sistema
```
```
/products [GET] -> Devuelve todos los productos registrados en el sistema

	Filtros (Se puede usar cualquier combinacion de ellos):
		?min_precio=[int]
		?max_precio=[int]
		?tipo=['Todo' / 'Laptop' / 'Libro']
		?tag=['Todo' / string]
		?vendor_id=[int]
```
```
/products/[id] [GET] -> Devuelve el producto registrado en el sistema con el id especificado
```
```
/products [POST] -> Crea un nuevo producto

	Body:
		{
			name: [string],
			description: [string],
			stock: [int],
			image: [url],
			price: [decimal],
			type: ['Todo' / 'Laptop' / 'Libro'],
			vendor_id: [int],
			tags: [ string[] ] (En el caso de que un tag no exista en el sistema, se crea)
		}
```
```
/users/[name] [GET] -> Devuelve el usuario registrado en el sistema con el nombre especificado
```
```
/users [POST] -> Crea un nuevo usuario

	Body:
		{
			name: [string],
			password: [string],
			email: [string (email)],
			credit_card: [string (10 caracteres)],
			address: [string],
			document: [string (8 caracteres)],
			phone_number: [string (10 caracteres)],
			vendor: [bool]
		}
```
```
/users/[name] [PUT] -> Modificar datos de un usuario

	Body:
		{
			name: [string],
			email: [string (email)],
			credit_card: [string (10 caracteres)],
			address: [string],
			document: [string (8 caracteres)],
			phone_number: [string (10 caracteres)]
		}
```
```
/users/[name] [DELETE] -> Borra un usuario
```
```
/users/login [GET] -> Verificar el login de un usuario

	Body:
		{
			name: [string],
			password: [string]
		}
```

## Frontend

Iniciar con
```npm run dev```

En el caso de no estar corriendo el backend, no se puede garantizar el funcionamiento completo de la pagina.
