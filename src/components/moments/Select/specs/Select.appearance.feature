# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/sections/#s4

@VISUAL
Feature: Select Section Appearance

  Rule: Default appearance

    # rdar://110907186
    @XL @L @M @S @XS
    Scenario: A Section Header and gallery of ProductTiles are required

    # rdar://110915754
    @XL @L @M @S @XS
    Scenario: The Section Header's link is optional

    # rdar://110907262
    @XL @L @M @S @XS
    Scenario: The section can be rendered without bottom padding

    # rdar://110907496
    @RTL @XL @L @M @S @XS
    Scenario: The section renders correctly in RTL

  # https://pages.github.pie.apple.com/marcom-frontend/collections-specs/product-tile/#s3
  Rule: Tile set appearance

    # rdar://110907614
    @XL @L @M @S @XS
    Scenario: The set is required to have a minimum of two tiles.

    # rdar://109481823
    @XL @L @M @S @XS
    Scenario: Content that varies between tiles
      When one or more tiles does not have a color indicator, badge, or subheading
      Then the space for the respective item is retained in all tiles

    # rdar://109481819
    @XL @L @M @S @XS
    Scenario: Content that applies across all tiles
      When none of the tiles has a color indicator, badge, subheading, or pricing
      Then the space for the respective item is collapsed in all tiles
