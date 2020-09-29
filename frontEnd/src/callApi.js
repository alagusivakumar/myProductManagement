
export function callApi(method,path,body){
   return new Promise(function(resolve, reject) {
        const http        = require('http');
        const querystring = require('querystring');
        var responseBody = "";
  
      const options ={
   hostname: 'localhost',
   port:"8000",       
  path: path,
  method: method,
  headers:{
    'Content-Type':"application/x-www-form-urlencoded"
  }
        }

    const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
    responseBody = responseBody + chunk
  });
  res.on('end', () => {
    console.log('No more data in response.');
    var response = {
      statusCode:res.statusCode,
      body:responseBody
    }
    resolve(response)
    
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// Write data to request body
if(method!="GET")
{
  body = querystring.stringify(body);
  req.write(body);
}


req.end();

  

 
    })
}