// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('twitter.User');
goog.require('tart');



/**
 * @constructor
 */
twitter.User = function(username, password, email) {
    this.id = tart.getUid();
    this.username = username;
    this.password = password;
    this.email = email;
};
