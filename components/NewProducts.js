import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <ProductGrid>
        {products?.length > 0 &&
          products.map((product) => (
            <ProductBox key={product.title} {...product} />
          ))}
      </ProductGrid>
    </Center>
  );
}
