# 🎮 Sistema de Gestión de API de Productos

Un sistema completo para gestionar productos a través de una API REST con interfaz web y funciones de prueba automatizadas.

## 📁 Estructura del Proyecto

```
Entrenamiento3/
├── index.html          # Interfaz web principal
├── script.js           # Lógica JavaScript con funciones CRUD
├── style.css           # Estilos CSS para la interfaz
├── data.json           # Base de datos JSON con productos de ejemplo
└── README.md           # Este archivo de documentación
```

## 🚀 Configuración Inicial

### Requisitos Previos
- **JSON Server**: Debe estar ejecutándose en `http://localhost:3000/products`
- **Navegador web** con soporte para JavaScript ES6+

### Instalación y Ejecución
1. Instalar JSON Server globalmente:
   ```bash
   npm install -g json-server
   ```

2. Iniciar el servidor JSON:
   ```bash
   json-server --watch data.json --port 3000
   ```

3. Abrir `index.html` en tu navegador

4. Abrir la consola del navegador (F12) para ejecutar las funciones

## 📋 Funciones Disponibles

### Funciones Principales (CRUD)

#### `getProducts()`
- **Propósito**: Obtiene todos los productos de la API
- **Método**: GET
- **Retorna**: Tabla formateada en consola con todos los productos
- **Ejemplo**: `getProducts()`

#### `createProduct(productObject)`
- **Propósito**: Crea un nuevo producto
- **Método**: POST
- **Parámetros**: Objeto con campos requeridos (id, name, description, price, category, stock)
- **Validación**: Verifica que todos los campos estén completos y con tipos correctos
- **Ejemplo**:
  ```javascript
  createProduct({
    id: "10",
    name: "Gaming Mouse",
    description: "Mouse de alta precisión para gaming",
    price: 79.99,
    category: "accessories",
    stock: 15
  })
  ```

#### `updateProduct(id, updatedFields)`
- **Propósito**: Actualiza un producto existente
- **Método**: PUT
- **Parámetros**: 
  - `id`: ID del producto (string)
  - `updatedFields`: Objeto con solo los campos a actualizar
- **Validación**: Verifica tipos de datos y campos no vacíos
- **Ejemplo**:
  ```javascript
  updateProduct("1", {
    price: 199.99,
    stock: 25
  })
  ```

#### `deleteProduct(id)`
- **Propósito**: Elimina un producto permanentemente
- **Método**: DELETE
- **Parámetros**: `id` del producto (string)
- **Ejemplo**: `deleteProduct("3")`

### Funciones de Prueba (Fáciles de Usar)

#### `testGet()`
- **Propósito**: Ejecuta `getProducts()` de forma simplificada
- **Ejemplo**: `testGet()`

#### `testPost()`
- **Propósito**: Crea un producto de prueba predefinido (PlayStation 6)
- **Ejemplo**: `testPost()`

#### `testPut(id)`
- **Propósito**: Actualiza un producto con datos predefinidos
- **Ejemplo**: `testPut("2")`

#### `testDelete(id)`
- **Propósito**: Elimina un producto por ID
- **Ejemplo**: `testDelete("4")`

#### `createCustomProduct(id, name, description, price, category, stock)`
- **Propósito**: Crea productos sin sintaxis de objeto completa
- **Ejemplo**:
  ```javascript
  createCustomProduct("8", "iPhone 15", "Smartphone Apple", 999, "phones", 10)
  ```

#### `runAllTests()`
- **Propósito**: Ejecuta todas las operaciones CRUD en secuencia automática
- **Incluye**: GET → POST → PUT → DELETE → GET final
- **Ejemplo**: `runAllTests()`

## 📊 Estructura de Datos

### Producto
```json
{
  "id": "string",
  "name": "string",
  "description": "string", 
  "price": "number",
  "category": "string",
  "stock": "number"
}
```

### Validaciones
- **id**: Requerido, string
- **name**: Requerido, string no vacío
- **description**: Requerido, string no vacío
- **price**: Requerido, número
- **category**: Requerido, string no vacío
- **stock**: Requerido, número

## 🎨 Interfaz Web

### Características
- **Diseño responsive** con CSS moderno
- **Documentación integrada** en la página web
- **Ejemplos de código** para cada función
- **Advertencias** sobre configuración del servidor
- **Instrucciones claras** para uso de la consola

### Estilos
- Paleta de colores profesional
- Tipografía legible (Arial)
- Bordes redondeados y sombras
- Secciones bien organizadas
- Terminal simulado para instrucciones

## 🔧 Configuración del Servidor

### JSON Server
El proyecto utiliza JSON Server como backend simulado:

```bash
# Instalar JSON Server
npm install -g json-server

# Ejecutar servidor
json-server --watch data.json --port 3000
```

### Endpoints Disponibles
- `GET /products` - Obtener todos los productos
- `POST /products` - Crear nuevo producto
- `PUT /products/:id` - Actualizar producto
- `DELETE /products/:id` - Eliminar producto

## 📝 Datos de Ejemplo

El archivo `data.json` incluye 6 productos de ejemplo:
1. **Wireless Bluetooth Headphones** - $149.99
2. **Pro X Sports Smartwatch** - $299.99
3. **360° Wi-Fi Security Camera** - $89.99
4. **14'' Ultrabook Laptop Ryzen 7** - $899
5. **RGB Mechanical Keyboard** - $79.99
6. **iPhone 19 Pro Max** - $2600

## 🚨 Solución de Problemas

### Error: "could not get products"
- Verificar que JSON Server esté ejecutándose en puerto 3000
- Comprobar que `data.json` esté en la raíz del proyecto

### Error: "validation failed"
- Asegurar que todos los campos requeridos estén presentes
- Verificar que `price` y `stock` sean números
- Comprobar que campos de texto no estén vacíos

### Error: "failed to create/update/delete"
- Verificar que el servidor esté funcionando
- Comprobar la conectividad de red
- Revisar la consola del navegador para errores CORS

## 🎯 Casos de Uso

### Para Desarrolladores
- **Pruebas de API**: Usar `runAllTests()` para verificar endpoints
- **Desarrollo Frontend**: Integrar funciones en aplicaciones web
- **Aprendizaje**: Ejemplo completo de operaciones CRUD

### Para Usuarios Finales
- **Gestión de Inventario**: Agregar, modificar y eliminar productos
- **Consultas**: Ver listado completo de productos
- **Validación**: Sistema automático de validación de datos

## 📚 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos y responsive
- **JavaScript ES6+**: Lógica de aplicación
- **Fetch API**: Comunicación con servidor
- **JSON Server**: Backend simulado
- **Console API**: Visualización de datos

## 🤝 Contribución

Para contribuir al proyecto:
1. Fork el repositorio
2. Crear una rama para tu feature
3. Realizar cambios y pruebas
4. Enviar pull request

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo LICENSE para más detalles.

---

**Nota**: Este sistema está diseñado para fines educativos y de desarrollo. Para uso en producción, se recomienda implementar medidas de seguridad adicionales. 