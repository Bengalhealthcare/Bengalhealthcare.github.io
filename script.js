// JS slider
const hero = document.getElementById("hero");

// List of images
const images = [
  "images/bengal_image.jpeg",
  "images/nursing-home.jpg",
  "images/nursing home 1.avif",
  "images/nursing home 2.jpg",
];

let index = 0;

// Change image every 5 seconds
setInterval(() => {
  hero.style.backgroundImage = `
    linear-gradient(90deg, rgba(0,0,0,0.55), rgba(0,0,0,0.25)),
    url('${images[index]}')`;
  
  index = (index + 1) % images.length; // loop back
}, 5000);










//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

    // Doctor list (editable)
  const doctors = [
  { name: "Dr. Nabin kumar Gupta(Eurologist) -P.G Medical College and Hospital", Day: "প্রতি মাসের ১ম এবং ৩য় রবিবার", time: "---" },
  { name: "Dr. A. Pani(nephrologist) -Kolkata Medical College", Day: "প্রতি মাসের ২য় এবং ৪র্থ মঙ্গলবার", time: "----" },
  { name: "Dr. Souvik Ghatak(nephrologist) -P.G Hospital kolkata", Day: "----", time: "----" },
  { name: "Dr. Soham Das Bakshi(General Medicine) -Arambagh Medical College", Day: "----", time: "----" },
  { name: "Dr. Ayon Middha(General Medicine) -Professor of Arambagh Medical College", Day: "প্রতি সপ্তাহের সোমবার এবং মঙ্গলবার", time: "---" },
  { name: "Dr. Manish Sharma(Medicine) -Arambagh Medical College", Day: "সোমবার থেকে বৃহস্পতিবার", time: "11 টা থেকে" },
  
  { name: "Dr. Anukaran Saha(Gynecologist and Obstetrician) -Arambagh Medical College", Day: "----", time: "----" },
  { name: "Dr. Shatavisa khara(Gynecologist and Obstetrician) -Arambagh Medical College", Day: "প্রতি শনিবার", time: "বিকাল 4 টা থেকে" },
  { name: "Dr. Satrajit Ghoshal(Neurologist and Psychiatrist) -Santiniketan Medical College", Day: "প্রতি বুধবার ", time: " সকাল 10 টা থেকে " },


  { name: "Dr. Sukanta Chakrabarty(General Surgeon) -kolkata P.G and Arambagh Medical College", Day: "সোমবার থেকে বৃহস্পতিবার", time: "সকাল 9 টা থেকে " },
  { name: "Dr. Arijit Ghosh(Neurologist Surgeon) - Professor of Bangur Hospital", Day: "মাসের ১৫ দিন পর - রবিবার ", time: "দুপুর 3 টা থেকে " },
  { name: "Dr. Shirshendu Kheto(Orthopaedic Surgeon) -Arambagh Medical College", Day: "----", time: "----" },

];




function renderTimetable() {
  const wrap = document.getElementById("timetableWrap");
  wrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Doctor</th>
          <th>Day</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        ${doctors.map(d => `
          <tr>
            <td>${d.name}</td>
            <td>${d.Day}</td>
            <td>${d.time}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

renderTimetable();



    // Fill doctor select dropdown
    const doctorSelect = document.getElementById("p_doctor");
    doctors.forEach(d => {
      let opt = document.createElement("option");
      opt.textContent = `${d.name} (${d.time})`;
      opt.value = d.name;
      doctorSelect.appendChild(opt);
    });

    // Show timetable in sidebar
    const timetableWrap = document.getElementById("timetableWrap");
    let table = "<table><tr><th>Doctor</th><th>Time</th></tr>";
    doctors.forEach(d => {
      table += `<tr><td>${d.name}</td><td>${d.time}</td></tr>`;
    });
    table += "</table>";
    timetableWrap.innerHTML = table;



  
// -------------------------------------------------new section-----------------------------
// Tab switching
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove active class
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // add active to clicked tab + content
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
