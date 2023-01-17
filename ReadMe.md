# Innovation Days - Slack App

### Objective
Learn how to build a basic Slack App / Bot. This demo bot should listen for a certain reaction (specifically in direct messages) and respond to that reaction with a predeteremined message. The issue that this solution is trying to solve is: **people feeling pressure to respond to every message they get right away**. The idea being, having a automation to send a message to someone quickly (via a reaction) letting them know "I acknowledge what you’re saying, but I might not action against it right now" (to quote Mason Fox). This way the person who sends the message knows you have seen it and that you aren't ignoring them and that you will get back to them when you have a moment. All with a simple reaction. 

### Future Improvement Opportunities 
- Moving the App to run in AWS (or some other external server)
- Smooth user setup / integration
	- Currently, it is setup for my user only. Need to figure out how to authenticate people in the bot so anyone "add the bot" to their account.
- Customize bot response message
	- Allowing users to create a custom message to send when they use the :joining_queue: reaction
- Trigger more integrations
	- Example: connect a Todoist account and have the bot add a new todo item to remind you to follow up with the person
- Any other reaction to automation people think of :) 

### Resources
- [Bolt for JavaScript](https://slack.dev/bolt-js/concepts#basic)
- [Slack API](https://api.slack.com/)