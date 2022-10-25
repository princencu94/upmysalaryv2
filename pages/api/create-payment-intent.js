// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  // console.log('Items',items)

    const totalAmount = items.reduce(
      (accumalatedQuantity, item) =>
        (accumalatedQuantity + item.quantity * item.price),
      0
    )
    return Math.round(totalAmount * 100);

};

export default async function handler(req, res) {
  const { items } = req.body;
  // console.log('Node function', req.body);
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items) < 1 ? 100 :  calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    totalAmountC: calculateOrderAmount(items),
  });
};