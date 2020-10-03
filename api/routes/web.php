<?php
Route::get('/', function () {
    return view('welcome');
});

Route::post('/register', 'Auth\ApiController@index');
