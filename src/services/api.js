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
