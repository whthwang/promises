/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
// var pluckFirstLineFromFile = function (filePath, (err, content) => {
//   if (err) {
//     console.log('ENONET')
//   } else {
//     callback(err, content)
//   })
// }


// var pluckFirstLineFromFile = function (filePath, callback) {
//   if (callback) {
//     console.log('ENONET')
//   } else {
//     callback()
//   }
// }

var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function (err, content) {
    if (err) {
      callback(err)
    } else {
      var splitVersion = content.split('\n');
      callback(null, splitVersion[0])
    }
})
}

  // TODO

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, function (err, response) {
  if(err) {
    callback(err)
  } else {
    callback(null, response.statusCode)
  }
});

//  fetch(url).then(function(response) {
//     console.log(response.status);
//   })

  // fetch(myRequest).then(function(response) {
  //   console.log(response.status); // returns 200
  //   response.blob().then(function(myBlob) {
  //     var objectURL = URL.createObjectURL(myBlob);
  //     myImage.src = objectURL;
  //   });

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};




/*

The function expects a callback as the last argument
The callback is invoked with (err, results)

fs.readFile(__dirname + '/README.md', 'utf8', function (err, content) {
  console.log('Example from callbackReview.js')
  if (err) {
    console.log('fs.readFile failed :(\n', err)
  } else {
    console.log('fs.readFile successfully completed :)\n', content)
  }
});
*/