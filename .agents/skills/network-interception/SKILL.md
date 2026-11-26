---
name: network-interception
description: Observe or intercept scoped browser HTTP traffic with Playwright. Use to verify a request or refetch, inspect a response, or adjust a specific route during frontend testing.
---

# Network Interception

## Purpose

Verify the HTTP exchange that matters to a browser action.

## Triggers

A test needs to observe a request, inspect a response, or route a specific operation.

## Inputs

Expected method, origin and path, triggering action, and relevant record.

## Outputs

Captured or intercepted exchange with a clear scope and sanitized evidence.

## Workflow

1. Identify the request that proves the requirement. Match the HTTP method and exact origin/path, plus the query, record ID, or body fields when they distinguish the action. Check which page or popup owns the request.

2. Use `page.waitForResponse()` for observation and register the wait before the triggering action. Use `page.route()` or `browserContext.route()` for interception and register it before navigation or the action. Choose context scope when the request can originate from a popup or multiple tabs.

3. Have each intercepted request reach the intended outcome with `route.fulfill()`, `route.abort()`, `route.fallback()`, or `route.continue()`. Keep the pass-through behavior explicit. If a service worker owns the request, inspect that first and block service workers only when their behavior is outside the scenario.

4. For a tree-delete regression, distinguish the delete request from the following tree read. Verify the fresh response and the rendered tree separately. Summarize method, route, status, and the tested outcome with sensitive values omitted.

## Example

After deleting Free Hats, observe the next tree read for that branch. Check that Emergency Lasers is still in the returned data.

[Playwright network guide](https://playwright.dev/docs/network) · [Route API](https://playwright.dev/docs/api/class-route)
