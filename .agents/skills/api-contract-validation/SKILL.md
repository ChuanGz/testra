---
name: api-contract-validation
description: Validate mock responses and recorded fixtures against the project's API contract. Use when creating or reviewing fixture payloads, resolving schema mismatches, or checking API changes.
---

# API Contract Validation

## Purpose

Check a saved fixture against the API contract that the client expects.

## Triggers

A mock or recording is added or a schema changes.

## Inputs

Contract version, operation, response status and media type, and fixture payload.

## Outputs

Validation result and field-level evidence for any mismatch.

## Workflow

1. Identify the contract version used by the app. Match the operation, HTTP status, and media type to the corresponding OpenAPI response or project schema. Use the repository's validator and the schema dialect it expects, including resolved references.

2. Validate fixture payloads and fixture request bodies when they are part of the scenario. Report mismatches with the operation and field path, such as a required reward ID missing from a recorded detail response.

3. Check agreed semantic constraints separately, such as an ID matching across list and detail responses. Distinguish an invalid fixture from an unapproved contract change. Update the fixture only after the expected contract has been confirmed.

## Example

A recorded reward detail response omits the required ID. Report the missing field before that recording is reused.

[OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
