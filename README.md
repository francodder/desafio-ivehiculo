# IVehiculo
Este proyecto es el resultado de un desafío técnico.

## Consigna
Tengo una interfaz IVehiculo con los siguientes métodos:
- ArrancarVehiculo()
- Avanzar()
- Frenar()
- EncenderRadio()
- ApagarRadio()
- EncenderLuces()
- HacerSonarBocina()

Como me contrataron de una concesionaria de autos y camiones, mi interfaz funciona perfecto. Pero resulta que en la concesionaria deciden comenzar a vender bicicletas y monopatines eléctricos que, si bien son vehículos, hay métodos que no tienen sentido implementar. Cómo puedo sortear esta situación?

## Solución
El desafío fue resuelto utilizando Typescript **(app.ts)**. Se creo una interfaz 'Vehiculo' que contiene los métodos más básicos (avanzar, frenar), luego se creo otra interfaz 'VehiculoMotorizado' que hereda de la primera, esta tiene algunos métodos correspondientes a vehículos con motor (arrancar, luces, bocina). Por último se creo una interfaz 'IVehiculo' que hereda de 'VehiculoMotorizado' y añade los ultimos métodos necesarios (radio).
Para demostrar la estructura de interfaces se crearon las clases Camion, Auto, MonopatinElectrico y Bicicleta. Cada una de estas clases implementa su correspondiente interfaz.

