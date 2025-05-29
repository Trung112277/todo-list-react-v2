export function TodayTimes() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString('en-US', { month: 'long' });
  const day = today.getDate();

  return (
    <time dateTime={today.toISOString()}>
      {year}, {month} {day}
    </time>
  );
}
