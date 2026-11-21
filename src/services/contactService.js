export const submitContactForm = async (data) => {
  const endpointUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  if (!endpointUrl) {
    throw new Error('API endpoint URL is missing in the environment configuration.');
  }

  try {
    // Trim whitespace from all string fields
    const trimmedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        typeof value === 'string' ? value.trim() : value
      ])
    );

    // Prepare payload adding required metadata
    const payload = {
      ...trimmedData,
      Timestamp: new Date().toISOString(),
      Source: 'Website'
    };

    const response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw new Error('Something went wrong. Please try again.', { cause: error });
  }
};
