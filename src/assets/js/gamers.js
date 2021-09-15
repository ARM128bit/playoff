import names from "../name";
import lastnames from "../secondname";
export default class Gamers {
  constructor(name) {
    this.name = name;
    this.combintaionCount();
  }
  combintaionCountOfFullName = 0;
  getRandomName() {
    let _name = names[Math.floor(Math.random() * names.length)];
    let _surname = lastnames[Math.floor(Math.random() * lastnames.length)];
    const _regNameCyrilic = /[\w\u0430-\u044f]+а$/g;
    const _regSurnameCyrilic = /[\w\u0430-\u044f]+(о|он|вич)$/g;
    _surname =
      _regNameCyrilic.test(_name) && !_regSurnameCyrilic.test(_surname)
        ? `${_surname}а`
        : _surname;
    return `${_name} ${_surname}`;
  }
  fillGamerArray(array) {
    let _fullName = this.getRandomName();
    if (array.indexOf(_fullName) >= 0) {
      return this.fillGamerArray(array);
    }
    array.push(_fullName);
    return array;
  }
  combintaionCount() {
    this.combintaionCountOfFullName = names.length * lastnames.length;
  }
}
