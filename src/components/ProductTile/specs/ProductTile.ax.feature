# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/product-tile/#s4
# REQUIREMENTS: https://quip-apple.com/JXzYAD9opNBZ

@AX
Feature: ProductTile Accessibility

  Rule: Screen Reading Order

    # rdar://109482438
    @INCOMPLETE
    Scenario: Assistive tech reads items in the correct order

  Rule: Hit Targets (Active Areas)

    # rdar://109482445
    @INCOMPLETE
    Scenario: Links have correct hit targets

  Rule: Focus Outline / Tab Order

    # rdar://109482447
    @INCOMPLETE
    Scenario: ProductTile has the correct tab order

    # rdar://109482446
    @INCOMPLETE
    Scenario: Links have focus outlines that satisfy Marcom/Apple WCAG requirements

  Rule: HTML structure

    # rdar://109482442
    @INCOMPLETE @SEO
    Scenario: ProductTile heading size is `h3`

    # rdar://109743486
    @INCOMPLETE
    Scenario: Image requires alt text