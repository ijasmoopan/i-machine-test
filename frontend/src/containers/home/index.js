import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h2>Home Page</h2>
      <p>Welcome to the Home page!</p>
    </HomeContainer>
  );
};

export default Home;