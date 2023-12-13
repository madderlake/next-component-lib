# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/card-tile-set/#s1

@VISUAL
Feature: SectionHeader Appearance

  Rule: Resonsive States

    # rdar://112097785
    @INCOMPLETE @XL @L @M
    Scenario: Header and optional link are layed out side by side and respect max-widths defined in design spec

    # rdar://112097807
    @INCOMPLETE @S @XS
    Scenario: Header and Optional Link are stacked on top of each other and respect max-widths defined in design spec

    # rdar://112097841
    @S @XS
    Scenario: Vertical space is not preserved when link is absent

    # rdar://112097848
    @XL @L @M @S @XS
    Scenario: Header text wraps when exceeding maximum content width

  Rule: Styled Hover states

    # rdar://112097859
    @INCOMPLETE @THEME-LIGHT @THEME-DARK
    Scenario: Link has a styled hover state

  Rule: Styled Focus Outlines

    # rdar://112097872
    @INCOMPLETE
    Scenario: Link has a styled focus outlines as indicated by design

  Rule: Themes
    # @INCOMPLETE @THEME-LIGHT
    # Scenario: Section Header has a light theme

    # @INCOMPLETE @THEME-DARK
    # Scenario: Section Header has a dark theme
