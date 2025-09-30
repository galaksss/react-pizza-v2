import totalPriceRecount from "../utils/totalPriceRecount";
const items = [ 
{id: '2', title: 'Диабло', price: 803, imageUrl: '/img/diablo.png', type: 'тонкое', size: 30, quantity: 1},
{id: '3', title: 'Чилл-грилл', price: 782, imageUrl: '/img/chillgrill.png', type: 'тонкое', size: 30, quantity: 1},
{id: '5', title: 'Додо микс', price: 869, imageUrl: '/img/mix.png', type: 'тонкое', size: 30, quantity: 1},]
test('Возвращаемое значение функции totalPriceRecount', () => {
  expect(totalPriceRecount(items)).toBe(803+782+869)
})
export {}