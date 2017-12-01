window.addEventListener('load', function() {
// Creacion de contenedor principal por Melissa, llamando variable.
  var selection = document.getElementById('selection');
  selection.addEventListener('click', showPercent);
  // Creando variables de contenidos
  var containerFilter2 = document.getElementById('containerFilter2');
  var containerFilter3 = document.getElementById('containerFilter3');
  var containerFilter4 = document.getElementById('containerFilter4');
  // Creando funcion filtros preguntas 2,3,4.
  function showPercent(event) {
    var selectiong = selection.value; // se iguala a opciones del contenedor.
    var dataNew = selectiong.split('-'); // separamos convertimos nuevo array
    var newArrayData = dataNew.splice(1, 2); // convertimos en array
    var newArrayDataGeneration = newArrayData[0] + '-' + newArrayData[1];
    var newArrayDataSede = dataNew.splice(0, 1);
    var newDataGeneration = data[newArrayDataSede][newArrayDataGeneration];
    console.log(newDataGeneration['students']);
    var countPerct = 0;
    for (var i = 0; i < newDataGeneration['students'].length; i++) {
      if (newDataGeneration['students'][i]['active'] === false) {
        countPerct++;
        var percent = ((countPerct * 100) / (newDataGeneration['students'].length)).toFixed(2) + '% ';
        containerFilter2.innerHTML = percent + '</br>' + '% DROPOUT';
      }
    }
    var countSprints = 0;
    for (var i = 0; i < newDataGeneration['students'].length; i++) {
      for (var j = 0; j < newDataGeneration['students'][i]['sprints'].length; j++) {
        if (newDataGeneration['students'][i]['sprints'][j]['score']['tech'] >= 1260 && newDataGeneration['students'][i]['sprints'][j]['score']['hse'] >= 840) {
          countSprints++;
          containerFilter3.innerHTML = countSprints + '</br>' + 'STUDENTS THAT MEER THE TARGET';
          var percentCountSprints = ((countSprints * 100) / (newDataGeneration['students'].length)).toFixed(2) + '% ';
          containerFilter4.innerHTML = percentCountSprints + '</br>' + 'OF Total';
        }
      }
    }
  }
});

