var el = document.getElementsByTagName("a");
var j = 0;
for(j=0;j<el.length;j++){
    el[j].href = el[j].href.replace(/baumanki.net\/filearray\/file-download/, "baumanki.net/filearray/start-download");
}