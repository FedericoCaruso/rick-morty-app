const callAnyApi = async (url:string) => {
  if (!url) return 'unknown';
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return 'unknown';
  }
};

export default callAnyApi;
