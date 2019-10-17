<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<div th:fragment="footer">

    <div class="container">

        <footer>
        <!-- this is footer -->
        &copy; 2017 TpBank.
            <span sec:authorize="isAuthenticated()">
                | Logged user: <span sec:authentication="name"></span> |
                Roles: <span sec:authentication="principal.authorities"></span> |
                <a href="/logout">Sign Out</a>
            </span>

        <script type="text/javascript"
                src="webjars/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        </footer>
    </div>

</div>

</body>
</html>