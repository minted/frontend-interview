## Overview

Minted [is hiring](http://www.minted.com/jobs)!

This repo includes live application code that can be used in technical interviews. It aims to grow to include coding playgrounds that are true to real-world web application challenges.

#### Powered by

<a href="https://www.nitrous.io/"><img src="http://i.imgur.com/4Xie4sj.png" alt="Nitrous" width="250"></a>

## Getting started

Install node dependencies, create database, import fixture data,  and start the express app:

```bash
$ npm install
$ npm run schema
$ npm run fixtures
$ npm start
```

Navigate to [http://localhost:3000/playground/](http://localhost:3000/playground/) to try out the different coding samples.

## Developing

To build javascript (and watch), start webpack with:

```bash
$ npm run build
```

## Pre-interview setup

### For the interviewer

1. [Connect your Nitrous account to GitHub](https://www.nitrous.io/app/#/dashboard/account) if you haven't already.
2. Click the button below to create a new project on Nitrous.

    [![Nitrous Quickstart](https://nitrous-image-icons.s3.amazonaws.com/quickstart.svg)](https://www.nitrous.io/quickstart?repo=git@github.com:minted/frontend-interview.git)
    
3. Brew some tea or go for a walk while our slew of convenience npm packages install.
4. Once the Nitrous IDE loads, use the _Collaborate_ menu item to invite the candidate and any other interviewers to be collaborators on the project.

### For the candidate

1. Watch for an email from Nitrous inviting you to collaborate on a shared project.
2. Follow the link to your [shared projects](https://www.nitrous.io/app/#/dashboard/shared-projects) (create an account if necessary).
3. Make sure the project appears in your shared projects list. Feel free to start it up, open the IDE, and tinker around a bit. This won't be necessary for your interview, but it could put you at ease getting around if you aren't already a little familiar with Nitrous.

## Day-of interview setup

### For the interviewer

1. Start up the Nitrous project for this candidate and open the IDE.
2. In the console at the bottom of the IDE, start a new tmux session in the frontend-interview project.

    ```bash
    $ cd ~/code/frontend-interview
    $ tmux
    ```

3. Vertically split the tmux session into two panes: `CTRL+b %`
4. In the right pane and start the node app.

    ```bash
    $ npm start
    ```

5. Switch to the left pane and start the webpack watch process: `CTRL+b <left>`

    ```bash
    $ npm run build
    ```

6. At the top of the IDE, click Preview => Port 3000 to open the running Node app in another tab.

### For the candidate

1. Find the project in your [shared projects](https://www.nitrous.io/app/#/dashboard/shared-projects) on Nitrous.
2. Open the IDE and join the tmux session with the webpack watch process and the node server in your bottom console.

    ```bash
    $ tmux att -t0
    ```

3. At the top of the IDE, click Preview => Port 3000 to open the running Node app in another tab.
