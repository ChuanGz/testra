---
name: component-lifecycle-testing
description: "Use for mount, unmount, remount, and stale state across entity changes."
---

# Component Lifecycle Testing

## Purpose

Verify behavior across mount, unmount, remount, or a change of entity identity.

## Triggers

A component shows stale data, leaks local state between records, or resumes with the wrong state after reopening.

## Inputs

Component ownership, entity identity, expected reset or preservation, fixture, and lifecycle trigger.

## Outputs

Behavior before and after the lifecycle event, state-ownership evidence, and targeted regression case.

## Workflow

1. Determine whether the action remounts a component or reuses the same instance for a different entity. Identify the state that should reset, persist, or be derived again.

2. Exercise both cases when relevant. Assert the content and user-visible state after returning, including any pending async result that could affect the new instance.

3. Trace a mismatch to the owner of that state. Use cache-consistency testing if the underlying query result itself is stale.

## Example

Open reward A and enter an unsaved title. Switch to B and reopen A. Verify the agreed draft policy and that B never displays A’s title.

[Regression skills](../../../docs/regression-skills.md)
