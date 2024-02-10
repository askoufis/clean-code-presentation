if (age >= 4 && age <= 18) {
  applyTaxBenefit();
}

const isOfSchoolAge = (age: number): boolean => {
  return age >= 4 && age <= 18;
};

if (isOfSchoolAge(age)) {
  applyTaxBenefit();
}
