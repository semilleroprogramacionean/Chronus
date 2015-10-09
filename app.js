/**
 * Created by luiscobo on 2015-10-09.
 */
'use strict';

// Declaramos un modulo Angular para poder usarlo en la aplicacion
var app = angular.module("semilleroApp", ["firebase"]);

app.controller("semilleroControlador", ["$scope", "$firebaseObject",
    function($scope, $firebaseObject) {
        var fb = new Firebase("https://chronusean.firebaseio.com/ean/horarios/");

        // Traemos todos los horarios
        var horarios = $firebaseObject(fb);

        // Los guardamos en un arreglo llamado "Resultado"
        $scope.resultado = [];

        // Cuando FireBase nos haya enviado todos los datos,
        horarios.$loaded()
            .then(function(data) {
                console.log("Llego!");
                angular.forEach(data, function(registro, llave) {
                    if (registro.asignatura_codigo == "002830") {
                        $scope.resultado.push(registro);
                    }
                });
            });

    }
]);