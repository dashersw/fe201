// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('twitter.Follow');
goog.require('tart');

twitter.Follow = function(followerId, followingId) {
    this.id = tart.getUId();
    this.followerId = followerId;
    this.followingId = followingId;
}