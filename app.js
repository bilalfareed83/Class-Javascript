class Msg {
  constructor(name1, name2) {
    this.flag = false;
    this.fname = name1;
    this.lname = name2;
  }
  printMsg() {
    console.log(`Welcome ${this.fname} ${this.lname}`);
  }
}

// printMsg();

const abc = new Msg('Bilal', 'Fareed');
const xyz = new Msg('Sajjad', 'Bhojani');
abc.printMsg();
console.log(xyz);
xyz.printMsg();
