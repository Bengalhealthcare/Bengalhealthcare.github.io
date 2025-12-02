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


const links = document.querySelectorAll('.nav a');

links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});








//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

// Doctor list (editable)
const doctors = [
  { name: "Dr. Naveen kumar Gupta(Eurologist) -P.G Medical College and Hospital", Day: "প্রতি মাসের ১ম এবং ৩য় রবিবার", time: "---" },
  { name: "Dr. A. Pani(nephrologist) -Kolkata Medical College", Day: "প্রতি মাসের ২য় এবং ৪র্থ মঙ্গলবার", time: "----" },
  { name: "Dr. Souvik Ghatak(nephrologist) -P.G Hospital kolkata", Day: "----", time: "----" },
  { name: "Dr. Soham Das Bakshi(General Medicine) -Arambagh Medical College", Day: "----", time: "----" },
  { name: "Dr. Ayan Midya(General Medicine) -Professor of Arambagh Medical College", Day: "প্রতি সপ্তাহের সোমবার এবং মঙ্গলবার", time: "---" },
  { name: "Dr. Manish Sharma(Medicine) -Arambagh Medical College", Day: "সোমবার থেকে বৃহস্পতিবার", time: "11 টা থেকে" },

  { name: "Dr. Anukaran Saha(Gynecologist and Obstetrician) -Arambagh Medical College", Day: "----", time: "----" },
  { name: "Dr. Shatavisa khara(Gynecologist and Obstetrician) -Arambagh Medical College", Day: "প্রতি শনিবার", time: "বিকাল 4 টা থেকে" },
  { name: "Dr. Satrajit Ghoshal(Neurologist and Psychiatrist) -Santiniketan Medical College", Day: "প্রতি বুধবার ", time: " সকাল 10 টা থেকে " },


  { name: "Dr. Sukanta Chakrabortty(General Surgeon) -kolkata P.G and Arambagh Medical College", Day: "সোমবার থেকে বৃহস্পতিবার", time: "সকাল 9 টা থেকে " },
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



const GAS_URL = "https://script.google.com/macros/s/YOUR_DEPLOY_ID/exec"; // paste your web app url
const DOWNLOAD_TOKEN = "CHANGE_DOWNLOAD_TOKEN_xyz"; // must match Apps Script DOWNLOAD_TOKEN

function openForm(e) {
  if (e) e.preventDefault();
  document.getElementById('appointmentForm').setAttribute('aria-hidden', 'false');
  document.getElementById('formStatus').textContent = '';
  document.getElementById('apptForm').reset();
}
function closeForm() {
  document.getElementById('appointmentForm').setAttribute('aria-hidden', 'true');
}
function showStatus(msg, ok = true) {
  const el = document.getElementById('formStatus');
  el.textContent = msg;
  el.style.color = ok ? 'green' : 'red';
}

async function sendToGAS(e) {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);

  showStatus('Sending...', true);

  try {
    const res = await fetch(GAS_URL, { method: 'POST', mode: 'cors', body: fd });
    const json = await res.json().catch(() => null);

    if (json && json.status === 'ok') {
      showStatus('Saved to CSV — thank you!', true);
      form.reset();
      setTimeout(closeForm, 1000);
      return;
    }

    const msg = json && json.message ? json.message : 'Submit failed';
    showStatus(msg, false);
    console.error('GAS response', res.status, json);

  } catch (err) {
    console.error(err);
    showStatus('Network error — check console and GAS URL.', false);
  }
}

// Admin flow: requests CSV from Apps Script and triggers browser download
async function downloadCSVAdmin() {
  // prompt for password (or show your custom login modal)
  const pass = prompt('Enter admin download password:');
  if (!pass) return;

  if (pass !== DOWNLOAD_TOKEN) {
    alert('Incorrect password'); // quick client-side check (optional)
    return;
  }

  try {
    const fd = new FormData();
    fd.append('download_token', DOWNLOAD_TOKEN);

    const res = await fetch(GAS_URL, { method: 'POST', mode: 'cors', body: fd });
    const json = await res.json();

    if (json && json.status === 'ok' && json.csv !== undefined) {
      const blob = new Blob([json.csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'appointments.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      alert('Download started');
    } else {
      alert('Failed: ' + (json && json.message ? json.message : 'Unknown error'));
      console.error(json);
    }

  } catch (err) {
    console.error(err);
    alert('Network error — check console.');
  }
}
