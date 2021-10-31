interface Vehiculo {
    avanzar(): void,
    frenar(): void,
}

interface VehiculoMotorizado extends Vehiculo {
    arrancarVehiculo(): void,
    encenderLuces(): void,
    apagarLuces(): void,
    hacerSonarBocina(): void,
}

interface IVehiculo extends VehiculoMotorizado {
    endenderRadio(): void,
    apagarRadio(): void
}

// --------------------------------------------------------------

class Camion implements IVehiculo {

    arrancarVehiculo(): void {}
    avanzar(): void {}
    frenar(): void {}
    encenderLuces(): void {}
    apagarLuces(): void {}
    endenderRadio(): void {}
    apagarRadio(): void {}
    hacerSonarBocina(): void {}
}

class Auto implements IVehiculo {

    arrancarVehiculo(): void {}
    avanzar(): void {}
    frenar(): void {}
    encenderLuces(): void {}
    apagarLuces(): void {}
    endenderRadio(): void {}
    apagarRadio(): void {}
    hacerSonarBocina(): void {}
}

class MonopatinElectrico implements VehiculoMotorizado {

    arrancarVehiculo(): void {}
    avanzar(): void {}
    frenar(): void {}
    encenderLuces(): void {}
    apagarLuces(): void {}
    hacerSonarBocina(): void {}
}

class Bicicleta implements Vehiculo {

    avanzar(): void {}
    frenar(): void {}
}