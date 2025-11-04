# 🧩 Documento de Requerimientos – Módulo de Autenticación y Registro

## 1. Información General del Proyecto
**Integrantes:** Jorge Andres Florez Velez, Hans Sebastian Velasquez Cordoba, Ana Sofia Gallego Toro, Cristian Villada Caro, Santiago Metaute Londoño, Julian David Diaz Giraldo.

**Institución:** Centro de Estudios Especializados CESDE  
**Programa:** Desarrollo de Software  
**Grupo:** G7 SURA  
**Proyecto:** Autenticación y Registro  
**Docentes:** Valeria Grajales Marín, Miguel Octaviano Jaramillo, Daniel Morales  
**Tipo de Proyecto:** Diseño y construcción de un prototipo de software  
**Palabras clave:** Técnica, Proceso, Información, Aprendizaje, Dinamismo, Eficiencia  

---

## 2. Resumen

Este documento presenta los requerimientos para el desarrollo del módulo de **Autenticación y Registro**, parte de una plataforma digital destinada a servir como fuente de aprendizaje y apoyo para los colaboradores del Campus Corporativo.

El módulo busca implementar un sistema de registro e inicio de sesión seguro, sencillo y adaptable, garantizando la integridad y confidencialidad de los datos personales del usuario.

---

## 3. Objetivo General

Desarrollar un módulo que permita al colaborador **registrarse e iniciar sesión** de forma ágil y segura, con una experiencia de usuario simple y accesible desde cualquier dispositivo.

---

## 4. Requerimientos del Sistema

### 4.1 Requerimientos Funcionales

#### RF01 – Acceso al sitio web  
El sistema permitirá a los usuarios visitar e interactuar con el sitio web de manera normal.

#### RF02 – Registro de usuario y administrador  
El sistema permitirá crear cuentas nuevas, tanto para usuarios como para administradores.  
La contraseña deberá contener al menos:
- 8 caracteres  
- 1 letra mayúscula  
- 1 número  

Solo se permitirá una cuenta por correo electrónico.  
Si el correo ya está registrado, el sistema mostrará un mensaje indicando que la cuenta existe.

#### RF03 – Inicio de sesión  
El usuario podrá iniciar sesión desde cualquier dispositivo (PC, tableta o móvil), siempre que tenga una cuenta previamente creada.

#### RF04 – Recuperación de cuenta  
El sistema permitirá recuperar cuentas mediante un proceso de verificación:
1. Se enviará un código de seguridad al correo electrónico registrado.  
2. El usuario deberá ingresar su contraseña anterior para validación.  
3. Podrá establecer una nueva contraseña distinta de la anterior.  

---

### 4.2 Requerimientos No Funcionales

#### RNF01 – Seguridad de datos  
El acceso y la manipulación de la base de datos estarán restringidos exclusivamente al personal autorizado del área de desarrollo y tecnología.

#### RNF02 – Compatibilidad del sistema  
El sistema deberá ser funcional en los navegadores **Google Chrome**, **Mozilla Firefox** e **Internet Explorer**.

#### RNF03 – Interfaz gráfica  
El sistema contará con una interfaz gráfica **sencilla, responsiva y de fácil uso**, desarrollada con **HTML** y **CSS**, adaptable a distintos tamaños de pantalla.

#### RNF04 – Entorno de desarrollo  
El entorno de desarrollo utilizado será **Visual Studio Code**.

---

## 5. Conclusión

El módulo de autenticación y registro propuesto busca ofrecer una experiencia de usuario intuitiva y segura, cumpliendo con los estándares de diseño y accesibilidad requeridos para un entorno corporativo de aprendizaje digital.