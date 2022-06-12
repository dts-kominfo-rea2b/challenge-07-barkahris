const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async value => {
  let [dataIXX, dataVGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    .then(res => res)
    .catch(err => console.log(err))

  let result = 0
  let arrData = []
  if (Array.isArray(dataIXX) && Array.isArray(dataVGC)) {
    arrData = [...dataIXX, ...dataVGC]
    result = arrData.filter(item => item.hasil === value).length
  }
  return result
};


module.exports = {
  promiseOutput,
};
