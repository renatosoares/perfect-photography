import React from "react";

import ProductGrid from "./ProductGrid";
import CupFlowerImage from "stories/assets/cup-flower.jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, image: CupFlowerImage, title: "Título 1", summary: "Texto" },
      { id: 2, image: CupFlowerImage, title: "Título 2", summary: "Texto" },
      { id: 3, image: CupFlowerImage, title: "Título 3", summary: "Texto" },
      { id: 4, image: CupFlowerImage, title: "Título 4", summary: "Texto" },
      { id: 5, image: CupFlowerImage, title: "Título 5", summary: "Texto" },
      { id: 6, image: CupFlowerImage, title: "Título 6", summary: "Texto" },
    ]}
  ></ProductGrid>
);
