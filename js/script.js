const videos = [
    "第1回の動画URL",
    "第2回の動画URL",
    "第3回の動画URL",
    "第4回の動画URL",
    "第5回の動画URL",
    "第6回の動画URL",
    "第7回の動画URL",
    "第8回の動画URL",
    "第9回の動画URL",
    "第10回の動画URL",
    "第11回の動画URL",
    "第12回の動画URL",
    "第13回の動画URL",
    "第14回の動画URL",
    "第15回の動画URL",
    "第16回の動画URL",
    "第17回の動画URL",
    "第18回の動画URL",
    "第19回の動画URL",
    "第20回の動画URL",
    "第21回の動画URL",
    "第22回の動画URL",
    "第23回の動画URL",
    "第24回の動画URL",
    "第25回の動画URL",
    "第26回の動画URL",
    "第27回の動画URL",
    "第28回の動画URL",
    "第29回の動画URL",
    "第30回の動画URL"
];

const pdfs = [
    "第1回のPDF URL",
    "第2回のPDF URL",
    "第3回のPDF URL",
    "第4回のPDF URL",
    "第5回のPDF URL",
    "第6回のPDF URL",
    "第7回のPDF URL",
    "第8回のPDF URL",
    "第9回のPDF URL",
    "第10回のPDF URL",
    "第11回のPDF URL",
    "第12回のPDF URL",
    "第13回のPDF URL",
    "第14回のPDF URL",
    "第15回のPDF URL",
    "第16回のPDF URL",
    "第17回のPDF URL",
    "第18回のPDF URL",
    "第19回のPDF URL",
    "第20回のPDF URL",
    "第21回のPDF URL",
    "第22回のPDF URL",
    "第23回のPDF URL",
    "第24回のPDF URL",
    "第25回のPDF URL",
    "第26回のPDF URL",
    "第27回のPDF URL",
    "第28回のPDF URL",
    "第29回のPDF URL",
    "第30回のPDF URL"
];

const lectures = document.getElementById("lectures");

for (let i = 1; i <= 30; i++) {

    const lecture = document.createElement("div");

    lecture.innerHTML = `
        <h2>第${i}回</h2>

        <button onclick="location.href='${videos[i - 1]}'">
            🎥 動画
        </button>

        <button onclick="location.href='${pdfs[i - 1]}'">
            📄 資料PDF
        </button>
    `;

    lectures.appendChild(lecture);
}