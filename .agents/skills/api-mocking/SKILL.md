---
name: api-mocking
description: Fulfill or customize selected API responses in browser tests. Use static API mocks for one scenario's data, pagination, empty results, or response variants.
---

# API Mocking

## Purpose

Supply a controlled API response for a UI test.

## Triggers

A scenario needs an empty list, a specific page, or another supported response shape.

## Inputs

API operation and response contract, request scope, and UI behavior to verify.

## Outputs

A focused mock and an assertion for the UI that consumes it.

## Workflow

1. Find the real operation and agreed payload shape. Choose the smallest response that can exercise the requirement while preserving required fields, status, media type, and pagination or metadata the client consumes.

2. Register a narrow `page.route()` or `context.route()` before the request. Match the method as well as URL and use `route.fulfill({ status, json })` for synthetic JSON. Use `route.fetch()` followed by `fulfill()` only when a real response from the test backend is intentionally part of the scenario.

3. Exercise the real UI action and assert its observable result. For an empty reward grid, return the documented empty collection and check the empty-state text or action that the requirement specifies.

## Example

Return an empty collection for the Free Hats list. Check the expected empty-state text or action.

[Playwright mock APIs](https://playwright.dev/docs/mock) · [Route.fulfill](https://playwright.dev/docs/api/class-route#route-fulfill)
