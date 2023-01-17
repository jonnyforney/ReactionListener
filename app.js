const { App, FileInstallationStore } = require('@slack/bolt');

// Initializes your app in socket mode with your app token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true, 
    appToken: process.env.SLACK_APP_TOKEN, 
    installationStore: new FileInstallationStore()
});

// Reaction listener
app.event('reaction_added', async ({ event, client }) => {
    console.log('REACTION ADDED', event)
    try {
        if (event.reaction == "joining_queue") {
            // Call chat.postMessage with the built-in client
            await client.chat.postMessage({
                token: process.env.SLACK_USER_TOKEN,
                channel: event.item.channel,
                // thread_ts: event.item.ts,
                text: "Howdy! Thanks for messaging. I'm a bit busy at the moment but I will respond as soon as possible!"
            });
        } else if (event.reaction == "eyes") {
            console.log(event)
        }
    }
    catch (error) {
        console.error(error);
    }
});


// Home App View
app.event('app_home_opened', async ({ event, client }) => {
    try {
      await client.views.publish({
            user_id: event.user,
            view: {
                type: 'home',
                callback_id: 'home_view',
                blocks: [
                    {
                        "type": "section",
                        "text": {
                        "type": "mrkdwn",
                        "text": "*Welcome to the Reaction Listener* :tada:"
                    }
                    },
                    {
                        "type": "divider"
                    },
                ]
            }
            });
    }
    catch (error) {
      console.error(error);
    }
  });

(async () => {
    try {
        // Start your app
        await app.start();
      
        console.log('⚡️ Bolt app is running!');
    } catch (error) {
        console.error('Unable to start app')
    }
})();