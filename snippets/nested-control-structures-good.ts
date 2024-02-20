const { startDate, endDate } = datePicker;

const isInvalidDate = startDate === null || endDate === null;

if (isInvalidDate) {
  sendInvalidDateMessage();
  return;
}

const startAndEndDatesAreEqual = startDate === endDate;
const someBusinessRule = index1 !== index2 || startInt !== endInt;

if (startAndEndDatesAreEqual || someBusinessRule) {
  return;
}

if (radioButton.isChecked) {
  printTimeInADifferentWay();
  return;
}

printTime();
