1 Single Responsibility Principle
«Существует лишь одна причина, приводящая к изменению класса».

not correct
const getShowsAndMoviesAndMusic = () => {
  // make all in this function
};

correct
const getMedia = () => {
  const shows = getShows();
  const movies = getMovies();
  const music = getMusic();
};

2. Open-Closed Principle
«Программные сущности (классы, модули, функции и т.д.) должны быть открыты для расширения, но закрыты для изменения».

not correct (there’s no way to add an ice cream flavor without editing the iceCreamFlavor array)
let iceCreamFlavors=["chocolate","vanilla"];
let iceCreamMaker={
  makeIceCream (flavor) {
    if(iceCreamFlavors.indexOf(flavor)>-1){
      // do something
    }
  }
};
export default iceCreamMaker;

correct
let iceCreamFlavors=["chocolate","vanilla"];
let iceCreamMaker={
  makeIceCream (flavor) {
    if(iceCreamFlavors.indexOf(flavor)>-1){
      // do something
    }
  },
  addFlavor(flavor){
    iceCreamFlavors.push(flavor);
  }
};
export default iceCreamMaker;

3. Liskov Substitution Principle
«Подтипы должны быть заменяемы их исходными типами.».

not correct
class Book {
  getAuthor() {
    return {
      name: 'Ashutosh Singh',
      age: 27,
      address: 'India'
    };
  }
}

correct
class Book {
  getAuthor() { }
}

class Book1 extends Book {
  constructor() {
    super();
  }
  getAuthor() {
    return {
      name: super.getAuthor(),
      age: ''
    }
  }
}

class Book2 extends Book {
  getAuthor() {
    return {
      name: super.getAuthor(),
      age: '',
      address: ''
    }
  }
}

4. Interface Segregation
«Лучше много простых маленьких интерфейсов чем один большой и сложный».
 not correct
interface IBird {
  fly();
  run();
}

class Kingfisher implements IBird {
  fly() { }
  run() { } //not used
}

class Ostrich implements IBird {
  fly() { } //not used ostrich is not flying
  run() { }
}

correct
interface IKinshfisherBird {
  fly();
}
interface IOstrichBird {
  run();
}
class Kingfisher implements IKinshfisherBird {
  fly() { }
}
class Ostrich implements IOstrichBird {
  run() { }
}

5.Dependency Inversion Principle
High level modules should not depend upon low level modules. Rather, both should depend upon abstractions.
  not correct
class Login {
  login(googleLogin: any) {
    // some code which will be used for google login.
  }
}

correct
interface ISocialLogin {
  login(options: any);
}

class GoogleLogin implements ISocialLogin {
  login(googleLogin: any) {
    // some code which will be used for google login.
  }
}

class FBLogin implements ISocialLogin {
  login(fbLogin: any) {
    // some code which will be used for fb login.
  }
}
