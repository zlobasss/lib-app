FROM openjdk:17-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} spring-app/application.jar
ENTRYPOINT ["java", "-jar", "spring-app/application.jar"]