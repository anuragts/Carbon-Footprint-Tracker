const itemList = document.querySelector(".items");
var product = document.getElementById("selected-food");
var freq = document.getElementById('freq');
var servings = document.getElementById("serv");
var results = document.getElementById("result");


var item = [
    {
      name: "Truck",
      emission: 0.65,
      serving: "1km per day",
      iconURL: "https://img.icons8.com/office/50/000000/truck.png",
    },
    {
      name: "Car",
      emission: .120,
      serving: "1km per day",
      iconURL: "https://img.icons8.com/fluent/50/000000/car.png"
    },
    {
      name:"Motorcycle",
      serving: "1km per day",
      emission: 0.5,
      serving: "75g per serving",
      iconURL:"https://img.icons8.com/doodle/50/000000/motorcycle.png"
    },
    {
      name:"Bus",
      serving: "1km per day",
      emission: 0.822,
      iconURL:"https://img.icons8.com/color/50/000000/bus.png"
    },
    {
      name:"AirPlane",
      serving: "1km per day",
      emission: 24,
      iconURL:"https://img.icons8.com/color/50/000000/airplane.png"
    }
  
  ];
  
  item.forEach(info);
  
  function info(value){
  itemList.insertAdjacentHTML(
      "beforeend",
      `<div class="col-xs-4 col-md-2"><img id=${value.name} src=${value.iconURL} onclick="show(this.id, ${value.emission})" class="img-responsive image"/></div>`
  );
  }
  
  //footprint.insertAdjacentHTML(
  //    "afterbegin",
  //    `<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTA1LjE0NCAxMDUuMTQ0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDUuMTQ0IDEwNS4xNDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNOTguMTI2LDMwLjgxMmMtOS44ODUtMTEuNDA2LTMzLjQxMi0xMC42MTEtMzUuMDEyLTEuNDE3Yy0xLjMyOCw3LjY1OSw2LjcxLDExLjk0MywxMC41NTQsMTUuOTE1DQoJCWM0LjQ0NSw0LjU5Miw1LjIsMTIuMDExLDEuNTM1LDE3LjA3MWMtMS41MjgsMi4xMDEtMTAuNjUxLDExLjMzMS03LjkzOCwyMC40NDZjMS4zNzgsNC42MjQsNC40ODEsNi42OTYsOC41MzksNy41MzcNCgkJYzEzLjQ5NiwyLjgwOSwxNC45Mi03Ljg5OSwxNS4wNi0xMi42NTFjMC4xMjUtNC40NTksMC43OTEtOC43OTMsMi42MjctMTIuODc3Qzk3Ljk5Nyw1NC41OSwxMDQuODI5LDM4LjU1LDk4LjEyNiwzMC44MTJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik02My45OTEsMC4wNDVjMy4wNTMtMC40OSw2LjE2NiwzLjExNCw2Ljk1Nyw4LjA0NWMwLjc5MSw0LjkzMi0xLjAzNCw5LjMzLTQuMDgzLDkuODINCgkJYy0zLjA1MywwLjQ5LTYuMTYzLTMuMTE0LTYuOTU3LTguMDQ1QzU5LjEyLDQuOTMzLDYwLjk0NSwwLjUzNSw2My45OTEsMC4wNDV6IE04MS44MjgsOS4zNzFjMC4xODYsMy40NTQtMS4zODksNi4zNDUtMy41MjIsNi40NjMNCgkJYy0yLjEzNywwLjExNS00LjAxNS0yLjU5MS00LjIwNS02LjA0NXMxLjM5Mi02LjM0NSwzLjUyMi02LjQ2M0M3OS43NTYsMy4yMTIsODEuNjM4LDUuOTE4LDgxLjgyOCw5LjM3MXogTTkwLjc4OSwxMS44NjINCgkJYzAuMTU0LDIuODAyLTEuMTI3LDUuMTU0LTIuODYzLDUuMjQ3Yy0xLjczNiwwLjA5My0zLjI1Ny0yLjEwMS0zLjQxMS00LjkwN2MtMC4xNTQtMi44MDYsMS4xMjQtNS4xNTQsMi44Ni01LjI1DQoJCUM4OS4xMTEsNi44NTUsOTAuNjM5LDkuMDU2LDkwLjc4OSwxMS44NjJ6IE05Ni4zMTUsMTYuMDA2Yy0wLjE0NywyLjA3Mi0xLjMwNiwzLjY3OS0yLjU4OCwzLjU4Ng0KCQljLTEuMjgxLTAuMDg5LTIuMjAxLTEuODQzLTIuMDU0LTMuOTE1czEuMzAzLTMuNjc5LDIuNTg4LTMuNTg2Qzk1LjUzOCwxMi4xODEsOTYuNDYyLDEzLjkzNCw5Ni4zMTUsMTYuMDA2eiBNMTAwLjIzLDIwLjg5NQ0KCQljLTAuMTE1LDEuNjUzLTEuMDQxLDIuOTM1LTIuMDY1LDIuODYzYy0xLjAyLTAuMDc1LTEuNzU3LTEuNDc0LTEuNjQzLTMuMTI4YzAuMTE4LTEuNjUzLDEuMDQ1LTIuOTM1LDIuMDY5LTIuODYzDQoJCUM5OS42MTUsMTcuODQyLDEwMC4zNDgsMTkuMjQ1LDEwMC4yMywyMC44OTV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik00Mi4wMjcsNDMuNzFjLTEuNi05LjE5NC0yNS4xMjctOS45ODUtMzUuMDA4LDEuNDE3Yy02LjcwMyw3LjczNywwLjEyMiwyMy43ODEsNC42MzUsMzQuMDI0DQoJCWMxLjgzNiw0LjA4NywyLjQ5OCw4LjQxNCwyLjYyNywxMi44NzNjMC4xNCw0Ljc1MywxLjU2OCwxNS40NjEsMTUuMDYsMTIuNjU4YzQuMDU4LTAuODQ1LDcuMTYxLTIuOTEzLDguNTM2LTcuNTQxDQoJCWMyLjcxMy05LjExNS02LjQwNi0xOC4zNDUtNy45MzQtMjAuNDQ2Yy0zLjY2OC01LjA2LTIuOTEzLTEyLjQ3NiwxLjUzMi0xNy4wNzFDMzUuMzE3LDU1LjY1Myw0My4zNTUsNTEuMzY5LDQyLjAyNyw0My43MXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTM0LjE4NiwyMi40MDljMC43OTUtNC45MzIsMy45MDgtOC41MzYsNi45NTQtOC4wNDVjMy4wNDYsMC40OSw0Ljg3NCw0Ljg4NSw0LjA4Myw5LjgyDQoJCWMtMC43OTUsNC45MzItMy45MDgsOC41MzYtNi45NTQsOC4wNDVDMzUuMjIsMzEuNzM5LDMzLjM5NSwyNy4zNDQsMzQuMTg2LDIyLjQwOXogTTMxLjA0NywyNC4xMDINCgkJYy0wLjE4NiwzLjQ1NC0yLjA3Miw2LjE1OS00LjIwNSw2LjA0MWMtMi4xMzctMC4xMTUtMy43MTUtMy4wMS0zLjUyNS02LjQ2M2MwLjE5LTMuNDU0LDIuMDcyLTYuMTU5LDQuMjA1LTYuMDQxDQoJCUMyOS42NTUsMTcuNzU2LDMxLjIzNywyMC42NTIsMzEuMDQ3LDI0LjEwMnogTTIwLjYyNiwyNi41MjFjLTAuMTU0LDIuODA2LTEuNjc4LDUtMy40MTEsNC45MDcNCgkJYy0xLjcyOS0wLjA5My0zLjAxLTIuNDQ0LTIuODU2LTUuMjQ3YzAuMTUtMi44MDYsMS42NzgtNS4wMDMsMy40MTEtNC45MUMxOS40OTksMjEuMzY3LDIwLjc3NiwyMy43MTksMjAuNjI2LDI2LjUyMXoNCgkJIE0xMy40NjgsMjkuOTkyYzAuMTQ3LDIuMDcyLTAuNzczLDMuODI2LTIuMDUxLDMuOTE1cy0yLjQzNy0xLjUxNy0yLjU4NC0zLjU5czAuNzczLTMuODI2LDIuMDUxLTMuOTE1DQoJCUMxMi4xNjUsMjYuMzEzLDEzLjMyMSwyNy45MiwxMy40NjgsMjkuOTkyeiBNOC42MDgsMzQuOTUzYzAuMTE4LDEuNjUzLTAuNjE2LDMuMDU2LTEuNjM5LDMuMTI4DQoJCWMtMS4wMiwwLjA3Mi0xLjk0My0xLjIxLTIuMDYxLTIuODYzYy0wLjExOC0xLjY1MywwLjYxNi0zLjA1NiwxLjYzNi0zLjEyOEM3LjU2NywzMi4wMTUsOC40OSwzMy4yOTYsOC42MDgsMzQuOTUzeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />`
  //)
  
  function show(value, emission){
      const s = item.find(food => food.name === value).serving
      product.innerHTML = "Vehical:   " + value ;
      freq.onchange = function() {
      servings.innerHTML = "Travels: " + s;
      results.innerHTML = "Your annual usage of " + value.toLowerCase() + " is contributing to " + (freq.value * 52 * emission).toFixed(2)+ " kg to your greenhouse gas emissions.";
  };
  }