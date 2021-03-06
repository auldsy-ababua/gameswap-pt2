"use strict";

var $ = require('jquery');
var materialize = require('materialize-css');

import GameswapView from './view.js';


/*window.addEventListener('DOMContentLoaded', function(e) {
    mockData.game.forEach(function(value, index) {
        document.querySelectorAll('li:nth-child(1) select')[0].innerHTML += '<option value="' + value + '">' + value + '</option>';
        document.querySelectorAll('li:nth-child(2) select')[0].innerHTML += '<option value="' + value + '">' + value + '</option>';
    });
    mockData.city.forEach(function(value, index) {
        document.querySelectorAll('li:nth-child(3) select')[0].innerHTML += '<option value="' + value + '">' + value + '</option>';
    });
});*/




$(document).ready(function() {

  window.gameswapApp = new GameswapView();
  $("#logoutMenu").hide();
  $("#searchMenu").hide();
  $("#profileMenu").hide();
  /*
    $("#game-search").submit(function(event) {
        event.preventDefault();
        console.log("The data was submitted");
        gameswapApp.showSearchResults(".games-owned", ".games-wanted", ".city");
        return false;

    });
*/
    $("#login").submit(function(event) {
        event.preventDefault();
        console.log("The user is logged in");
        gameswapApp.games("#username", "#password");
        $("#loginMenu").hide();
        $("#logoutMenu").show();
        $("#searchMenu").show();
        $("#profileMenu").show();
        return false;
    });

    $("#logoutMenu").click(function(event) {
        console.log('logged out the user', localStorage.username);
        delete localStorage.username;
        delete localStorage.password;
        $("#loginMenu").show();
        $("#logoutMenu").hide();
        $("#searchMenu").hide();
        $("#profileMenu").hide();
        //take to home page
    })

    $("#signinForm").submit(function(event) {
        event.preventDefault();
        console.log("The signin");
        gameswapApp.signin();
        return false;
    });

    $("#add-owned").submit(function(event) {
        event.preventDefault();
        console.log("add-owned");
        gameswapApp.searchGames("#gamesearch");
        return false;
    });



    //go to login page
    $("#loginMenu").click(e => {
        $("#loginform").show();
        $(".nav").show();
        $("#create-profile").hide();
        $("#home").hide();
        $("#search").hide();
    });

    //login and go home
    $("#loginform #login-button").click(e => {
        $("#home").show();
        $(".nav").show();
        $("#create-profile").hide();
        $("#loginform").hide();
        $("#search").hide();
    });

    //hit sign up at bottom of login to go to make profile page
    $("#makeProfile a").click(e => {
        $(".nav").show();
        $("#create-profile").show();
        $("#loginform").hide();
        $("#home").hide();
        $("#search").hide();
    });

    //hit home button on nav to go home
    $(".nav #homeMenu").click(e => {
        $(".nav").show();
        $("#home").show();
        $("#create-profile").hide();
        $("#loginform").hide();
        $("#search").hide();
        $("#profile").hide();
    });

    //hit search button on nav to go to search screen
    $(".nav #searchMenu").click(e => {
        $(".nav").show();
        $("#profile").hide();
        $("#search").show();
        $("#create-profile").hide();
        $("#loginform").hide();
        $("#home").hide();

        gameswapApp.showSearchResults(".games-owned", ".games-wanted", ".city");

        /*
        var showMatches = function () {
          $("#game-search").submit(function(event) {
              event.preventDefault();
              console.log("The data was submitted");
              gameswapApp.showSearchResults(".games-owned", ".games-wanted", ".city");
              return false;
          });
        };
        $("match-data").html(showMatches);*/
    });

    //hit profile button on nav to go to myprofile screen
    $(".nav #profileMenu").click(e => {
        $(".nav").show();
        $("#profile").show();
        $("#create-profile").hide();
        $("#loginform").hide();
        $("#home").hide();
        $("#search").hide();
        gameswapApp.getGames();
    });

    //page refresh
    if (localStorage.username !== undefined && localStorage.password !== undefined) {
      $("#loginMenu").hide();
      $("#logoutMenu").show();
      $("#searchMenu").show();
      $("#profileMenu").show();
    } else {
      $("#loginMenu").show();
      $("#logoutMenu").hide();
      $("#searchMenu").hide();
      $("#profileMenu").hide();
    }
});
