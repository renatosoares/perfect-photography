import faker from "faker";

export const buildProductList = (size) => {
  const result = [];

  const imageRandom = "//picsum.photos/300/300?random=";

  for (let i = 0; i < size; i += 1) {
    result.push({
      id: i + 1,
      image: `${imageRandom}${Math.floor(Math.random() + i * size)}`,
      title: faker.commerce.productName(),
      summary: faker.commerce.productDescription(),
      slang: faker.lorem.slug(),
    });
  }

  return result;
};
