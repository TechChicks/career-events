# [ChickTech Career Events](https://chicktech-career.firebaseapp.com/)
A website documenting and demo'ing all the cool work, events, and learning coming out of ChickTech Career Events in Portland.
Events in other cities to come as other career events managers in other cities start adding the project.

This website is open source and run by a talented group of developers, designers, and enthusiasts.

### Setup
**Note:** This project assumes you've installed [Node](https://nodejs.org/en/) v5.9.1 and [Postgres](http://www.postgresql.org/).

1. Run `npm install -g gulp` to install [Gulp](http://gulpjs.com/) globally
2. Run `npm install` to get all of the project dependencies listed in `package.json`
3. Change `config.example.json` to `config.json`


### To run hot reloading dev environment
```bash
$ gulp
```

### Environment
If everything is working properly, you should see Gulp spinning up Nodemon (which then triggers app.js) and BrowserSync. It will open up a new browser tab and start watching (and actively updating you on) any changes made to any files, and injecting those changes right into the browser without having to refresh. When you first run `gulp`, you'll see some "Access URLs" listed. Local is what you'll need most of the time, UI is the URL for looking at BrowserSync options, and their respective External URLs are for any outside devices you are testing.

### Troubleshooting
- Every once and awhile, dependencies don't install or update properly. The recommended solution is to delete the project's `node_modules` folder and run `npm install`

### Deployment
Hosting and deployment is managed with [Firebase]((https://firebase.google.com/docs/hosting/deploying)).

First, make sure you've ran gulp to transpile jade files to html files.

Then, you'll need to install Firebase CLI
```bash
$ npm install -g firebase-tools
```

Then, to deploy, simply run the command
```bash
$ firebase deploy
```
