---
name: api-contract-testing
description: "Use for checking frontend and backend compatibility at the real API boundary."
---

# API Contract Testing

## Purpose

Verify that frontend and backend can exchange compatible requests and responses.

## Triggers

An API schema, operation, status, or client integration changes.

## Inputs

Approved contract or provider and consumer expectations, test backend, and representative request cases.

## Outputs

Compatibility evidence for real request/response pairs and failures tied to a specific operation or field.

## Workflow

1. Match consumer calls to the approved operation and supported payload, status, and media type. Include meaningful optional fields, error responses, or compatibility cases affected by the change.

2. Exercise the real test provider or the project's contract verification harness. Validate both sides using existing validators and check fields critical to the client.

3. Identify whether the provider, consumer, or fixture is out of date. Use API contract validation for static mocks and avoid claiming full integration compatibility from fixture validation alone.

## Example

After the reward API adds an optional field, verify the existing editor still reads and saves rewards against the test provider, including the documented validation response.

[Regression skills](../../../docs/regression-skills.md)
