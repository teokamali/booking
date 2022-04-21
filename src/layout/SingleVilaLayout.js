import React, { useState } from "react";
import "./SingleVilaLayout.scss";
import VilaSingleSidbar from "../components/VilaSingleSideBar/VilaSingleSidbar";
import VilaSingleMain from "../components/VilaSingleMain/VilaSingleMain";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
function SingleVilaLayout() {
  const [calendarDate, setCalendarDate] = useState([
    new DateObject({ calendar: persian, locale: persian_fa }),
    new DateObject({ calendar: persian, locale: persian_fa }),
  ]);
  return (
    <div className="layout-container container mt-3 ">
      <main className="container__main">
        <VilaSingleMain
          calendarDate={calendarDate}
          setCalendarDate={(e) => setCalendarDate(e)}
        />
      </main>
      <aside className="container__sidebar">
        <VilaSingleSidbar
          calendarDate={calendarDate}
          setCalendarDate={(e) => setCalendarDate(e)}
        />
      </aside>
    </div>
  );
}

export default SingleVilaLayout;
