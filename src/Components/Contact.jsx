import React from "react";
import styled from "styled-components";
import { AiFillEnvironment } from "react-icons/ai";

const Contact = () => {
  return (
    <ContactPage>
      <SectionTop>
        <H1>Let's connect</H1>
        <Para>
          {" "}
          I'm here to answer your inquiries and engage in meaningful
          conversations.
        </Para>
        <img src="./assets/contact-banner.jpg" alt="bnr" />
      </SectionTop>
      <BottomSection>
        <Form>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />

          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />

          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" rows="4" required></TextArea>

          <Button type="submit">Submit</Button>
        </Form>
        <LeftSection>
          <span>My Digital Spaces</span>
          <Icons>
            <a href="https://www.linkedin.com/in/abhijit-sarkar-423b2716b/">
              <img src="./assets/linkedin.png" alt="linkedin" />
            </a>
            <img src="./assets/instagram.png" alt="instagram" />
          </Icons>
        </LeftSection>
      </BottomSection>
      <Email>abhijitsarkar7386@gmail.com</Email>
      <Location>
        <AiFillEnvironment />
        Lithuania, Europe
      </Location>
    </ContactPage>
  );
};

export default Contact;

const ContactPage = styled.div`
  height: 100vh;
  width: 100%;
  /* position: absolute; */
  @media (max-width: 600px) {
    background-color: gainsboro;
  }
`;

const SectionTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* gap: 60px; */
  align-items: center;

  img {
    /* position: absolute; */
    height: 50vh;
    width: 100%;
    /* position: absolute; */
  }

  @media (max-width: 600px) {
    position: absolute;
    img {
      display: none;
    }
    h1 {
      font-size: 32px;
    }
  }
`;

const Location = styled.div`
  display: flex;
  margin-left: 70vw;
  margin-top: 4vw;
  font-size: 20px;
  font-family: Poppins;
  @media (max-width: 600px) {
    position: absolute;
    top: 2900px;
    left: 0px;
  }
`;

const Email = styled.div`
  display: flex;
  font-size: 20px;
  margin-left: 70vw;
  margin-top: 10vw;
  font-family: Poppins;
  @media (max-width: 600px) {
    position: absolute;
    top: 2950px;
    left: -200px;
  }
`;

const H1 = styled.div`
  z-index: 100;
  position: absolute;
  font-family: Alata;
  font-size: 8rem;
  /* left: 23%; */
  top: 5vh;
  color: white;
  @media (max-width: 600px) {
    position: absolute;
    color: black;
    font-size: 30px;
    left: 50px;
  }
`;
const Para = styled.div`
  position: absolute;
  z-index: 100;
  font-family: Gilroy;
  font-size: 1.2rem;
  top: 35vh;
  /* left: 30vw; */
  color: white;
  @media (max-width: 600px) {
    position: absolute;
    color: black;
    left: 150px;
    width: 200px;
    top: 20px;
  }
`;
const BottomSection = styled.div`
  color: #090909;
  /* border: 2px solid black; */
  margin-left: 10px;
  position: absolute;
  font-family: poppins;
  text-align: center;
  padding: 3rem;
  width: 30vw;
  height: 48vh;

  @media (max-width: 600px) {
    width: 400px;
    position: relative;
    justify-content: center;
    margin-top: 200px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;

  @media (max-width: 600px) {
    width: 300px;
    position: absolute;
    top: 450px;
    left: 40px;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #141414;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;
const LeftSection = styled.div`
  position: absolute;
  top: 10vh;
  width: 300px;
  margin-left: 40vw;
  span {
    color: black;
    font-size: 34px;
    font-family: Alata;
    /* position: absolute; */
    top: 7vh;
    width: 4rem;
  }
  @media (max-width: 600px) {
    position: absolute;
    left: -25vw;
    top: 190px;

    span {
      display: none;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  position: absolute;
  top: 14vh;
  left: 50px;
  gap: 20px;

  img {
    height: 70px;
    cursor: pointer;
  }
`;
