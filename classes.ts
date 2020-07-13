class Vehicle {
  drive(): void {
    console.log('hello world')
  }

  honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();