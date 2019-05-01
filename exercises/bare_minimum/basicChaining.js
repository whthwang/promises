// import { readFile } from 'fs';

/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var callback = require('./promiseConstructor');
var github = require('./promisification')

var pluckFirstLineFromFile = Promise.promisify(callback.pluckFirstLineFromFileAsync);


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  //Use Pluckfirstline to pull username
  //send github request with getGitHubProfile using username 
  //Receive profile from Github
  //Write profile contents to writeFilePath

  return callback.pluckFirstLineFromFileAsync(readFilePath) 
  .then(function(username) {
    // console.log(username);
     return github.getGitHubProfileAsync(username)
      .then(data =>  Object.keys(data).map(function(key) {
        return [key, data[key]];
      }))
      .then(data => fs.writeFile(writeFilePath,data[0]))
      // .then((data) => fs.writeFile(writeFilePath,JSON.stringify(JSON.stringify(data)))
      
  })
}


// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
