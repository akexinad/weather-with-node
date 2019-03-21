setTimeout( () => {
  console.log('2 secs are up');
}, 2000);

const names = ['Andrew', 'Jen', 'Jess'];
const shortNames = names.filter( (name) => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout( () => {
    const data = {
      latitude: 0,
      longitude: 0
    }


    // NOTE:  If you don't explicitlt from a JS function, it will IMPLICITLY RETURN undefined.

    callback(data)
  }, 2000)

}

geocode('Philadephia', (data) => {
  console.log(data);
});


const add = (num1, num2, num3, hotdogs) => {
  setTimeout( () => {

    const total = num1 + num2 + num3;

    hotdogs(total);

  }, 2000)

}

add(1, 4, 7, (sum) => {
    console.log(sum) // Should print: 5
})
