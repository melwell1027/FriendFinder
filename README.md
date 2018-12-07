# FriendFinder

## Introduction

FriendFinder is a full stack web application that uses a Node Server and Express. It is used to find a new friend match out of a database based on compatibility. This is calculated by having the user fill out a survey and then compare those scores to each of the scores of other users in the database.

## Link to Functional Application on Heroku
[FriendFinder](https://murmuring-journey-78215.herokuapp.com/)


## Required NPM Packages

* [Express](https://www.npmjs.com/package/express) - used to handle routing

* [Path](https://www.npmjs.com/package/path) - provides a way of working with directories and file paths

## How It Works

* A new user will fill out a survery. Each question has possible answers of the values 1-5.

* When a user submits the form, the website will send their answers to the back end, where Javascript will loop through each user in the database, compare the scores, and find the best compatibility based on the least varince in answers.

* The back end will then enter that new user into the database for future comparisons and then return the friend match to the front end of the appliction.

* This friend match information will be displayed in modal.

* When the modal is closed, the form clears itself so it can be used again.