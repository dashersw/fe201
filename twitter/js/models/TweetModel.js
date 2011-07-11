// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>


/**
 * @fileoverview Tweet Model class that deals with posting and fetching tweets.
 */

goog.provide('twitter.TweetModel');
goog.require('twitter.Tweet');



/**
 * Tweet Model class. Has utility functions that sends a tweet or returns tweets of users.
 *
 * @constructor
 */
twitter.TweetModel = function() {

};


/**
 * Posts a tweet
 *
 * @param {twitter.User} user User that posts the tweet.
 * @param {string} body Tweet body.
 */
twitter.TweetModel.prototype.postTweet = function(user, body) {
    var tweet = new twitter.Tweet(user.id, body);
    twitter.localStorage.set(tweet.id, tweet);
};

twitter.TweetModel.prototype.getTweetsByUserId = function(userId) {
    var tweets = [];

    for (var tweet in localStorage) {
        tweet = twitter.localStorage.get(tweet);
        if (tweet && tweet.body && tweet.userId && tweet.userId == userId) {
            tweets.push(tweet);
        }
    }
    return tweets;
};
