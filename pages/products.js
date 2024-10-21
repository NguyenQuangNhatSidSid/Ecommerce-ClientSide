import Center from "@/components/Center";
import Header from "@/components/Header";
import mongooseConnect from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
`;

export default function ProductsPage({ products }) {
  console.log({ products });
  return (
    <>
      <Header />
      <Center>
        <h1> All Products</h1>
        {products?.length}
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}