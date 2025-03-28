const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};


const verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    return null; // Token is invalid or expired
  }
};

const testToken = encrypt({ userId: 1 }, 'your_secret_key');
console.log('Generated Token:', testToken);

const decodedToken = verifyToken(testToken, 'your_secret_key');
console.log('Decoded Token:', decodedToken);
