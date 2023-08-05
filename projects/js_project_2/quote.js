window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
   let xhr = new XMLHttpRequest();
   xhr.responseType = "json";
   xhr.addEventListener("load", responseReceivedHandler);

   let queryString = "topic=" + topic + "&count=" + count;
   
   xhr.open("GET", "https://wp.zybooks.com/quotes.php?" + queryString);
   xhr.send();
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {
   let html = "";
   if(this.status === 200) {
      html = "<ol>";
      try {
         for (let object of this.response) {
            html += `<li>${object.quote} - ${object.source}</li>`;
         }
         html += "</ol>";
      } catch (error) {
         html = this.response.error;
      }
   }
   else {
      html = this.response.error;
   }
   document.querySelector("#quotes").innerHTML = html;
}