---
name: api-request-verification
description: "Use for checking request method, endpoint, payload, and meaningful call counts."
---

# API Request Verification

## Purpose

Prove that a UI action sends the intended HTTP request.

## Triggers

A change affects endpoint, method, payload, request frequency, or conditional calls.

## Inputs

User action, API operation contract, expected timing, and meaningful request fields.

## Outputs

Matched method and URL, sanitized payload evidence, and count assertions for contract-relevant requests.

## Workflow

1. Register the request observer before the action. Match method, exact path, and record or query identifiers that distinguish the operation.

2. Assert only fields whose transmission is required. Observe request counts through a meaningful scenario boundary, such as completion or resulting UI state. Count retries separately when relevant.

3. Match response and visible outcome if they are also in scope. Use network interception for observability or routing and API contract testing for client-server compatibility.

## Example

Renaming Sir Lump sends a PATCH for the correct reward ID with `Duke of Snacks`. Verify one write within the save flow and check the displayed title.

[Regression skills](../../../docs/regression-skills.md)
