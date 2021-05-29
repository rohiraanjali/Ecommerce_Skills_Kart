import faker from "faker";

faker.seed(123);

export const data = [...Array(50)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale"
  ]),
  level: faker.random.arrayElement([
    "Beginner",
    "Amateur",
    "Intermediate",
    "Advanced",
    "Professional"
  ]),
  category: faker.random.arrayElement([
    "PROGRAMMING",
    "DESIGNING",
    "COPYWRITING",
    "EDITING & FILMAKING",
    "OTHERS"
  ]),
  mentors: faker.random.arrayElement([
    "Tanay",
    "Abhinav",
    "Chethan",
    "Johny",
    "Others"
  ]),
  color: faker.commerce.color()
}));

