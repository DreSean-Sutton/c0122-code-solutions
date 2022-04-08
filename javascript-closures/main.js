const graduate = credential => {
  return fullName => `${fullName}, ${credential}`;
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Dre Sean Sutton'));
console.log(lawSchool('Dre Sean Sutton'));
