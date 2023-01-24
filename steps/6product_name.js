id: 6product_name
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
      - text: "Thats too general for us, can you narrow down what page is it? I think we are passing the page name on the page loaded event, you can filter by name the events and see."
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
          regex: ".*Harry potter DVD.*@"
      then:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "They keep coming back to harry?! that is odd. Almost feels like they are under a spell.... Just kidding... Expecto Patronum!"
              delay: 1500
        - actionId: finish_step
      else:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Umm, that doesn't look right. Maybe different item?"
              delay: 1400
