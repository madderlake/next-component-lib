@VISUAL
Feature: Gallery Appearance
  # NAMING: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/card-tile-set/#s1
  # DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/card-tile-set/#s2

  # MISSING: Expected no JS experience has not been defined

  @XL @L @M @S @XS
  Rule: Default Responsive States

    # rdar://112089891
    Scenario: Gallery default state requires 2 or more GalleryItems and a PaddleNav

    # rdar://112089929
    @RTL @INCOMPLETE
    Scenario: First gallery item aligns correctly
      Given the current index of the Gallery is the first item
      Then the first GalleryItem should align to the inline-start side of the grid

    # rdar://112089945
    @RTL @INCOMPLETE
    Scenario: Last gallery item aligns correctly
      Given the current index of the Gallery is the last item
      Then the last GalleryItem should align to the inline-end side of the grid

    # rdar://112090073
    @UNTESTED
    Scenario: Previous button correctly enables and disables
      Given the current index of the Gallery is the first item
      Then the first GalleryItem previous button in the PaddleNav should be disabled

    # rdar://112090075
    @UNTESTED
    Scenario: Next button correctly enables and disables
      Given the current index of the Gallery is the last item
      Then the first GalleryItem next button in the PaddleNav should be disabled

    # rdar://112090088
    @INCOMPLETE
    Scenario: Animations are staged correctly

  Rule: Themes

    # @INCOMPLETE
    # Scenario: Gallery has a dark theme

    # @INCOMPLETE
    # Scenario: Gallery has a light theme
