// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('twitter.UserModel');
goog.require('twitter.Session');
goog.require('twitter.User');

twitter.UserModel = function() {

};

twitter.UserModel.prototype.getUserById = function(userId) {
    return twitter.localStorage.get(userId);
};

twitter.UserModel.prototype.createUser = function(username, password, email) {
    var user = new twitter.User(username, password, email);
    twitter.localStorage.set(user.id, user);
    return user;
};

twitter.UserModel.prototype.getUserByUsername = function(username) {
    for (var user in localStorage) {
        user = twitter.localStorage.get(user);
        if (user && user.username && user.username == username) {
            return user;
        }
    }
};

twitter.UserModel.prototype.login = function(username, password) {
    for (var user in localStorage) {
        user = twitter.localStorage.get(user);
        if (user && user.username && user.password && user.username == username && user.password == password) {
            var session = new twitter.Session(user.id);
            twitter.localStorage.set('session', session);
            return true;
        }
    }
    return false;
};
