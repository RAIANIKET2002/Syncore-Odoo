export const validateContactForm = (data) => {
  const errors = {};

  if (!data.firstName || data.firstName.trim() === '') {
    errors.firstName = 'First Name is required';
  }

  if (!data.surname || data.surname.trim() === '') {
    errors.surname = 'Surname is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || data.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email';
  }

  if (!data.mobile || data.mobile.trim() === '') {
    errors.mobile = 'Mobile number is required';
  } else if (data.mobile.replace(/\D/g, '').length < 10) {
    errors.mobile = 'Mobile number must be at least 10 digits';
  }

  if (!data.industry || data.industry.trim() === '') {
    errors.industry = 'Industry is required';
  }

  if (!data.employeeStrength || data.employeeStrength.trim() === '') {
    errors.employeeStrength = 'Employee Strength is required';
  }

  if (!data.state || data.state.trim() === '') {
    errors.state = 'State is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
