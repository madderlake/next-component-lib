# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/image-accordion/#s5
# DESIGN: https://standards.apple.com/element-library/#pattern-accordion

Feature: Modal Card Interactions

  @XL @L @M @S @XS
  Rule: Default Interactions

    # rdar://108968481
    @UNTESTED
    Scenario: First accordion item is required to be open on load

    # rdar://108968478
    @UNTESTED
    Scenario: Activating an accordion item's active area causes the chevron icon to rotate 180 degrees - up if open, down if closed

    # rdar://108968489
    @INCOMPLETE
    Scenario: Accordion header requires a hover effect to convey interactability

  Rule: Animations & Transitions

    # rdar://108963458
    @INCOMPLETE @XL @L @M @S @XS
    Scenario: Accordion item content area expands and collapses with animation

    # rdar://109840020
    # See bottom of https://pages.github.pie.apple.com/marcom-frontend/collections-specs/image-accordion/#s5
    @UNTESTED @XL @L
    Scenario: Images should transition with a subtle fade effect

  Rule: Responsive Interactions

    # rdar://108968476
    @UNTESTED @XL @L
    Scenario: One item can be open at a time

    # rdar://108968494
    @INCOMPLETE @XL @L
    Scenario: Activating closed item opens it and closes the open item

    # rdar://108968493
    @INCOMPLETE @XL @L
    Scenario: Activating an open item closes it and opens the next item

    # rdar://108968483
    @INCOMPLETE @XL @L
    Scenario: Activating the last open item closes it and opens the first item

    # rdar://108968471
    @INCOMPLETE @M @S @XS
    Scenario: Multiple items can be open at a time

    # rdar://109745379
    @INCOMPLETE @M @S @XS
    Scenario: Activating a closed item opens it

    # rdar://108968487
    @UNTESTED @M @S @XS
    Scenario: Activating an open item closes it and opens the next one if no other items are open
