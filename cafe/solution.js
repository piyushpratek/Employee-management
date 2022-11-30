const getCafes = async () => {
  const api =
    'https://gist.githubusercontent.com/piyushpratek/e35679b2ab433c32505d130cad7951a1/raw/a3189a18e8d2382667c04de4c8e88dad99b07338/cafes.json';
  const response = await fetch(api);
  return await response.json();
};
var cafes = [];
getCafes().then((result) => {
  // cafes = Array.from(result.cafes);

  // console.log(cafes[1]);

  console.log('got result', result);
});

const getPlaces = async () => {
  const api =
    'https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json';
  return fetch(api).then((response) => {
    return response.json();
  });
};
var places = [];
getPlaces().then((result) => {
  // places = Array.from(result.places);
  // console.log(places[1]);
  console.log('got places', places);
});

function searching() {
  let inp = document.getElementById('search').value;
  inp = inp.toUpperCase();
  Result = calc(inp);
  var table = document.getElementById('table-body');
  Result.forEach((objects) => {
    var columns = '';
    for (var k in objects) {
      columns += `<td class="${k}>${objects[k]}</td>\n`;
    }
    var rows = `<tr>${columns}</tr>`;
    table.innerHTML += rows;
  });

  console.log(Result);
}

function calc(inp) {
  arr = [];
  for (let i = 0; i < cafes.length; i++) {
    if (cafes[i].name.toUpperCase().startsWith(inp) === true) {
      let id1 = cafes[i].location_id;
      //   console.log('hi:'+inp);
      for (let j = 0; j < places.length; j++) {
        if (places[j].id === id1) {
          var obj = Object.assign({}, places[j]);
          obj['name'] = cafes[i].name;
          delete obj.id;
          arr.push(obj);
        }
      }
    }
  }
  return arr;
}
