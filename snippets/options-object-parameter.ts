transform("the quick brown fox", "en", false, 3, " ");

transform("the quick brown fox", {
  locale: "en",
  delimiter: " ",
  maxLines: 3,
  truncate: false,
});
