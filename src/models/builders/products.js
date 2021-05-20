const faker = require("faker");

const buildProductList = (size) => {
  const result = [];

  const imageRandom = "//picsum.photos/seed/id/300/300";

  for (let i = 0; i < size; i += 1) {
    result.push({
      id: i + 1,
      // image: `${imageRandom}${Math.floor(Math.random() + i * size)}`,
      image: imageRandom.replace("id", Math.floor(Math.random() + i * size)),
      title: faker.commerce.productName(),
      summary: faker.commerce.productDescription(),
      slang: faker.lorem.slug(),
    });
  }

  return result;
};

console.log(JSON.stringify(buildProductList(8), null, "  "));
