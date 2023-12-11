import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/Shop-Context";
import { Products } from "../Products";

export const CartItem = () => {
  const {
    cartItems,
    getTotalCartAmount,
    removeFromCart,
    addToCart,
  } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postCode: "",
    creditCard: "",
    expiry: "",
    securityCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckout = () => {
    // TODO: Implement the checkout logic
    console.log("Checkout clicked. Add logic here:", formData);
  };

  return (
    <div className="bg-gray-100 h-screen py-8 flex-grow overflow-y-auto">
      <div className="container mx-auto px-4 grid sm:px-10 ">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Shopping Cart
        </h1>
        <div className="flex flex-col md:flex-row gap-4 sm:flex-row">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {Products.map((product) => {
                    const { id, name, price, productImage } = product;
                    const itemQuantity = cartItems[id];

                    if (itemQuantity > 0) {
                      return (
                        <tr key={id}>
                          <td className="py-4 border-b sm:px-6 text-center">
                            <div className="flex items-center ">
                              <img
                                className="h-16 w-16 mr-4 rounded-full"
                                src={productImage}
                                alt={name}
                              />
                              <span className="font-semibold">{name}</span>
                            </div>
                          </td>
                          <td className="py-4">£{price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <button
                                className="cursor-pointer border rounded-md py-2 px-4 mr-2"
                                onClick={() => removeFromCart(id)}
                              >
                                -
                              </button>
                              <input
                                className="text-center w-8 border rounded-md py-2 px-1"
                                value={itemQuantity}
                                readOnly
                              />
                              <button
                                className="cursor-pointer border rounded-md py-2 px-4 ml-2"
                                onClick={() => addToCart(id)}
                              >
                                +
                              </button>
                              <p className="py-4 ml-10">
                                £{(price * itemQuantity).toFixed(2)}
                              </p>
                            </div>
                          </td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {totalAmount > 0 ? (
            <div className="text-center text-sm md:text-lg lg:text-xl xl:text-2xl md:w-1/4 grid sm:px-10">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4 text-center">
                  Summary
                </h2>
                <div className="flex justify-between mb-2">
                  <span>SubTotal</span>
                  <span>£{totalAmount}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">£{totalAmount}</span>
                </div>

                <button
                  onClick={() => navigate("/dishes")}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                >
                  Continue Shopping
                </button>

                {/* Payment Details Form */}
                <div className="mt-8">
                  <h2 className="text-lg font-semibold mb-4 text-center">
                    Payment Details
                  </h2>
                  <form className="mx-auto w-72 p-5 bg-gradient-to-r from-green-400 via-green-300 to-white shadow-md">
                    <div className="mb-3">
                      <label
                        htmlFor="firstName"
                        className="mt-4 mb-2 block text-sm font-medium"
                      >
                        First Name:
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter First Name"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="lastName"
                        className="mt-4 mb-2 block text-sm font-medium"
                      >
                        Last Name:
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter Last Name"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mt-4 mb-2 block text-sm font-medium">
                      <label htmlFor="email" className="form-label">
                        Email Address:
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number:
                      </label>
                      <input
                        type="tel"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        id="phone"
                        name="phone"
                        placeholder="Enter Phone Number"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Address:
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        id="address"
                        name="address"
                        placeholder="Enter Address"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mt-3 mb-3">
                      <label
                        htmlFor="city"
                        className="form-label"
                      >
                        City:
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        id="city"
                        name="city"
                        placeholder="Enter City"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="flex mb-3">
                      <div className="w-full mr-2">
                        <label htmlFor="postCode" className="form-label">
                          Post Code:
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          id="postCode"
                          name="postCode"
                          placeholder="Enter Post Code"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="creditCard" className="form-label">
                        Credit Card Number:
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        id="creditCard"
                        name="creditCard"
                        placeholder="Enter Credit Card Details"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="expiry" className="form-label">
                          Expiry:
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          id="expiry"
                          name="expiry"
                          placeholder="Enter Expiry Date"
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="col">
                        <label htmlFor="securityCode" className="form-label">
                          Security Code:
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          id="securityCode"
                          name="securityCode"
                          placeholder="Enter Security Code"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={handleCheckout}
                    >
                      Submit Payment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="mb-10 text-center text-2xl font-bold">
              Your Shopping Cart is Empty
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};
