# REQUIREMENTS: https://quip-apple.com/tdyPABC9RObm

Feature: Consider Section SEO

  Rule: Deep-linkable modals

    # rdar://111128708
    @INCOMPLETE
    Scenario: Modal content is indexable by search engines

    # rdar://111128821
    @INCOMPLETE
    Scenario: Modal heading must be an H1

    # NOTE: See detailed specs for this here:
    # https://quip-apple.com/HRHSA6Je0Jao#temp:C:AZX5952dbccb78c4a5fa8ce843d6
    # rdar://111128965
    @INCOMPLETE
    Scenario: Modal open states modify URL and content inside `<head>`

    # NOTE: See detailed specs for this here:
    # https://quip-apple.com/HRHSA6Je0Jao#temp:C:AZXdb39f8bf483e489492eab3841
    # rdar://111129399
    @INCOMPLETE
    Scenario: Closing modals modifies URL and content inside `<head>`

    # NOTE: See detailed specs for this here:
    # https://quip-apple.com/HRHSA6Je0Jao#temp:C:AZXb65b59c918c446fabbf30c92a
    #
    # QUESTION: The requirement to render modal content into the page for deep-linkable
    # modals conflicts with the notion that the links on the page pointing to a URL
    # that will render the modals (even in no-js settings) also enables indexing
    # rdar://111129463
    @INCOMPLETE
    Scenario: No-js modal handling

    # NOTE: See detailed specs for this here:
    # https://quip-apple.com/HRHSA6Je0Jao#temp:C:AZX7793c0b652204e89965d21de1
    #
    # QUESTION: It's unclear how much of this we are responsible for at the component level
    # rdar://111129583
    @INCOMPLETE
    Scenario: Modal content optimized for web vitals
