<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<div th:fragment="header-css">
        <!-- this is header-css -->
        <link rel="stylesheet" type="text/css"
              href="webjars/bootstrap/3.3.7/css/bootstrap.min.css" />

        <link rel="stylesheet" href="/css/main-header.css"
              href="../../css/main-header.css" />
    </div>
</head>
<body>

<div th:fragment="header">
    <!-- this is header -->
    <nav class="navbar navbar-inverse " style="background-color: #482368;">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="/home">TPBank</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active" ><a href="/home" style="background-color: #482368;">Home</a></li>
                </ul>
            </div>
        </div>
    </nav>
</div>

</body>
</html>