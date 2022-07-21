<%--
  Created by IntelliJ IDEA.
  User: parkhyeongju
  Date: 2022/07/21
  Time: 4:39 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" import="java.util.Date"%>
<%@ page isELIgnored="false"%>
<html>
  <head>
    <title>스프링 메인화면</title>
  </head>
  <body>
    <%
      String hello = "안녕하세요 JSTL입니다.";
      Date date = new Date();
    %>
    <h1>Tomcat ServerTime ${date}</h1>
    <h1>BackEnd Language is ${PL}</h1>
    <h1>Language Framework is ${FW}</h1>
    <h3><%=hello%></h3>
    <h3><%=date%></h3>
  </body>
</html>
