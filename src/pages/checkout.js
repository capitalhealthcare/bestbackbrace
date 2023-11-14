import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../lib/product";
import { IoMdCash } from "react-icons/io";
import { LayoutFour } from "../layouts";
import { HeroSliderOne } from "../components/HeroSlider";
import heroSliderOneData from "../data/hero-sliders/hero-slider-one.json";
const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  let cartTotalPrice = 0;
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [ordeNotes, setOrdeNotes] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalData = {
      name,
      company,
      email,
      phone,
      country,
      address,
      address2,
      city,
      state,
      zipCode,
      ordeNotes,
    };
    debugger;
    // setLoader(true);
    // const res = await api.post("/createContact", finalData);
    // if (res.status === 200) {
    //   toast("Thank you! Your message is successfully received");
    //   setName("");
    //   setEmail("");
    //   setSubject("");
    //   setMessage("");
    //   setLoader(false);
    // }
    // history.push('/order-completed')
  };

  return (
    <LayoutFour>
      <HeroSliderOne heroSliderData={heroSliderOneData} />
      <div className="checkout-content space-pt--r70 space-pb--r70">
        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Row>
              <Col md={6}>
                <div className="heading-s1 space-mb--20">
                  <h4>Customer details</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      name="name"
                      placeholder="Full name *"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="email"
                      placeholder="Email address *"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="phone"
                      placeholder="Phone *"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                  <div className="heading-s1 space-mb--20">
                    <h4>Delivery details</h4>
                  </div>

                  <div className="mb-3">
                    <div className="custom_select">
                      <select className="form-control">
                        <option value="">Select a Country</option>
                        <option value="usa">USA</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      required
                      placeholder="Address *"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="address2"
                      placeholder="Address line2"
                      value={address2}
                      onChange={(e) => {
                        setAddress2(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="city"
                      placeholder="City *"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="state"
                      placeholder="State*"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="zipCode"
                      placeholder="Postcode / ZIP *"
                      value={zipCode}
                      onChange={(e) => {
                        setZipCode(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3 mb-0">
                    <textarea
                      rows="5"
                      name="ordeNotes"
                      className="form-control"
                      placeholder="Order notes"
                      value={ordeNotes}
                      onChange={(e) => {
                        setOrdeNotes(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="heading-s1 space-mb--20">
                    <h4>Payment</h4>
                    <small>All transactions are secure and encrypted.</small>
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="cardnumber"
                      placeholder="cardnumber*"
                    />
                  </div>
                  <button className="btn btn-fill-out btn-block" type="submit">
                    Place Order
                  </button>
                </form>
              </Col>
              <Col md={6}>
                <div className="order-review space-mt-mobile-only--40">
                  <div className="heading-s1 space-mb--20">
                    <h4>Your Orders</h4>
                  </div>
                  <div className="table-responsive order_table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((product, i) => {
                          const discountedPrice = getDiscountPrice(
                            product.price,
                            product.discount
                          ).toFixed(2);

                          cartTotalPrice += discountedPrice * product.quantity;
                          return (
                            <tr key={i}>
                              <td>
                                {product.name}{" "}
                                <span className="product-qty">
                                  x {product.quantity}
                                </span>
                              </td>
                              <td>
                                $
                                {(discountedPrice * product.quantity).toFixed(
                                  2
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>SubTotal</th>
                          <td className="product-subtotal">
                            ${cartTotalPrice.toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <th>Shipping</th>
                          <td>Free Shipping within the USA</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td className="product-subtotal">
                            ${cartTotalPrice.toFixed(2)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCash />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">
                      No items found in cart to checkout
                    </p>
                    <Link href="/products" className="btn btn-fill-out">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutFour>
  );
};

export default Checkout;
