import { AddOn, AddOnJSON } from "./AddOn";

/**
 * A class to represent an individual car that is being
 * viewed and configured in the user interface.
 */
export class Car {
  kilometres: number;
  price: number;
  make: string;
  model: string;
  year: number;
  id: number;
  addOns: Map<string, AddOn>;

  /**
   * Constructs a new Car with the given price, name, year
   * and empty AddOns map.
   * Price of the car initially set to -1 as price of the car is not know during initialization
   * @param kilometres The kilometres of the car
   * @param make The make of the car
   * @param model The model of the car
   * @param year The model year of the car
   * @param price The price of the car
   * @param id The id of the car in the database
   * @param addOns A mapping of addon names to AddOn objects
   */
  constructor(
    kilometres: number,
    price: number,
    make: string,
    model: string,
    year: number,
    id: number,
    addOns: Map<string, AddOn> = new Map()
  ) {
    this.kilometres = kilometres;
    this.make = make;
    this.price = price;
    this.year = year;
    this.model = model;
    this.id = id;
    this.addOns = addOns;
  }

  static from(json: CarJSON) {
    return new Car(
      json.kilometres,
      json.price,
      json.make,
      json.model,
      json.year,
      json.id,
      json.addOns
        ? new Map(
            Object.keys(json.addOns).map((k) => {
              return [k, json.addOns[k]];
            })
          )
        : undefined
    );
  }

  toJSON() {
    let addOnObject: { [key: string]: AddOn } = {};
    return {
      ...this,
      addOns: [...this.addOns.values()].reduce((obj, v) => {
        obj[v.name] = v;
        return obj;
      }, addOnObject),
    };
  }
}

export type CarJSON = {
  kilometres: number;
  price: number;
  make: string;
  model: string;
  year: number;
  id: number;
  addOns: { [key: string]: AddOnJSON };
};
