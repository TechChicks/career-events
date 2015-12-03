# Act-W Website

### Setup
**Note:** This project assumes you've installed [Node](https://nodejs.org/en/) via [Homebrew](http://brew.sh/) (`brew install node`).

1. Navigate to the project's directory (in this case, the `app` folder)
2. Run `npm install -g gulp` to install [Gulp](http://gulpjs.com/) globally
3. Run `npm install` to get all of the project dependencies listed in `package.json`
4. Run `gulp` to start the server and open a new browser tab to your local environment

### Environment
If everything is working properly, you should see Gulp spinning up Nodemon (which then triggers app.js) and BrowserSync. It will open up a new browser tab and start watching (and actively updating you on) any changes made to any files, and injecting those changes right into the browser without having to refresh. When you first run `gulp`, you'll see some "Access URLs" listed. Local is what you'll need most of the time, UI is the URL for looking at BrowserSync options, and their respective External URLs are for any outside devices you are testing.

### Troubleshooting
- Every once and awhile, dependencies don't install or update properly. The recommended solution is to delete the project's `node_modules` folder and run `npm install`

