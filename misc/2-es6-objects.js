// Object property shorthand.

const name = "Andrew";
const userAge = "27";
// const age = "27";

const user = {
  name,
  age: userAge,
  location: 'Philadelphia'
}

// console.log(user);

// Object destructuring

const product = {
  label: 'Red Note Book',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

console.log('Product before destructuring process:\n', product);

// const {
//   label:productLabel,
//   stock,
//   rating = 5
// } = product;
//
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const {
  label:foo
} = product;

console.log(foo);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
}

transaction('Here goes the type: order', product)
