javascript:(function(){var yesterday=new Date();yesterday.setDate(yesterday.getDate()-1);yesterday.setHours(12);yesterday.setMinutes(0);yesterday.setSeconds(0);console.log(yesterday);var students=document.querySelectorAll("table.sticky-table > tbody tr.sCourseStats-processed");for(var student of students){var studentName,lastAccess,lastAccessTime,hasAccessed=null;var lastCourseAccess=(student.querySelectorAll("td.last-course-access > div.small.gray.exact-time"));studentName=(student.querySelectorAll("td.student-info > div.student-name"))[0].innerText;console.log(studentName);hasAccessed=!!lastCourseAccess[0];if(hasAccessed){lastAccess=lastCourseAccess[0].innerText;}else{student.style.background="red";student.style.color="white";continue;}if(lastAccess!=null){var tokens=lastAccess.split(" ");var hour=Number(tokens[5].split(":")[0]);var minute=tokens[5].split(":")[1];if(tokens[6]=="pm"&&hour!==12){time=hour+12+":"+minute;}else{time=hour+":"+minute;}var formatted=tokens[0]+", "+tokens[2].replace(",",'')+" "+tokens[1]+" "+tokens[3]+" "+time+" GMT-0600";var date=Date.parse(formatted);console.log(date);console.log(yesterday.getTime());console.log(date-yesterday.getTime());if(date>yesterday.getTime()){student.style.background="#efefef";student.style.color="black";}else{student.style.background="red";student.style.color="white";}}}})();