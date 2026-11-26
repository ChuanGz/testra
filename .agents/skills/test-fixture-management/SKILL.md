---
name: test-fixture-management
description: Create and maintain reusable test fixtures for regression tests. Use for data setup, fixture factories, parallel-safe records, and cleanup.
---

# Test Fixture Management

## Purpose

Make setup and cleanup reusable without mixing test records.

## Triggers

Several checks need the same setup or tests collide when they run in parallel.

## Inputs

Scenario data, existing fixture API, and owned resource IDs.

## Outputs

A reusable fixture that creates isolated data and cleans up after the run.

## Workflow

1. Find the project's fixture factories or test API first. Reuse the lifecycle and return only the data the test needs, such as the reward ID and its starting title. Keep the scenario's expected result visible in the spec.

2. Use immutable fixtures for shared static data and test-scoped setup for mutable records. Give concurrent tests independent records or namespaces and track their exact IDs. For backend state, use the project's designated seed and cleanup paths.

3. Register cleanup for each successfully created resource, including when later setup or the test fails. Clean up only resources owned by that run. Use worker scope only for expensive resources safe to share within a worker.

4. Check that the fixture can be used in two independent runs. For a reward catalog, seed separate records before running a reward edit and a category deletion in parallel.

## Example

Create a separate reward for a rename test and a separate branch for a delete test. Both can run without editing the other's records.

[Playwright test fixtures](https://playwright.dev/docs/test-fixtures) · [API-backed setup and verification](https://playwright.dev/docs/api-testing)
