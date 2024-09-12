import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;
export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <div>
            {" "}
            <Title>Product anywhere</Title>
            <Desc>Logo</Desc>
          </div>
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/nextjs-ecommerce-7e047.appspot.com/o/images%2F1724487019844.jpg?alt=media&token=fc9295a2-eb0c-4f03-88c9-19cf8be4aa6a" />
          </div>
        </Wrapper>
      </Center>
    </Bg>
  );
}
