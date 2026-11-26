---
name: fixture-drift-detection
description: Detect drift between existing test fixtures and an approved API baseline. Use when an API changes, a HAR stops matching, or offline coverage may be exercising outdated responses.
---

# Fixture Drift Detection

## Purpose

Find stored responses that no longer stand for the verified API behavior.

## Triggers

A request stops matching a HAR or a previously captured result may be stale.

## Inputs

Fixture provenance, current contract or verified sample, and fields that matter.

## Outputs

Differences that affect behavior and a verified update decision.

## Workflow

1. Review fixture provenance and the important operations. Compare method, canonical URL, status, schema, and behavior-relevant fields against the current verified contract or a fresh sample from the designated test environment.

2. Normalize only fields known to vary harmlessly, such as request IDs or timestamps unrelated to the scenario. Preserve values that drive UI behavior. Separate unmatched requests, incompatible schemas, and same-schema changes in business meaning.

3. For a tree replay, flag a newly required query parameter and check whether the current fixture still answers the fresh tree read. Refresh only after confirming a legitimate change, then review the sanitized diff and rerun replay with updates disabled.

## Example

A tree read now requires a branch filter. Compare the expected request with the HAR entry and review the sanitized replacement before replay.

[Playwright HAR matching](https://playwright.dev/docs/mock#mocking-with-har-files)
