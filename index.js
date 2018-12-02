let john = {
  fullName: "John Smith",
  bills: [124, 48, 375, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      // determine percentages based on tipping rules
      let percentage;
      let bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      // Add result to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + this.tips[i];
    }
  }
};

let mark = {
  fullName: "Mark Manson",
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      // get percentage
      let percentage;
      let bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      // get final amount paid
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function getAverage(tips) {
  let total = 0;

  for (let i = 0; i < tips.length; i++) {
    // get tips total
    total += tips[i];
  }
  // get tips average
  return total / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = getAverage(john.tips);
mark.average = getAverage(mark.tips);

if (mark.average > john.average) {
  console.log(
    `${mark.fullName} family pay's a higher tip on average, which is ${
      mark.average
    }`
  );
} else {
  console.log(
    `${john.fullName} family pay's a higher tip on average, which is ${
      john.average
    }`
  );
}

console.log(john, mark);
