import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

function App() {
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    {
      classSeq: 1,
      title: "RW2-MA2(Adaptive)",
      start: "2024-09-25",
      end: "2024-10-02",
      classColor: "green",
      allDay: true
    },
    {
      classSeq: 1,
      title: "RW4-MA4(Adaptive)",
      start: "2024-09-25",
      end: "2024-10-02",
      classColor: "green",
      allDay: true
    },
    {
      classSeq: 1,
      title: "RW5-MA5(Adaptive)",
      start: "2024-10-01",
      end: "2024-10-08",
      classColor: "green",
      allDay: true
    },
    {
      classSeq: 1,
      title: "RW7-MA7(Adaptive)",
      start: "2024-10-01",
      end: "2024-10-08",
      classColor: "green",
      allDay: true
    },
    {
      classSeq: 1,
      title: "RW45-MA45(Adaptive)",
      start: "2024-11-01",
      end: "2024-11-08",
      classColor: "green",
      allDay: true
    },
    {
      classSeq: 1,
      title: "Level Test",
      start: "2024-10-30",
      end: "2024-11-06",
      classColor: "green",
      allDay: true
    },
    {
      classSeq: 1,
      title: "RW50-MA50(Adaptive)",
      start: "2024-11-02",
      end: "2024-11-10",
      classColor: "green",
      allDay: true
    },
    {
      classSeq: 63,
      title: "MA55(Hard)",
      start: "2024-10-31",
      end: "2024-11-03",
      classColor: "purple",
      allDay: true
    }
  ];

  console.log(`🚨 myEventsList :`, myEventsList, `🚨`);

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default App;
