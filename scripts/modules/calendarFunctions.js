import { createTextEl } from "./generalFunctions.js";

///////
//// Functions for calendar

export function generateCalendar(currentMonth, currentYear, calEle) {
  calEle.innerHTML = "";

  ////////
  //// display current month & year
  const curMonYrString = new Date(currentYear, currentMonth).toLocaleDateString(
    "en-US",
    { month: "long", year: "numeric" }
  );
  createTextEl("h3", curMonYrString, calEle, ["calendar__MMMYYYY"]);

  ///////
  /// calendar processes
  const today = new Date();

  const monthFirstDay = new Date(currentYear, currentMonth, 1).getDay() - 1;
  // day of date 1 - {0 -> 6}
  // we start on monday -> day - 1 -> to set monday = 0

  // month last date = next month 1st date - 1
  const monthLastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Create the HTML structure for the calendar
  const calendarHTML = document.createElement("table"); //<table>
  calendarHTML.classList.add("calendar__table");

  // Create the calendar table header (days of the week)
  const headerRow = document.createElement("tr");

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  weekdays.forEach((weekday) => {
    const th = document.createElement("th");
    th.textContent = weekday;
    headerRow.appendChild(th); // add each <th>weekday</th> to <tr>
  });
  calendarHTML.appendChild(headerRow); // add <tr> to table

  // Create the calendar table body
  const tbody = document.createElement("tbody"); //<tbody>

  // table wil have 6 rows x 7 cols
  const tbodyRowNum = 6;
  const weekDayNum = 7;

  let date = 1;

  // Populate the calendar with days
  // in each row of 6 rows in <tbody>
  for (let i = 0; i < tbodyRowNum; i++) {
    const row = document.createElement("tr");

    // i = row ; j = col in row
    for (let j = 0; j < weekDayNum; j++) {
      // for each day of 7 days (a week)

      const td = document.createElement("td"); // create <td>

      // Fill in the days of the month
      if (i === 0 && j < monthFirstDay) {
        // at first row & col < start day -> set <td>''</td>
        td.textContent = "";
      } else if (date > monthLastDate) {
        // at some last col of last row, when date {31..33} > actual last date -> set <td>''</td>
        td.textContent = "";
      } else {
        // set <td>date</td>
        td.textContent = date;
        date++;
      }

      row.appendChild(td); // add td to tr
    }
    tbody.appendChild(row); // add tr to tbody
  }

  calendarHTML.appendChild(tbody); // add tr to tbody

  // Clear the existing content and insert the calendar HTML

  calEle.appendChild(calendarHTML);
}
