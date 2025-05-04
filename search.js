const suggestions = [
  { name: "Tour Pháp – Thụy Sĩ – Ý, 27/4/2025", url: "tour1.html" },
  { name: "Tour Pháp – Bỉ – Hà Lan – Đức – Thụy Sĩ", url: "tour2.html" },
  { name: "Tour Pháp – Bỉ – Hà Lan – Ý – Thụy Sĩ", url: "tour3.html" },
  { name: "Tour Pháp – Luxembourg – Đức – Bỉ – Hà Lan", url: "tour4.html" },
  { name: "Tour Đức – Czech – Áo – Thụy Sĩ – Ý", url: "tour5.html" },
  { name: "Tour Pháp – Thụy Sĩ – Ý, 25/5/2025", url: "tour6.html" },
  { name: "Tour Pháp – Bỉ – Hà Lan – Đức", url: "tour7.html" },
  { name: "Tour Đức – Áo – Séc", url: "tour8.html" },
  { name: "Tour Pháp – Tây Ban Nha – Bồ Đào Nha", url: "tour9.html" },
  { name: "Tour Đức – Áo – Hungary – Czech – Ba Lan", url: "tour10.html" },
  { name: "Tour Nhật Bản – Hàn Quốc 9N8Đ", url: "tour11.html" },
  { name: "Tour Trung Quốc – Hồng Kông – Ma Cao 10N9Đ", url: "tour12.html" },
  { name: "Tour Thái Lan – Malaysia – Singapore 10N9Đ", url: "tour13.html" },
  { name: "Tour Ấn Độ – Nepal – Bhutan 9N8Đ", url: "tour14.html" },
  { name: "Tour Dubai – Abu Dhabi – Qatar 10N9Đ", url: "tour15.html" },
  { name: "Tour Campuchia – Lào – Thái Lan 9N8Đ", url: "tour16.html" },
  { name: "Tour Philippines – Maldives 10N9Đ", url: "tour17.html" },
  { name: "Tour Sri Lanka – Ấn Độ 9N8Đ", url: "tour18.html" },
  { name: "Tour Indonesia – Malaysia – Singapore 12N11Đ", url: "tour19.html" },
  { name: "Tour Dubai – Abu Dhabi – Qatar 12N11Đ", url: "tour20.html" },
  { name: "Tour Hà Nội – Hạ Long – Ninh Bình 5N4Đ", url: "tour21.html" },
  { name: "Tour Huế – Đà Nẵng – Hội An 4N3Đ", url: "tour22.html" },
  { name: "Tour Cần Thơ – Châu Đốc – Sóc Trăng 3N2Đ", url: "tour23.html" },
  { name: "Tour Quy Nhơn – Phú Yên 4N3Đ", url: "tour24.html" },
  { name: "Tour Sapa – Fansipan – Cát Cát 4N3Đ", url: "tour25.html" },
  { name: "Tour Vũng Tàu – Hồ Tràm 2N1Đ", url: "tour26.html" },
  { name: "Tour Nha Trang – VinWonders 3N2Đ", url: "tour27.html" },
  { name: "Tour Mộc Châu – Mai Châu 3N2Đ", url: "tour28.html" },
  { name: "Tour Phú Quốc – Nam Đảo – Vinpearl 4N3Đ", url: "tour29.html" },
  { name: "Tour Đà Lạt – Langbiang – Thung Lũng Tình Yêu 3N2Đ", url: "tour30.html" },  
];
// Hàm loại bỏ dấu
function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

function showSuggestions() {
  const inputRaw = document.getElementById("search-input").value;
  const input = removeVietnameseTones(inputRaw.toLowerCase());
  const suggestionBox = document.getElementById("suggestion-box");
  suggestionBox.innerHTML = "";

  if (input === "") {
    suggestionBox.style.display = "none";
    return;
  }

  const filtered = suggestions.filter(item =>
    removeVietnameseTones(item.name.toLowerCase()).includes(input)
  );

  if (filtered.length === 0) {
    suggestionBox.style.display = "none";
    return;
  }

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("suggestion-item");
    div.innerHTML = `<a href="${item.url}" style="text-decoration: none; color: inherit;">${item.name}</a>`;
    suggestionBox.appendChild(div);
  });

  suggestionBox.style.display = "block";
}