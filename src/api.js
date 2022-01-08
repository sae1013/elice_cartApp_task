const API_REQUEST_TIME = 500;

const fakeProducts = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
  },
];

const orders = [];

const db = {
  saveOrder: (email, address, products) => {
    orders.push({
      email,
      address,
      date: new Date().toLocaleString("kr"),
      products,
    });
  },

  getAll: () => orders,
};

export const placeOrder = (formData) =>
  new Promise((resolve, reject) => {
    const { email, address, products } = formData;

    setTimeout(() => {
      if (!email || !address || email.length < 1 || address.length < 1) {
        return reject(new Error("email, address 정보를 정확히 입력해주세요."));
      }

      db.saveOrder(email, address, products);
      resolve();
    }, API_REQUEST_TIME);
  });

export const getAllProducts = () =>
  new Promise((resolve, reject) => resolve(fakeProducts));

export const getAllOrders = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(db.getAll());
    }, API_REQUEST_TIME);
  });
