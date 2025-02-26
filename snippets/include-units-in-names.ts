// Seconds? Minutes? Hours?
function execute(delay: number) {}

function execute(delayInSeconds: number) {}

// ✨ Future JavaScript API ✨
const delay = Temporal.Duration.from({
  minutes: 1,
  seconds: 30,
});

function execute(delay: Temporal.Duration) {
  const delayInSeconds = delay.total({ unit: 'seconds' }); // 90
}
