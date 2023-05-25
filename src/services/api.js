





// export default async function httpRequest(url, method, data, headers, timeout = 50000) {
//   const options = {
//     method: method,
//     headers: headers,
//     body: JSON.stringify(data)
//   };

//   try {
//     const response = await Promise.race([
//       fetch(url, options),
//       new Promise((_, reject) => setTimeout(() => reject(new Error('Request timeout')), timeout))
//     ]);

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const reader = response.body.getReader();
//     const decoder = new TextDecoder('utf-8');
//     let receivedData = '';

//     while (true) {
//       const { done, value } = await reader.read();
//       if (done) break;

//       const chunk = decoder.decode(value);
//       receivedData += chunk;

//       // Process the received data in chunks if needed
//       // You can update your UI here or handle the text as it comes
//     }

//     const responseData = JSON.parse(receivedData);
//     console.log(responseData);
//     return responseData;
//   } catch (error) {
//     console.error('An error occurred during the HTTP request:', error);
//     throw error;
//   }
// }



export default async function httpRequest(url, method, data, headers, timeout = 50000) {
  const options = {
    method: method,
    headers: headers,
    body: JSON.stringify(data)
  };

  try {
    const response = await Promise.race([
      fetch(url, options),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Request timeout')), timeout))
    ]);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error('An error occurred during the HTTP request:', error);
    throw error;
  }
}

