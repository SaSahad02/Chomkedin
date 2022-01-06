const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    metadata: {
        payMethod: { type: String },
        payNumber: { type: Number },
        transactionId: { type: String },
        shipName: { type: String },
        shipNumber: { type: Number },
        shipAddress: { type: String },
        shipCity: { type: String },
        shipState: { type: String },
        billName: { type: String },
        billNumber: { type: Number },
        billAddress: { type: String },
        billCity: { type: String },
        billState: { type: String },
        info: { type: String},
        gift: { type: String}
    },
    orderItems: [
        {
          id: { type: String, required: true },
          title: { type: String, required: true },
          quantity: { type: Number, required: true },
          img: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    orderAmount: { type: Number },
    orderNumber: { type: Number },
    orderStatus: { type: Boolean, default: false },
    orderedAt: { 
        type: Date,
        default: new Date()
       },
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;