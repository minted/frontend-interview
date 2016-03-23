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

1. [Click here](https://www.nitrous.io/quickstart?repo=https://github.com/minted/frontend-interview.git) to create a new project on Nitrous and name it "[Candidate Name] Frontend".
2. Add the candidate and any other interviewers as collaborators on the project.

### For the candidate

1. Watch for an email from Nitrous inviting you to collaborate on a shared project.
2. Follow the link to your [shared projects](https://www.nitrous.io/app/#/dashboard/shared-projects) (create an account if necessary).
3. Make sure the project appears in your shared projects list. Feel free to start it up, open the IDE, and tinker around a bit. This won't be necessary for your interview, but it could put you at ease getting around if you aren't already a little familiar with Nitrous.

## Day-of interview setup

### For the interviewer

1. Start up the Nitrous project for this candidate and open the IDE.
2. In the console at the bottom of the IDE, start a new tmux session in the frontend-interview project.

    ```bash
    $ cd frontend-interview
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
