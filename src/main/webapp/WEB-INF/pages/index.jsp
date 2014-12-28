
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html ng-app="app">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Go AngularJS!</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="assets/styles/style.min.css" />
  <script src="assets/js/vendor-header.js"></script>
</head>
<body ng-controller="App">
<!--[if lt IE 10]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<div ui-view>
  <header style="margin-top:60px;"><h1 class="text-center">Starting up <i class="fa fa-spinner fa-spin"></i></h1></header>
</div>

<script type="text/javascript" src='assets/js/vendor-body.js'></script>
<script type="text/javascript" src='assets/js/app.concat.js'></script>
<script type="text/javascript" src='assets/js/app.templates.js'></script>
</body>
</html>