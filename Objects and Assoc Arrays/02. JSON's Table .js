function jsonTable(array) {
    let html = '<table>\n';
    for (let obj of array) {
        let parsed = JSON.parse(obj);
        let keys = Object.keys(parsed);
            html += "   <tr>\n";
        for (let key of keys) {
                html += `        <td>${escapeHtml(parsed[key]+"")}</td>\n`;
        }
            html += "   </tr>\n";
    }
    html += '</table>';
    function escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
    return html;

}