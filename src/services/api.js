export default async function httpRequest(url, method, data,headers) {
  const options = {
    method: method,
    headers: headers,
    body: JSON.stringify(data)
  };
  const response = await fetch(url, {method:method,headers:headers,body:JSON.stringify(data)});
  // const response = fetch(url, options);
  const a =  await response.json()
  console.log("workign till here")
  console.log(a)
  // const b = a.then(data=> console.log(data))
  return a


  // if (response.ok) {s
  //   return  response.json();
  // } else {
  //   console.error(response.text)
  // }
}