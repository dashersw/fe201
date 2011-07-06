// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('twitter.UserModel');
goog.require('twitter.User');
goog.require('twitter.Session');

twitter.UserModel = function() {

};

twitter.UserModel.prototype.getUserById = function(userId) {
    return localStorage.getObject(userId);
}

twitter.UserModel.prototype.createUser = function(username, password, email) {
    var user = new twitter.User(username, password, email);
    localStorage.setObject(user.id, user);
    return user;
}

twitter.UserModel.prototype.getUserByUsername = function(username) {
    for (var user in localStorage) {
        user = localStorage.getObject(user);
        if (user && user.username && user.username == username) {
            return user;
        }
    }
}

twitter.UserModel.prototype.login = function(username, password) {
    for (var user in localStorage) {
        user = localStorage.getObject(user);
        if (user && user.username && user.password && user.username == username && user.password == password) {
            var session = new twitter.Session(user.id);
            localStorage.setObject("session", session);
            return true;
        }
    }
    return false;
}