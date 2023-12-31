const stripe =require("stripe")("sk_test_51NdUs4K6fT8eoEEpBbnFibRAsIRToDOQVt8iLAnnZFgrAIzj7CT2an0MzBuwrlkmeSdS53wwBQyuxGswaDBnGCgg00nBHMJfeF")
module.exports={
    intent: async (req,res)=>{
        try {
            
            const paymentIntent = await stripe.paymentIntents.create({
              amount: req.params.amount,
              currency: 'EUR',
              automatic_payment_methods: {
                enabled: true,
              }
            })
        
            res.json({ paymentIntent: paymentIntent.client_secret })
          } catch (e) {
            res.status(400).json({
              error: e.message,
            });
          }
        }
}