# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/image-accordion/#s6
# DESIGN: https://standards.apple.com/element-library/#pattern-accordion

@AX
Feature: ImageAccordion Accessibility

  Rule: Assistive Tech

    # rdar://108968467
    @INCOMPLETE
    Scenario: Accordion header and the content must be usable up to 200% when using text zoom

    # rdar://108968486
    @UNTESTED
    Scenario: Accordion list element should have aria label "role = list" attribute

    # rdar://108968491
    @INCOMPLETE
    Scenario: The Accordion trigger button element must have aria-expanded="false" by default and must be updated to "true" based on open / closed status

    # rdar://108968482
    @UNTESTED
    Scenario: The Accordion button element must have aria-controls attribute referencing the ID attribute of the content panel that is controlled by the button

    # rdar://108968468
    @INCOMPLETE
    Scenario: The content panel controlled by the header must have a role="region" and aria-labelledby attribute referencing the ID attribute of the corresponding accordion header

    # rdar://108968485
    @INCOMPLETE
    Scenario: A collapsed content panel mush have aria-hidden="true"

    # rdar://108968470
    @INCOMPLETE
    Scenario: All focusable elements inside a collapsed panel must not be keyboard-focusable and have tabindex="-1"

  Rule: Accordion Item Header

    # rdar://108968484
    @UNTESTED
    Scenario: Accordion header must be a single interactive element which includes the heading, button and chevron

    # rdar://108968472
    @UNTESTED
    Scenario: The accordion header must respond to Click, Touch, spacebar and Enter/Return key actions to expand the corresponding panel

    # rdar://108968495
    @UNTESTED
    Scenario: Accordion title must be a semantic heading with appropriate size with respect to the page

    # rdar://108968490
    @UNTESTED

    Scenario: Accordion title requires a heading element which contains a <button> element which acts as a trigger

  Rule: Accordion Item Content

    # rdar://108968488
    @INCOMPLETE
    Scenario: Links in Accordion item content must be underlined by default

  Rule: Reading Order

    # rdar://108968479
    @INCOMPLETE
    Scenario: Assistive tech reads item content in the correct order:
      1. Accordion header
      2. Accordion expanded panel text
      3. Accordion expanded panel image

  Rule: Hit Targets (Active Areas)

    # rdar://108968492
    @INCOMPLETE
    Scenario: Links within Accordion item content have standard hit targets

  Rule: Focus Outline / Tab Order

    # rdar://108968466
    @INCOMPLETE
    Scenario: Links have focus outlines that satisfy Marcom/Apple WCAG requirements

    # rdar://108968474
    @INCOMPLETE
    Scenario: Accordion item content is not keyboard focusable or present in the tab order

  Rule: Image

    # rdar://108968496
    @INCOMPLETE
    Scenario: Image should have descriptive alt text

  Rule: Heading and button

    # rdar://108968480
    @INCOMPLETE
    Scenario: There should be no interactive elements within the heading (sosumi, etc)

  Rule: NOJS

    # rdar://108968477
    @INCOMPLETE
    Scenario: All items should be expanded if Javascript is disabled
