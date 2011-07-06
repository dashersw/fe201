// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('twitter.DirectMessage');
goog.require('tart');

twitter.DirectMessage = function(fromId, toId, body) {
    this.id = tart.getUId();
    this.fromId = fromId;
    this.toId = toId;
    this.body = body;
    this.time = tart.randomTime();
}