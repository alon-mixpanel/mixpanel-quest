id: send_track_event
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
      - text: "Now that we know which users are affected, go ahead and fix the bug!"
        delay: 1300
      - text: "Only, you know, don’t—you might break something"
        delay: 1400
      - text: "It’s not that I don’t trust you, but the management definitely doesn’t, so please begin by **reproducing the bug locally** and sending me the **URL of the path** where you saw the issue. Then we’ll try to fix it on your machine, and only if it works, we’ll fix it in production."
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
          regex: ".*localhost.*@"
      then:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Wow, that is indeed a problematic screen! Looks like we forgot about mobile devices when we created this screen."
              delay: 1500
        - actionId: finish_step
      else:
        do:
        - actionId: bot_message
          params:
            person: keen
            messages:
            - text: "Umm, that doesn't look right. Maybe it's a different URL?"
              delay: 1400
