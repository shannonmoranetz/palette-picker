export const fetchData = async (url, method, data = null) => {
  let options;
  switch (method) {
    case 'DELETE':
      options = { method };
      break;
    case 'GET':
      options = data;
      break;
    default:
      options = {
        method: method,
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json'
        }
      }
  }

  const response = await fetch(`https://palette-picker-api.herokuapp.com/api/v1${url}`, options);

  if (response.ok) {
      return await response.json();
    } else {
      throw Error(`Error on fetching data: ${response.statusText}`);
    }
};