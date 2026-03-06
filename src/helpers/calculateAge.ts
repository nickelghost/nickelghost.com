function calculateAge(birthday: Date) {
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    return age - 1;
  }

  return age;
}

export default calculateAge;
