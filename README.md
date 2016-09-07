# private-properties
Provides a way of storing private properties in objects

```shell
npm i private-properties -S
```

```javascript
const pp = require('private-properties');

// creates new key and returns a function
let _ = pp("MyClass-private")

class MyClass {
  constructor() {
    // returns a object
    _(this).somePrivateStuff = "private";
  }
}
```

# privatePropterties
the function takes a string that acts as a description for the private key. It returns a function that can be used to retrieve the privat object.
