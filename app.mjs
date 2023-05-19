setInterval(

//window.comNextBirthday()
function comNextBirthday(){
    let birthMonth = document.querySelector ("#Month").value;
    //birthMonth = Number(birthMonth);

    let birthDate = document.querySelector ("#Date").value;
    birthDate = Number(birthDate);

    let current = new Date();
    let currentMonth = current.getMonth();
    let currentDate = current.getDate();
    let currentHours = current.getHours();
    let currentMinutes = current.getMinutes();
    let currentSeconds = current.getSeconds();
    let currentMilliseconds = current.getMilliseconds();
    
    console.log ("Current Month :" , currentMonth);
    
    let month;
    //Setting of Months in to indexes
    if(birthMonth === 'January'){
        month = 0
    }else if(birthMonth === 'Feburary'){
        month = 1
    }else if(birthMonth === 'March'){
        month = 2
    }else if(birthMonth === 'April'){
        month = 3
    }else if(birthMonth === 'May'){
        month = 4
    }else if(birthMonth === 'June'){
        month = 5
    }else if(birthMonth === 'July'){
        month = 6
    }else if(birthMonth === 'August'){
        month = 7
    }else if(birthMonth === 'September'){
        month = 8
    }else if(birthMonth === 'October'){
        month = 9
    }else if(birthMonth === 'November'){
        month == 10
    }else{
        month == 11
    }

    console.log(month)

    //Taking month

    let months = month - currentMonth;
    if(months < 0){
        months = months + 12;
    }else{
        months = months;
    }
    console.log("Months : " ,months)


    //Taking Dates

    let date = birthDate - currentDate;
    if(date < 0){
        date = date + 30;
        months = months - 1
    }else{
        date = date;
    }


    //Taking Hour

    let hour = 23 - currentHours;
    if(hour === 0){
        date = date - 1;
    }else{
        date = date;
    }


    //Taking Minutes


    let minute = 60 - currentMinutes;
    if(minute === 0){
        hour = hour - 1;
    }else{
        hour = hour;
    }

    //Taking Seconds


    let second = 60 - currentSeconds;
    if(second === 0){
        minute = minute - 1;
    }else{
        minute = minute;
    }
    
    
    ///Taking Milliseconds
    
    
    let millisecond = 1000 - currentMilliseconds;
    if (millisecond === 0){
        second = second - 1;
    }else{
        second = second;
    }
    
    if(months === -1){
        months = 11;
    }else{
        months = months;
    }
    //Singular Plural
    
    let month1 = ""
    if(months === 1){
        month1 = 'Month';
    }else{
        month1 = 'Months';
    }

    let date1 = ""
    if(date === 1){
        date1 = 'Day';
    }else{
        date1 =  'Days';
    }

    let hour1 = ""
    if(hour === 1){
        hour1 = 'Hour';
    }else{
        hour1 = 'Hours';
    }

    let minute1 = ""
    if(minute === 1){
        minute1 = 'Minute';
    }else{
        minute1 = 'Minutes';
    }

    let second1 = ""
    if(second === 1){
        second1 = 'Second';
    }else{
        second1 = 'Seconds';
    }


    let result = `${months} ${month1} <br> ${date} ${date1}, <br/> ${hour} ${hour1}, <br/> ${minute} ${minute1}, <br/> ${second} ${second1}`

    console.log("Result : " , result);

    document.querySelector("#next").innerHTML = result;
}
, 1
)