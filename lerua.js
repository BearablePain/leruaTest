const data = {
  displayedName: {
    displayedName: {
      value: ['Профиль маячковый ПВХ 10 мм L3м'],
      description: 'Полное наименование товара для клиента',
    },
  },
  stock: {
    stocks: {
      34: {
        2: '35',
        3: '42',
        4: '58',
        5: '57',
        6: '112',
        20: '51',
        22: '78',
        26: '34',
        32: '22',
        35: '358',
        40: '28',
        43: '68',
        45: '58',
        49: '31',
        51: '29',
        56: '42',
        62: '26',
        64: '0',
        65: '57',
        86: '15',
        114: '41',
        117: '46',
        143: '46',
        162: '4',
        171: '0',
        176: '12',
      },
    },
  },
};

class Store {
  constructor(data, region) {
    this.region = region;
    this.data = data;
    this.stocks = data?.stock?.stocks?.[region];
  }

  getName = () =>
    this.data?.displayedName?.displayedName?.value[0]
      ? this.data?.displayedName?.displayedName.value[0]
      : new Error('одно из свойств объекта отсутствует');

  getActualStocks = () => {
    const arrayNumbersStocks = [];
    for (const key in this.stocks) {
      if (this.stocks[key] != 0) {
        arrayNumbersStocks.push(key);
      }
    }
    return arrayNumbersStocks;
  };

  findStoreMaxQuantityGoods = () => {
    // Получить все значения
    let arrayCountGoods = Object.values(this.stocks);

    // Найти максимальное количество
    const maxCount = Math.max(
      ...arrayCountGoods.map((el) => Number(el))
    ).toString();

    // Перебрать объект чтобы вернуть магазин с максимальным количеством товара
    for (const key in this.stocks) {
      if (this.stocks[key] === maxCount) {
        return { [key]: maxCount };
      }
    }
  };
}

const Store34 = new Store(data, 34);
console.log(Store34.getName());
console.log(Store34.getNumbersStouns());
console.log(Store34.findStoreMaxQuantityGoods());
