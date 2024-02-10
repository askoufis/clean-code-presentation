if (
  datePicker.startDate === null ||
  datePicker.endDate === null
) {
  sendInvalidDateMessage();
} else {
  if (
    datePicker.startDate !== null &&
    datePicker.endDate !== null
  ) {
    if (datePickerStart.SelectedDate === datePickerEnd.SelectedDate) {
      if (index1 === index2) {
        if (StartInt === EndInt) {
          if (radioButton.IsChecked === true) {
            printTime();
          } else {
            printTimeInADifferentWay();
          }
        }
      }
    }
  }
}
