export const RegisterType = {
  GOOGLE: 0,
  FACEBOOK: 1,
  EMAIL_PASSWORD: 2,
  getKeyAsString: function (valueToFind) {
    let keyAsString = null; // To store the key if found

    // Iterate over the object entries
    for (const [key, value] of Object.entries(this)) {
      // Check if the value is a number and matches the valueToFind
      if (typeof value === "number" && value === valueToFind) {
        keyAsString = key; // Assign the key to keyAsString if value matches
        break; // Exit the loop once the key is found
      }
    }
    console.log(keyAsString, valueToFind);
    return keyAsString;
  },
};

export const UserRole = {
  STUDENT: 0,
  TEACHER: 1,
  ADMIN: 2,
};
