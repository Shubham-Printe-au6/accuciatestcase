const router = require('express').Router();
const User = require('../models/user.model');

// get all the users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// add a new user
router.route('/add').post((req, res) => {
    const newUser = new User(req.body);

    // res.json(req.body)

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json({
            'Error': err,
            'message': `Please use a different value for ${Object.keys(err.keyPattern)}`
        }));
});

// delete a user
router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json('User Deleted.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// updates a user
router.route('/edit/:id').put((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.phone = req.body.phone;
            user.age = req.body.age;
            user.gender = req.body.gender;
            user.photo = req.body.photo;
            user.address = req.body.address;

            user.save()
                .then(() => res.json('User updated.'))
                .catch(err => res.status(400).json({
                    'User': user,
                    'Error': err,
                    'message': `Please use a different value for ${Object.keys(err.keyPattern)}`
                }));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});


module.exports = router;