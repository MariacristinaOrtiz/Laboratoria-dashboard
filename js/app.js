/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// se crearan las keys cohorts y cohortsList, las cuales representan
// el numero de cohortes y una lista de las cohortes respectivamente
var centers = [
  {name: 'arequipa',
    key: 'AQP'},
  {name: 'ciudad de mexico',
    key: 'CDMX'},
  {name: 'lima',
    key: 'LIM'},
  {name: 'santiago de chile',
    key: 'SCL'}
];

// se crean la cantidad de cohortes por sede
// y la lista de sus cohortes
function getCohorts() {
  for (var i = 0; i < centers.length; i++) {
    // cohortes por sede
    keys = Object.keys(data[centers[i].key]); // devuelve un array de las generaciones y estan alamacenadas en keys
    // numero de cohortes
    centers[i].cohorts = keys.length; // longitud de las generaciones  para recorrer las generaciones
    // cohortes
    centers[i].cohortsList = keys; // se le asigna la propiedad cohortlist y se le da valor de keys
  }
}

getCohorts();
var ZERO = 0;
var campusDefault = centers[ZERO].key;// sera AQP
var cohortDefault = centers[ZERO].cohortsList[ZERO]; // primera posicion de AQP

// Función que retorna estudiantes del campus y cohort seleccionado
function getStudents(data, campus = campusDefault, cohort = cohortDefault) {
  return data[campus][cohort].students;
}

/* var temp = getStudents(data); */
