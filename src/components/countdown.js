import Countdown from "react-countdown";

const AppCountdown = ({ eventDate }) => {
  let finalData = new Date(eventDate).getTime() - Date.now();
  return (
    <Countdown date={Date.now() + finalData} renderer={AppCountdownRender} />
  );
};

const AppCountdownRender = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <> Its Too Late </>;
  } else {
    return (
      <span suppressHydrationWarning>
        {days} : {hours} : {minutes} : {seconds}
      </span>
    );
  }
};

export default AppCountdown;
