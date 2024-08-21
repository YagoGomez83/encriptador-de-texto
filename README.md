# Encriptador-de-texto
Proyecto Challenge de Alura (Encriptador de texto): tecnologías HTML, CSS JavaScript 
## Características
- **Encriptación de texto**: Convierte las vocales del texto en combinaciones de caracteres para ocultar su contenido.
- **Desencriptación de texto**: Restaura el texto encriptado a su forma original.
- **Validación de entrada**: Solo permite letras minúsculas y espacios, sin acentos.
- **Interfaz simple y amigable**: Incluye una área de texto para la entrada, botones de encriptar y desencriptar, y una opción para copiar el resultado.
## Tecnologías Utilizadas
- **HTML5**: Estructura de la aplicación.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript**: Lógica de encriptación, desencriptación y validación.

  ## USO
  1. Clona este repositorio en tu máquina local.
   ```bash
   git clone https://github.com/tu-usuario/encriptador-de-texto.git
   ```
2. Navega a la carpeta del proyecto.
   ```bash
   cd encriptador-de-texto
   ```
3. Abre el archivo `index.html` en tu navegador preferido.

## Funcionamiento

1. **Ingresar Texto**: Escribe o pega el texto que deseas encriptar en el área de texto.
2. **Encriptar**: Presiona el botón "Encriptar" para transformar las vocales del texto según las siguientes reglas:
   - `e` se convierte en `enter`
   - `i` se convierte en `imes`
   - `a` se convierte en `ai`
   - `o` se convierte en `ober`
   - `u` se convierte en `ufat`
3. **Desencriptar**: Si tienes un texto encriptado con el mismo método, puedes desencriptarlo presionando el botón "Desencriptar".
4. **Copiar**: Una vez encriptado o desencriptado el texto, puedes copiarlo al portapapeles usando el botón "Copiar".

## Ejemplo de Encriptación

- Texto original: `hola mundo`
- Texto encriptado: `hoberlai munderfat`
