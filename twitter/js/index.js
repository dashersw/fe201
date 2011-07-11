// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.require('twitter.UserModel');
goog.require('twitter.FollowManager');
goog.require('twitter.TweetModel');
goog.provide('twitter.index');

twitter.index = function() {
    $(function() {
        var $body = $("body"),
                userModel = new twitter.UserModel(),
                session = twitter.localStorage.get("session"),
                followManager = new twitter.FollowManager(),
                tweetModel = new twitter.TweetModel();

        var tweetTemplate = function(tweet, user) {
            return "<div class='tweet' id='" + tweet.id + "'>" +
                   tweet.body + " by <span class='user' id='" + tweet.userId + "'>" +
                   user.username + "</span></div>";
        };

        var printTweets = function(tweets) {
            for (var i = 0, l = tweets.length; i < l; i++) {
                var tweet = tweets[i],
                        user = userModel.getUserById(tweet.userId),
                        $tweet = $(tweetTemplate(tweet, user));
                $body.append($tweet);
            }
        };


        if (session) {
            var user = userModel.getUserById(session.userId);
            $body.append("<h1>Logged In</h1>");
            var following = followManager.getFollowingByUserId(user.id);

            var tweets = [];

            for (var i = 0, l = following.length; i < l; i++) {
                user = following[i];
                var userTweets = tweetModel.getTweetsByUserId(user.id);

                printTweets(userTweets);
            }
        }
        else {
            var $username = $("<input id='text' type='text'>");
            var $password = $("<input id='password' type='password'>");
            var $button = $("<div>Log in</div>");
            var $error = $("<div class='error'></div>")
            $body.append("<h1>You need to log in.</h1>")
                    .append($username)
                    .append($password)
                    .append($button)
                    .append($error);

            $button.click(function() {
                var userModel = new twitter.UserModel();
                var loggedIn = userModel.login($username.val(), $password.val());
                if (!loggedIn) {
                    $error.html("Error. No user found.");
                }
                else {
                    window.location.reload();
                }
            })
        }
    });
}

goog.exportSymbol('twitter.index', twitter.index);
