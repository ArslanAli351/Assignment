
function Data1() {
    const data = new Date()
    const month = data.getMonth() + 1
    const date = data.getDate()
    const year = data.getFullYear()
    const time = data.toLocaleTimeString()
    const result = `${month}/${date}/${year} ${time} `
    console.log(result);
}
Data1()

function Data2() {
    const data = new Date()
    const month = data.getMonth() + 1
    const date = data.getDate()
    const year = data.getFullYear()
    const time = data.toLocaleTimeString()
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day=data.getDay()
    const result = `${dayNames[day]} ${month}/${date}/${year} ${time} `
    console.log(result);
}
Data2()

function Data3() {
    const data = new Date()
    const month = data.getMonth() + 1
    const date = data.getDate()
    const year = data.getFullYear()
    const time = data.toLocaleTimeString()
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day=data.getDay()
    const result = `${year}/${month}/${date} ${time} ${dayNames[day]}`
    console.log(result);
}
Data3()

function Data4() {
    const data = new Date()
    const month = data.getMonth() + 1
    const date = data.getDate()
    const year = data.getFullYear()
    const time = data.toLocaleTimeString()
    const monthName= ["January","February","March","April","May","June","July","August","September","October","November","December"];    const day=data.getDay()
    const result = ` ${monthName[month]} ${date}th ${year} ${time}`
    console.log(result);
}
Data4()

function Data5() {
    const data = new Date()
    const month = data.getMonth() + 1
    const date = data.getDate()
    const year = data.getFullYear()
    const time = data.toLocaleTimeString()
    const monthName= ["January","February","March","April","May","June","July","August","September","October","November","December"];    const day=data.getDay()
    const result = `${date} ${monthName[month]} ${year} at ${time}`
    console.log(result);
}
Data5()
