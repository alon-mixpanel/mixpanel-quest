id: 3item_drop_name
learningObjectives: 
- Find the exact culprit in the data and analyze the root cause
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
      - text: "Ok now that we understand that theres a drop and the frequency of the drop,"
        delay: 1300
      - text: "Do you think that theres a reason or a specific item that is causing this?"
        delay: 1400
      - text: "I'm looking at the data and I have a hunch that theres a specific campaign and item that we published that is causing the issue. Can you dig around and see if you can find the specific product item name?"
        delay: 3500
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
          regex: ".*Harry potter DVD.*@"
      then:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Damn that harry! I knew that you can never trust a Gryffindor!"
              delay: 1500
        - actionId: finish_step
      else:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Umm, that doesn't look right. Maybe different item name?"
              delay: 1400
