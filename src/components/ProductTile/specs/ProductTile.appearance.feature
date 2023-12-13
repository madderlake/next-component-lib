@VISUAL
Feature: ProductTile Appearance

    # DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/product-tile/#s2
    # MISSING: content length requirements, guidelines

    @XL @L @M @S @XS
    Rule: Default Appearance

        # rdar://109481822
        Scenario: ProductTile is required to have
          * Background Asset
          * Header
          * Body Copy
          * Button

        # rdar://109687179
        Scenario: ProductTile optionally has a Color Indicator

        # rdar://109687297
        Scenario: ProductTile optionally has a Badge

        # rdar://109687381
        Scenario: ProductTile optionally has a Subheader

        # rdar://110432249
        Scenario: ProductTile optionally has an element for Pricing or fallback information

        # rdar://110432375
        Scenario: ProductTile optionally has a link

        # rdar://110432483
        Scenario: Header, Subheader and Pricing, if present, must be able to accommodate multiple lines of text

        # For initial launch, this will be handled via GP providing equally-sized images
        # @INCOMPLETE
        # Scenario: Minimum height for the image container equals the height of tallest image in the set, per viewport

        # Pricing handling should happen upstream of this presentational component.
        # This Scenario may be deleted entirely.
        # @INCOMPLETE
        # Scenario: Pricing element will contain dynamic pricing data or fallback information

        # rdar://109481813
        Scenario: Button has a hover state

        # rdar://109481814
        Scenario: ProductTile height is flexible to accommodate content length

    Rule: Responsive States

        # rdar://109481820
        @XL @L @M
        Scenario: ProductTile elements are center aligned

        # rdar://109481821
        @S @XS
        Scenario: ProductTile elements are aligned to the left

    @XL @L @M @S @XS
    Rule: Content spacing in Set of two or more tiles
        Given a set of two or more tiles

        # rdar://110433431
        @XL @L @M
        Scenario: If no link is present, button is center aligned

    Rule: Right to Left
        # NOTE: Specs say that all elements are mirrored except for the image, but a mirrored image is shown. Perhaps a bug in the specs.
        # DESIGN: https://pages.github.pie.apple.com/marcom-frontend/collections-specs/product-tile/#s3

        # rdar://109481816
        @RTL @XL @L @M @S @XS
        Scenario: RTL layout renders correctly per design
