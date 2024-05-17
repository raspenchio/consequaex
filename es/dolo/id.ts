function generateErrorMessage(message: string): never {
  // Ensure the message is not empty
  if (!message) {
    throw new Error('No error message provided');
  }

  // Throw an error with the provided message
  throw new Error(message);
}
