const {Client}= require('../database/models/client')
const {Seller}= require('../database/models/seller')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



async function login(userType, email, password) {
  let userModel;
  if (userType === 'seller') {
    userModel = Seller
  } else if (userType === 'client') {
    userModel = Client
  } else {
    throw new Error('Invalid user type')
  }

  try {
    const user = await userModel.findOne({ where: { email } })

    if (!user) {
      return { success: false, message: 'User not found' }
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (passwordMatch) {
      const token = jwt.sign({ userId: user.id, email: user.email }, 'so-secret', {
        expiresIn: '1h',
      })

      return { success: true, token, email: user.email , userType: userType }
    } else {
      return { success: false, message: 'Invalid credentials' }
    }
  } catch (error) {
    console.error(error)
    throw new Error('An error occurred')
  }
}

module.exports = { login }