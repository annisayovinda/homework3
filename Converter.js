class Converter {
  toReamur(suhu, nilai) {
    if (suhu === "celcius") {
      return (nilai / 5) * 4;
    } else if (suhu === "fahreinheit") {
      return ((nilai - 32) / 9) * 4;
    } else {
      return nilai;
    }
  }
  toCelcius(suhu, nilai) {
    if (suhu === "reamur") {
      return (nilai / 4) * 5;
    } else if (suhu === "fahreinheit") {
      return ((nilai - 32) / 9) * 5;
    } else {
      return nilai;
    }
  }
  toFahreinheit(suhu, nilai) {
    if (suhu === "reamur") {
      return nilai / 4 + 32;
    } else if (suhu === "celcius") {
      return (nilai / 5) * 9 + 32;
    } else {
      return nilai;
    }
  }
}
module.exports = Converter;
