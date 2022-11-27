# Setting Up In-App Web Notifications

This is an example [React](https://github.com/facebook/create-react-app) app that uses the [ChatKitty SDK](https://chatkitty.com/docs) to set up in app web notifications.

## Getting Started

ℹ️  You will need a ChatKitty account to retrieve your application's API key from the [Chatkitty dashboard](https://dashboard.chatkitty.com/) that will then be used to obtain your application's data.

Once you set up your ChatKitty project, install all dependencies required for this example using the following command:

`yarn install`

## Change Credentials
You will need to replace certain credentials in the code with your own. 

First, replace the API key in `chatkitty.js` with your own that can be obtained from the home page of your project on the ChatKitty dashboard:

```js
const chatkitty = ChatKitty.getInstance(/*your credentials here*/);
```

Next, in `app.js` replace the user's information with users from your own app:

``` js
  const result = await chatkitty.startSession({ username: /* user's credentials */ });
```

## Running the App
Run the app in the development mode with the following:

`yarn start`

## Testing Push Notifications

To test whether in-app notifications work in your web application, send a message to the user. You should now see a received message toast notification on the top right corner. You can use the [ChatKitty Demo](https://demo.chatkitty.com/) to send messages.
