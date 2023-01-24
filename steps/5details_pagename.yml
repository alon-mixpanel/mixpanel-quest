id: 5details_pagename
learningObjectives: 
- Reproducing a bug locally 
hints:
- All modern web browsers can show you what your website looks like on mobile, so
  you'll be able to easily debug and develop for mobile. You can use the developer
  tools to see it.
startFlow:
  do:
  - actionId: bot_message
    params:
      person: keen
      messages:
      - text: "Can you tell me the top funnel that users are dropping to?"
        delay: 1300
trigger:
  type: user_message
  params: 
    person: keen
  flowNode:
    if:
      conditions:
      - conditionId: text_match_regex
        params:
          text: "${userMessageText}"
          regex: ".*New detail page.*@"
      then:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Makes sense, they keep rotating in the same place and not going to the cart."
              delay: 1500
        - actionId: finish_step
      else:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Umm, that doesn't look right."
              delay: 1400
