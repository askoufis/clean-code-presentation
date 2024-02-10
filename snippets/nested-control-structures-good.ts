const { startDate, endDate } = datePicker;

if (startDate === null || endDate === null) {
  sendInvalidDateMessage();
  return;
}

if (startDate !== endDate || index1 !== index2 || startInt !== endInt) {
  return;
}

if (radioButton.isChecked) {
  printTimeInADifferentWay();
  return;
}

printTime();
