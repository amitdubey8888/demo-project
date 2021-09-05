const User = require('../modals/user');

module.exports = {
  registerUser: registerUser,
  LoginUser: LoginUser,
};

function registerUser(req, res) {
  let user = new User(req.body);
  user.save()
    .then(response => {
      res.status(200);
      return res.json({
        status: true,
        message: 'User registered successfully!',
      });
    })
    .catch(error => {
      res.status(200);
      return res.json({
        status: false,
        message: 'Unable to register user!',
      });
    });
}

function LoginUser(req, res) {
  User.findOne({email: req.body.email}).then(response => {
    if (response) {
      if (req.body.password == response.password) {
        res.status(200);
        return res.json({
          status: true,
          message: 'User logged in successfully!',
          data: response
        });
      } else {
        res.status(200);
        return res.json({
          status: false,
          message: 'Password is incorrect!'
        });
      }
    } else {
      res.status(200);
      return res.json({
        status: false,
        message: 'User is not registered!'
      });
    }
  }).catch(error => {
    res.status(200);
    return res.json({
      status: false,
      message: 'Unable to login user!'
    });
  });
}