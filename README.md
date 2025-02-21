# API de Productos y Carritos

Proyecto de servidor en Node.js con Express para gestionar productos y carritos de compra.


## Endpoints

- `/api/products` - Obtiene todos los productos
- `/api/products/:pid` - Obtiene un producto por ID
- `/api/products` (POST) - Agrega un nuevo producto
- `/api/products/:pid` (PUT) - Modifica un producto
- `/api/products/:pid` (DELETE) - Elimina un producto
- `/api/carts` (POST) - Crea un nuevo carrito
- `/api/carts/:cid` - Obtiene productos de un carrito
- `/api/carts/:cid/product/:pid` (POST) - Agrega producto al carrito
