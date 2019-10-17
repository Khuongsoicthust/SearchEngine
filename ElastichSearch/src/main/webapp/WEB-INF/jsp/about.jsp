<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<div th:replace="fragments/header :: header-css" />
</head>
<body>

	<div th:replace="fragments/header :: header" />

	<div class="container">

		<div class="starter-template">
			<h1>Normal page (No need login)</h1>
		</div>

	</div>
	<!-- /.container -->

	<div th:replace="fragments/footer :: footer" />

</body>
</html>