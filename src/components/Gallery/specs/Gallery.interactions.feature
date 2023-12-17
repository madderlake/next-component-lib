@XL @L @M @S @XS
Feature: Gallery Interactions
  # NAMING: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/card-tile-set/#s1
  # DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/card-tile-set/#s2

  Rule: Animation

    # rdar://112085773
    @INCOMPLETE
    Scenario: As the Gallery scrolls into the viewport and past a specified threshold the reveal animation is triggered

    # rdar://112085801
    @UNTESTED
    Scenario: Each visible GalleryItem in the Gallery will slide up & fade in staggered one after the other

    # rdar://112085816
    @UNTESTED
    Scenario: Animations will only be created for the GalleryItems that are visible at the current viewport width

    # rdar://112085826
    @INCOMPLETE
    Scenario: The reveal animation will only play once for each Gallery

  Rule: Scroll Snapping

    # rdar://112086028
    @INCOMPLETE
    Scenario: Gallery is navigable via horizontal scroll and should always end with a gallery item snapping to the left side of the grid

  Rule: Resize

    # rdar://112086053
    @UNTESTED
    Scenario: Galleries will maintain their current index after a resize event / breakpoint change

    # rdar://112086057
    @UNTESTED
    Scenario: Galleries will still only animate in once per page load regardless of resize or breakpoint change

  Rule: Keyboard navigation

    # rdar://112086696
    @INCOMPLETE
    Scenario: Gallery should only respond to key events if it is visible in the viewport

    # rdar://112086703
    @UNTESTED
    Scenario: If more than one Gallery is visible in the viewport, only the more visible gallery should respond to keyboard events
