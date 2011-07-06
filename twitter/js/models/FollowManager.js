// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('twitter.FollowManager');
goog.require('twitter.Follow');
goog.require('twitter.UserModel');

twitter.FollowManager = function() {

};

twitter.FollowManager.prototype.createFollow = function(follower, following) {
    var follow = new twitter.Follow(follower.id, following.id);
    localStorage.setObject(follow.id, follow);
}

twitter.FollowManager.prototype.getFollowingByUserId = function(userId) {
    var followedUsers = [],
        userModel = new twitter.UserModel();

    for (var follow in localStorage) {
        follow = localStorage.getObject(follow);
        if (follow && follow.followerId == userId) {
            var followedUser = userModel.getUserById(follow.followingId);
            followedUsers.push(followedUser);
        }
    }
    return followedUsers;
}

twitter.FollowManager.prototype.getFollowersByUserId = function(userId) {

}