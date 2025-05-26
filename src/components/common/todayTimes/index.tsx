export function TodayTimes() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString('en-US', { month: 'long' });
  const day = today.getDate();

  return (
    <time className="-translate-x-1/2" dateTime={today.toISOString()}>
      {year}, {month} {day}
    </time>
  );
}
