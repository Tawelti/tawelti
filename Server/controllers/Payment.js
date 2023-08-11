//this is in the back 
const { default: axios }=require("axios")
require('dotenv').config()
module.exports={
Add: async (req,res)=>{
    let amount=parseFloat(req.params.amount)
    console.log( typeof (amount));
    const url='https://developers.flouci.com/api/generate_payment'
    const payload={
        "app_token": "25644b66-54e0-41ae-9766-c04fd99bafc8", 
        "app_secret":process.env.FLOUCI_SECRET ,
        "amount":amount,
        "accept_card": "true",
        "session_timeout_secs": 1200,
        "success_link": "http://192.168.11.47:3000/success",
        "fail_link": "http://192.168.11.47:3000/fail",
        "developer_tracking_id": "7e8c4fbb-e589-40f7-a8c5-76d4e1e323c5"
    }
    console.log("hey",process.env.FLOUCI_SECRET);
   await axios
   .post(url,payload)
   .then(result=>{
    res.send(result.data)
   })
   .catch(err=>console.error(err))
},
///verification
Verify: async (req,res)=>{
    const id=req.params.id
await axios.get(`https://developers.flouci.com/api/verify_payment/${id}`,{
    headers:{
        'Content-Type': 'application/json',
        'apppublic': '25644b66-54e0-41ae-9766-c04fd99bafc8',
        'appsecret': process.env.FLOUCI_SECRET 
      }
      })
.then((result)=>{
    res.send(result.data)
})
.catch((err)=>{
    console.log(err.message);
})
}
}