# Act-W Website

### Setup
**Note:** This project assumes you've installed [Node](https://nodejs.org/en/) via [Homebrew](http://brew.sh/) (`brew install node`).

1. Clone the project's repository onto your local machine
2. In your CLI, navigate to the project's directory (in this case, the `app` folder)
3. Run `npm install -g gulp` to install [Gulp](http://gulpjs.com/) globally
4. Run `npm install -g nodemon` to install [Nodemon](http://nodemon.io/) globally
5. Run `npm install -g browser-sync` to install [BrowserSync](http://www.browsersync.io/) globally
4. Run `npm install` to get all of the project dependencies listed in `package.json`
5. Run `gulp` to start the server and open a new browser tab to your local environment

### Environment
If everything is working properly, you should see Gulp spinning up Nodemon (which then triggers app.js) and BrowserSync. It will open up a new browser tab and start watching (and actively updating you on) any changes made to any files, and injecting those changes right into the browser without having to refresh. When you first run `gulp`, you'll see some "Access URLs" listed. Local is what you'll need most of the time, UI is the URL for looking at BrowserSync options, and their respective External URLs are for any outside devices you are testing.

### Troubleshooting
- Every once and awhile, dependencies don't install or update properly. The solution right now is to delete the project's `node_modules` folder and run `npm install` again (sometimes twice).

