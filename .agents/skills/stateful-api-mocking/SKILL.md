---
name: stateful-api-mocking
description: Mock API behavior that changes after prior CRUD operations. Use when fixed responses or HTTP recordings cannot represent the required write, refetch, and state transition.
---

# Stateful API Mocking

## Purpose

Model only the data changes a frontend scenario needs.

## Triggers

A read must change after a write, and a fixed response or HAR cannot express the sequence.

## Inputs

Initial records, write operation, expected next read, and contract fields.

## Outputs

Isolated mock state and evidence that the UI observes its changes.

## Workflow

1. Write down the starting records, allowed operation, and expected following read. Use a test-scoped in-memory store initialized from a fixture. Match each supported method and URL and handle only transitions required by the scenario.

2. Each successful write updates the store according to the agreed response contract. A subsequent list or detail request reads the updated store. Define how unexpected operations surface so a missing handler cannot quietly produce a green test.

3. For a tree scenario, start with nodes A and B, delete A, and return only B from the next read. Assert that the browser requested fresh data and then rendered B. Use an integration test against the real backend when real persistence or transaction behavior is part of the requirement.

## Example

Delete Free Hats in the in-memory fixture and return Emergency Lasers from the next tree read. Verify the UI requests that read.

[Playwright routing and response mocking](https://playwright.dev/docs/mock)
