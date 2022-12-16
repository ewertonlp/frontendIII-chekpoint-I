
const validation = (values) => {
  let errors = {};

  if(!values.name) {
    errors.name="Você esqueceu de preencher o seu nome."
  } else if(values.name.length < 3) {
    errors.name="Seu nome precisa ter mais de 3 caracteres."
  }

  if(!values.band) {
    errors.band="Você esqueceu de inserir a banda."
  } else if(values.band.length < 2) {
    errors.band="O nome da banda precisa ter mais de 6 caracteres."
  }

  return errors;
};

export default validation;
