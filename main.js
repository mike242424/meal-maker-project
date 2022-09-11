const menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    addDishToCourse: function (courseName, dishName, dishPrice) {
      let dish = {};
      dish = {
        name: dishName,
        price: dishPrice,
      };
      menu.courses[courseName] = dish;
    },
    getRandomDishFromCourse: function (courseName) {
      let dishes = courseName;
      console.log(dishes);
    },
  },
};

menu.courses.addDishToCourse("mains", "taco", 2);
console.log(menu);

menu.courses.getRandomDishFromCourse("blah");
