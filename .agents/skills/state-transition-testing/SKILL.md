---
name: state-transition-testing
description: "Use for testing allowed transitions and available actions in UI workflows."
---

# State Transition Testing

## Purpose

Verify that user actions or events move the UI between allowed states.

## Triggers

A workflow has multiple states, actions available only in certain states, or a transition rule changed.

## Inputs

Starting states, triggering events, allowed outcomes, and rules for repeated or rejected transitions.

## Outputs

Small transition matrix and assertions for target state, visible actions, and prohibited side effects.

## Workflow

1. List the relevant states and the event that connects each pair. Seed exact starting states without performing unrelated transitions.

2. Exercise allowed and disallowed events through the normal entry point. Assert the visible state, enabled actions, and a meaningful effect that should occur exactly as specified.

3. Keep useful matrix rows. Compose with async behavior testing if the outcome depends on request order, or component lifecycle testing if the transition is caused by mounting.

## Example

An unpublished reward can be published. Verify its new badge and available actions. Verify that an already retired reward cannot transition to published through that action.

[Regression skills](../../../docs/regression-skills.md)
