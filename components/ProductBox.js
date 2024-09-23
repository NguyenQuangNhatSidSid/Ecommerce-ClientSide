import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";

const ProductWrapper = styled.div``;

const WhiteBox = styled.div`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 120px;
    margin: 0;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
`;

const ProductInfo = styled.div`
  margin-top: 10px;
`;
const PriceRow = styled.div`
  display: flex;
  align-center: center;
  justify-content: space-between;
  margin-top: 5px;
`;
const Price = styled.span``;

export default function ProductBox({ _id, title, description, price, images }) {
  return (
    <ProductWrapper>
      <WhiteBox>
        <div>
          <img src={images[0]}></img>
        </div>
      </WhiteBox>
      <ProductInfo>
        <Title>{title}</Title>
        <PriceRow>
          <div>${price}</div>
          <Button primary>
            <CartIcon />
          </Button>
        </PriceRow>
      </ProductInfo>
    </ProductWrapper>
  );
}
