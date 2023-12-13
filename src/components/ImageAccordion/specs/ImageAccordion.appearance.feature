# DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/image-accordion/#s4
# MISSING: What if item content height in open state challenges accordion fixed height?
# MISSING: What is the image pinning?

@VISUAL
Feature: ImageAccordion Appearance

  @XL @L @M @S @XS
  Rule: Default Appearance

    # rdar://108963465
    Scenario: Accordion items require a button with headline and icon, and a content area

    # rdar://108963460
    Scenario: ImageAccordion requires a container that wraps an Accordion component and an image container

    # rdar://108963461
    Scenario: Accordion requires a minimum of two and a maximum of three items

    # rdar://108963463
    Scenario: Accordion item heading can accommodate up to two lines of text
      When: Accordion item heading has two lines of text
      Then: Accordion item content must decrease to allow it to fit within the fixed height of the accordion

    # rdar://108963459
    @INCOMPLETE
    Scenario: Accordion content can optionally include a link below the copy, separated by a paragraph break

  Rule: Responsive States

    # rdar://108963466
    @XL @L
    Scenario: Image will be displayed in the image container

    # rdar://108963462
    # https://pages.github.pie.apple.com/marcom-frontend/collections-specs/image-accordion/#s3
    @XL @L
    Scenario: Accordion with two accordion items should accommodate a maximum amount of text content
      When: Two accordion items all have a 1-line headline
      Then: Each accordion item can accommodate a maximum of 16 lines of text content
      When: One accordion item has a 1-line headline and one accordion item has a 2-line headline
      Then: Each accordion item can accomodate a maximum of 14 lines of text content
      When: Two accordion items all have a 2-line headline
      Then: Each accordion item can accommodate a maximum of 13 lines of text content

    # rdar://115899748
    # https://pages.github.pie.apple.com/marcom-frontend/collections-specs/image-accordion/#s3
    @XL @L
    Scenario: Accordion with three accordion items should accommodate a maximum amount of text content
      When: Three accordion items all have a 1-line headline
      Then: Each accordion item can accommodate a maximum of 12 lines of text content
      When: Two accordion items have a 1-line headline and one accordion item has a 2-line headline
      Then: Each accordion item can accommodate a maximum of 11 lines of text content
      When: One accordion item has a 1-line headline and two accordion items have a 2-line headline
      Then: Each accordion item can accommodate a maximum of 10 lines of text content
      When: Three accordion items all have a 2-line headline
      Then: Each accordion item can accommodate a maximum of 8 lines of text content

    # rdar://108963468
    @XL @L
    Scenario: ImageAccordion image is cropped if/when it hits the leading edge on viewport resize

    # rdar://108963464
    @M @S @XS
    Scenario: The Accordion item content should display the image within the content panel along with the body copy

  Rule: Background color

    # @INCOMPLETE
    # this is in the specs, but will not be implemented for June launch
    # Scenario: Accordion has background color of alpha swatches if parent container background is a color

    # @INCOMPLETE
    # this is in the specs, but will not be implemented for June launch
    # Scenario: Accordion background color can change based on Accordion item background color

  Rule: Theming

    # @INCOMPLETE @THEME-LIGHT @THEME-DARK
    # this is in the specs, but will not be implemented for June launch
    # Scenario: ImageAccordion can have its own light or dark theme, with neutral and alpha options for each, independent of section theme

  @RTL
  Rule: Right to Left

    # rdar://108963470
    @INCOMPLETE @XL @L @M @S @XS
    Scenario: The accordion, accordion item title, chevron & copy are right-aligned

    # rdar://108963467
    @INCOMPLETE @XL @L
    Scenario: ImageAccordion image container shifts to the left
