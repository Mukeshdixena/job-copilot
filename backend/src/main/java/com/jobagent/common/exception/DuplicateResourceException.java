package com.jobagent.common.exception;

/** Generic 409 for "this already exists" cases outside of the auth email-uniqueness case. */
public class DuplicateResourceException extends RuntimeException {
  public DuplicateResourceException(String message) {
    super(message);
  }
}
