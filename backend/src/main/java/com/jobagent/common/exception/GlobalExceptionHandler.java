package com.jobagent.common.exception;

import jakarta.servlet.http.HttpServletRequest;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ApiError> handleValidation(
      MethodArgumentNotValidException ex, HttpServletRequest request) {
    List<String> details =
        ex.getBindingResult().getFieldErrors().stream()
            .map(fieldError -> fieldError.getField() + ": " + fieldError.getDefaultMessage())
            .toList();
    ApiError error =
        ApiError.of(
            HttpStatus.BAD_REQUEST.value(),
            "Validation failed",
            "One or more fields are invalid",
            request.getRequestURI(),
            details);
    return ResponseEntity.badRequest().body(error);
  }

  @ExceptionHandler(EmailAlreadyExistsException.class)
  public ResponseEntity<ApiError> handleEmailExists(
      EmailAlreadyExistsException ex, HttpServletRequest request) {
    ApiError error =
        ApiError.of(
            HttpStatus.CONFLICT.value(), "Conflict", ex.getMessage(), request.getRequestURI());
    return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
  }

  @ExceptionHandler(ResourceNotFoundException.class)
  public ResponseEntity<ApiError> handleNotFound(
      ResourceNotFoundException ex, HttpServletRequest request) {
    ApiError error =
        ApiError.of(
            HttpStatus.NOT_FOUND.value(), "Not Found", ex.getMessage(), request.getRequestURI());
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
  }

  @ExceptionHandler(BadCredentialsException.class)
  public ResponseEntity<ApiError> handleBadCredentials(
      BadCredentialsException ex, HttpServletRequest request) {
    ApiError error =
        ApiError.of(
            HttpStatus.UNAUTHORIZED.value(),
            "Unauthorized",
            "Email or password is incorrect",
            request.getRequestURI());
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<ApiError> handleUnexpected(Exception ex, HttpServletRequest request) {
    ApiError error =
        ApiError.of(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Internal Server Error",
            "Something went wrong. Please try again.",
            request.getRequestURI());
    return ResponseEntity.internalServerError().body(error);
  }
}
