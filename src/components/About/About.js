import React from "react";
import { Container, Figure, Card } from "react-bootstrap";
import logo from "../../img/logo.jpg";
import StoreImage1 from "../../img/store1.jpeg";
import StoreImage2 from "../../img/store2.jpeg";

const About = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          {/* Store Logo and About */}
          <Figure>
            <Figure.Image src={logo} alt="Store Logo" className="logo" />
            <Figure.Caption>
              <h2>About Our Store</h2>
              <p>
                Welcome to our online shopping platform. We provide you with
                different options that meet your needs at a good price. Whoever
                you are, you are our customer. We also offer delivery options
                with additional charges. Please note that our delivery service
                is limited to the local region.
              </p>
            </Figure.Caption>
          </Figure>

          {/* Inside View of the Store - Image 1 */}
          <Figure>
            <Figure.Image
              src={StoreImage1}
              width={600}
              height={600}
              style={{ margin: "20px" }}
              alt="Inside with front door"
            />
            <Figure.Caption>
              <p>
                <center>Inside view of the store with front door</center>
              </p>
            </Figure.Caption>
          </Figure>

          {/* Inside View of the Store - Image 2 */}
          <Figure>
            <Figure.Image
              src={StoreImage2}
              width={540}
              height={540}
              alt="Inside the store"
            />
            <Figure.Caption>
              <p>
                <center>Inside view of the store</center>
              </p>
            </Figure.Caption>
          </Figure>

          {/* Contact Information */}
          <h3>Contact Us</h3>
          <p>Phone: [+252 615 311115]</p>
          <p>Email: [info.store@lulaluxry.so]</p>
          <p>
            Customer Support: Visit our website and click on the "Contact Us"
            page to access our online customer support form.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
