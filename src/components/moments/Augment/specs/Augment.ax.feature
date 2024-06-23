# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/#s7
# Requirements https://quip-apple.com/LXbDAISpJmDb

@AX
Feature: Augment Section AX

  # QUESTION: Can't find an explicit mention of reading/tab order from the section level
  #           Will need to follow up w/ the AX team to track that down
  Rule: Reading/Tab order

    # rdar://110338888
    @INCOMPLETE
    Scenario: Reading order is correct

    # rdar://110338956
    @INCOMPLETE
    Scenario: Tab order is correct

  Rule: Semantics

    # rdar://110339027
    @UNTESTED
    Scenario: Must have a visually unique title marked up as a heading

  Rule: Zoom

    # rdar://110339155
    @INCOMPLETE
    Scenario: Content needs to be perceivable and operable at 400% browser zoom

    # rdar://110339230
    @INCOMPLETE
    Scenario: Content must remain perceivable and operable up to 200% text zoom with no horizontal scrolling

  Rule: RTL

    # rdar://110339577
    @INCOMPLETE @RTL
    Scenario: Content behaves and reads naturally in RTL mode
