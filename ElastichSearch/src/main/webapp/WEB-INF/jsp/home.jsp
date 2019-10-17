<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<%@ include file="header.jsp" %>

<div class="container">

   	<div class="panel panel-primary">
   		<div class="panel-heading">Roles</div>
   		<div class="panel-body"><a href="/admin">Admin page (Need Admin Role)</a></div>
   		<div class="panel-body"><a href="/user">User page (Need User Role)</a></div>
   		<div class="panel-body"><a href="/about">Normal page</a></div>
   	</div>
</div>
<!-- /.container -->

<%@ include file="footer.jsp" %>

</body>
</html>