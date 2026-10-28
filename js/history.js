function saveSearchResult(data) {
 let history = JSON.parse(localStorage.getItem("history")) || [];
 history.push(data);
 localStorage.setItem("history", JSON.stringify(history));
}

function loadHistory() {
 return JSON.parse(localStorage.getItem("history")) || [];
}
