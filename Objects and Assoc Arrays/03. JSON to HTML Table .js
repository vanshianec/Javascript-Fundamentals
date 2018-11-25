 function fromJSONToHTMLTable(json) {
        let html = "<table>\n";
        let arr = JSON.parse(json);
        html += " <tr>";
        for (let key of Object.keys(arr[0])) {
        html += `<th>${htmlEscape(key)}</th>`;
        }
        html += "</tr>\n";
        for (let obj of arr) {
            html += " <tr>";
            let keys = Object.keys(obj);
            for (let key of keys){
            html += `<td>${htmlEscape(obj[key]+"")}</td>`;
            }
            html += "</tr>\n";
        }

        return html + "</table>";
        function htmlEscape(text) {
            return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }
    }