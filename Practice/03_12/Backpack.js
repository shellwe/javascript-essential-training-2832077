/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

export class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

export class Laptop {
  constructor(
    brand,
    screenSize,
    ram,
    ledKeyboard,
    storage,
    processorBrand,
    speed,
    cores,
    sdCardInserted
  ) {
    this.brand = brand;
    this. screenSize = screenSize;
    this.ram = ram;
    this.ledKeyboard = ledKeyboard;
    this.storage = storage;
    this.processor = {
      brand: processorBrand,
      speed: speed,
      cores: cores
    }
    this.sdCardInserted = sdCardInserted;
  }

  removeSdCard(removeSdCard) {
    this.sdCardInserted = removeSdCard;
  }

}