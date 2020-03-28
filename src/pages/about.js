import styled from 'styled-components';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding-left: 3rem;
`;

const Title = styled.h1`
  color: #f69723;
  font-size: 55px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;
`;

const Description = styled.p`
  color: white;
  margin-top: 15px;
  font-weight: 500;
  line-height: 1.5;
`;

const teste = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni dolorum, aspernatur neque dolore
maxime, nemo eos consequuntur quis odio repellendus cum maiores ad possimus mollitia perferendis consectetur
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis ipsa architecto officia
repudiandae reprehenderit atque, voluptates possimus. Magni neque asperiores omnis quas perferendis laborum
maxime, nemo eos consequuntur quis odio repellendus cum maiores ad possimus mollitia perferendis consectetur
maxime, nemo eos consequuntur quis odio repellendus cum maiores ad possimus mollitia perferendis consectetur
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis ipsa architecto officia
repudiandae reprehenderit atque, voluptates possimus. Magni neque asperiores omnis quas perferendis laborum
maxime, nemo eos consequuntur quis odio repellendus cum maiores ad possimus mollitia perferendis consectetur
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis ipsa architecto officia
repudiandae reprehenderit atque, voluptates possimus. Magni neque asperiores omnis quas perferendis laborum
molestias voluptatibus itaque autem qui? aliquid iusto!`;

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <AboutMeWrapper>
        <Title>Sobre Mim</Title>
        <Description>{teste}</Description>
      </AboutMeWrapper>
      <div style={{ width: '50%' }}>
        <img
          alt="skdapo"
          style={{ height: 400, width: 400, borderRadius: '50%' }}
          src="https://scontent.fbau4-1.fna.fbcdn.net/v/t1.0-9/19601354_1384784881616151_3618330952444186094_n.jpg?_nc_cat=106&_nc_sid=174925&_nc_ohc=TAOuP7YlcJ4AX-chPXE&_nc_ht=scontent.fbau4-1.fna&oh=925dca2cf21140220b0ffedc7641e693&oe=5EA3F2BE"
        />
      </div>
    </Wrapper>
  </Layout>
);

export default AboutPage;
