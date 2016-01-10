'use strict';
var User = require('../models/user.js');
var passport = require('passport');

module.exports = function (router) {

    router.get('/login', function (req, res) {
        res.render('user/login');
    });

    router.get('/register', function(req, res) {
        res.render('user/register', { });
    });

    router.post('/register', function (req, res) {
        User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
            if (err) {
                return res.render('user/register', { user : user });
            }

            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
    });

    router.post('/login', passport.authenticate('local'), function(req, res) {
        res.redirect('/');
    });

    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    router.get('/ping', function(req, res){
        res.status(200).send("pong!");
    });

}
