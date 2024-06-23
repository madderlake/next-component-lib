# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/
# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/#s2
# Requirements https://quip-apple.com/t5NnAHpbMW73

@AX
Feature: Welcome Section AX

  # QUESTION: Can't find an explicit mention of reading/tab order from the section level
  #           Will need to follow up w/ the AX team to track that down
  Rule: Reading/Tab order

    # rdar://111066589
    @INCOMPLETE
    Scenario: Reading order is correct

    # rdar://111066651
    @INCOMPLETE
    Scenario: Tab order is correct

  Rule: Semantics

    # rdar://111066722
    @INCOMPLETE
    Scenario: Must have a visually unique title marked up as a heading

  Rule: Zoom

    # rdar://111066803
    @INCOMPLETE
    Scenario: Content needs to be perceivable and operable at 400% browser zoom

    # rdar://111066909
    @INCOMPLETE
    Scenario: Content must remain perceivable and operable up to 200% text zoom with no horizontal scrolling

  Rule: RTL

    # rdar://111067035
    @INCOMPLETE @RTL
    Scenario: Content behaves and reads naturally in RTL mode

  Rule: Video

    # rdar://111067146
    @INCOMPLETE
    Scenario: When reduced motion is set, video is frozen at a paused state

    # rdar://111067214
    @INCOMPLETE
    Scenario: Control active area has a press, hover, and focus state

    # rdar://111067374
    @UNTESTED
    Scenario: The video and video controls should have descriptive accessibility text for screen readers

    # rdar://111067432
    @INCOMPLETE
    Scenario: Animation that has started automatically must animate only once

    # rdar://111067603
    @INCOMPLETE
    Scenario: The video controls must be persistently visible

    # rdar://111067648
    @INCOMPLETE
    Scenario: The video controls must be keyboard focusable
