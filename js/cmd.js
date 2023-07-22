<script>
function makeApiRequest(url) {
  // The URL of the API endpoint.

  // The request data.
  var data = {
    "prompt": "What is the recipe of life with sauce ?"
  };

  // The HTTP method.
  var method = "POST";

  // The content type.
  var contentType = "application/json";

  // Make the request.
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Content-Type", contentType);
  xhr.send(JSON.stringify(data));

  // Handle the response.
  xhr.onload = function() {
    if (xhr.status === 200) {
      // The request was successful.
      var response = JSON.parse(xhr.responseText);
      console.log(response);
      // Return the response.
      return response;
    } else {
      // The request failed.
      console.log("Error: " + xhr.status);
      return null;
    }
  };
}

// Call the makeApiRequest() function for multiple domain URLs.
var response1 = makeApiRequest("https://api.openai.com/v1/");
var response2 = makeApiRequest("https://api.deepmind.com/v1/");
var response3 = makeApiRequest("https://api.google.com/v1/");
var response4 = makeApiRequest("https://westeurope.openai.azure.com/v1/");
var response5 = makeApiRequest("https://mystorageaccount.blob.core.windows.net/");
var response6 = makeApiRequest("https://api.microsoft.com");

// Log the responses.
console.log(response1);
console.log(response2);
console.log(response3);
console.log(response4);
console.log(response5);
console.log(response6);
return true;
</script>
