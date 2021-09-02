const Order = require('../models/Order.js')

const orderSave = async (req, res) => {
    const { metadata, items, cartTotal } = req.body;
    //console.log(metadata, items, cartTotal);

    try {
        const orderNow = new Order({
         metadata: metadata, orderAmount: cartTotal, orderItems: items
        });
        const orderSaveNow = await orderNow.save()

        res.status(200).json({message: "Your order placed successfully."});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went worng.'})
    }
}

const orderView = async (req, res) => {
    
    try {
        const total = await Order.countDocuments();
        const orderList =await Order.find({ orderStatus: false });
        res.json({data:{ orderList, total} })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went'})
    }
}

const orderCompleted = async (req, res) => {
    const { id } = req.body;
    console.log(id);
    try {
        const statusUpdate = await Order.findByIdAndUpdate( id , {orderStatus: true}, { new: true})
        const orderList =await Order.find({ orderStatus: false });
        res.json({ orderList })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went'})
    }
}

module.exports = { orderSave, orderView, orderCompleted }