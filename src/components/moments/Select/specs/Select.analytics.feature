Feature: Select Section Analytics

  Rule: Analytics

    # rdar://113585757
    Scenario: Section engagement tracking on the Select Section
      Given that the section is the Select section
      Then the root HTML element of the component must have an HTML attribute of 'data-analytics-section-engagement'
      And the 'data-analytics-section-engagement' value must set to the value received in the props

    # rdar://113586337
    Scenario: Optional Region tracking on the Select Section
      Given that the section is the Select section
      Then the root HTML element of the component could optionally have an HTML attribute of 'data-analytics-region'
      And the 'data-analytics-region' value must set to the value received in the props

    # rdar://113586682
    Scenario: Link tracking on Section Header on the Select Section
      Given that the section is the Select section
      Then the Link element in the section header must have an HTML attribute of 'data-analytics-title'
      And the 'data-analytics-title' value must set to the value received in the props

    # rdar://113586968
    Scenario: Gallery tracking on the Select Section
      Given that the section is the Select section
      Then the root div of the Gallery component must have an HTML attribute of 'data-analytics-gallery-id'
      And the 'data-analytics-gallery-id' value must set to the value received in the props
      And each li element wrapping a ProductTile in the Gallery must have an HTML attribute of 'data-analytics-gallery-item-id'
      And the 'data-analytics-gallery-item-id' value must set to the value received in the props

    # rdar://113587241
    Scenario: ActivityMap Region tracking in Product Tiles on the Select Section
      Given that the section is the Select section
      Then the root div of each ProductTile must have an HTML attribute of 'data-analytics-activitymap-region-id'
      And the 'data-analytics-activitymap-region-id' value must set to the value received in the props

    # rdar://113587429
    Scenario: Link tracking on Product Tile CTAs on the Select Section
      Given that the section is the Select section
      Then each CTA contained in the ProductTile must have an HTML attribute of 'data-analytics-title'
      And the 'data-analytics-title' value must set to the value received in the props
