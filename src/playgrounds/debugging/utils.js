export const sendMessage = (name, email, message) => {
  const content = (
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Message: ${message}`
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('%cMessage sent.', 'font-weight: bold');
      console.log(content);
      resolve(content);
    }, 2000);
  });
};
