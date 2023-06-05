var keys = ["place", "runtime", "dba", "db", "dose"];

async function setup(){
    var table = document.getElementById("table");
    var rawData;
    await fetch("https://withercraft303.github.io/hearing_loss/js/data.txt")
        .then(res => res.json())
        .then((data) => {
        console.log(data);
        rawData = data;
    }).catch(err => {
        console.log("no file");
        console.log(err);
    });
    document.getElementById("loading-container").style.visibility = "hidden";
    document.getElementById("table-container").style.visibility = "visible";
    document.getElementById("text-container").style.visibility = "visible";
    rawData=[
        {
          "place": "Physics classroom",
          "runtime": 61,
          "dba": 66.0,
          "db": 39.4,
          "dose": 1.2
        },
        {
          "place": "Whiteboard tables",
          "runtime": 49,
          "dba": 58.5,
          "db": 30.8,
          "dose": 0.2
        },
        {
          "place": "Gym",
          "runtime": 62,
          "dba": 67.5,
          "db": 40.9,
          "dose": 1.8
        },
        {
          "place": "Woodshop",
          "runtime": 60,
          "dba": 72.6,
          "db": 45.3,
          "dose": 5.8
        },
        {
          "place": "Music Room",
          "runtime": 61,
          "dba": 77.6,
          "db": 50.9,
          "dose": 18.0
        },
        {
          "place": "Office",
          "runtime": 60,
          "dba": 61.3,
          "db": 34.2,
          "dose": 0.4
        },
        {
          "place": "Cafeteria",
          "runtime": 60,
          "dba": 58.9,
          "db": 32.2,
          "dose": 0.2
        },
        {
          "place": "Front foyer",
          "runtime": 60,
          "dba": 64.9,
          "db": 38.2,
          "dose": 1.0
        },
        {
          "place": "Outside",
          "runtime": 61,
          "dba": 57.6,
          "db": 31.4,
          "dose": 0.2
        },
        {
          "place": "Library",
          "runtime": 61,
          "dba": 55.3,
          "db": 28.7,
          "dose": 0.1
        }
      ];      
    for (var i = 0; i < rawData.length; i++){
        let row = table.insertRow();
        for (var j = 0; j < keys.length; j++){
            let cell = row.insertCell();
            cell.append(rawData[i][keys[j]]);
        }
    }
}