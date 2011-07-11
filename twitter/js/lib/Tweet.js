// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('twitter.Tweet');
goog.require('tart');
goog.require('tart.date');



/**
 * Tweet value object
 * @constructor
 * @param {Number} userId User id that this tweet belongs to.
 * @param {string} body Body of the tweet.
 * @return {boolean} Returns if a successful tweet is created.
 */
twitter.Tweet = function(userId, body) {
    this.id = tart.getUid();
    this.userId = userId;
    this.time = tart.date.randomTime();

    if (body.length <= 140)
        this.body = body;
    else
        return false;
    return true;
};
