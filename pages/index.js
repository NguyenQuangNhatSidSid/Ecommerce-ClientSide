import Featured from "@/components/Featured";
import Header from "@/components/Header";
import mongooseConnect from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ product }) {
  console.log(product);
  return (
    <div>
      <Header></Header>
      <Featured product={product} />
    </div>
  );
}
export async function getServerSideProps() {
  const featuredProductId = "66b86c28d8607929ab2c3a97";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}
