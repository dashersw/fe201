// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('twitter.DirectMessage');
goog.require('tart');
goog.require('tart.date');



/**
 * @constructor
 */
twitter.DirectMessage = function(fromId, toId, body) {
    this.id = tart.getUid();
    this.fromId = fromId;
    this.toId = toId;
    this.body = body;
    this.time = tart.date.randomTime();
};
