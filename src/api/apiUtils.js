export async function handleResponse(response) {
    if (response.ok) {
      let payload = await response.json();
      return payload;
    }
    if (response.status === 400) {
      const error = await response.json();
      throw new Error(error.error);
    }
    throw new Error("Network response was not ok.");
  }
  
  export function handleError(error) {
    console.error("API call failed. " + error.stack);
    throw error;
  }
  