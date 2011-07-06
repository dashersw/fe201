// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('twitter.Session');
goog.require('tart');

twitter.Session = function(userId) {
    this.id = tart.getUId();
    this.userId = userId;
}