jaggery-restapp
===============

This is a very basic application which demonstrate how easy to write REST apis using Jaggery, pipes and routes.

###Installation###

1. Install [jaggery-pipe](https://github.com/splinter/jaggery-pipe) modules into the Jaggery server
2. Deploy `jaggery-restapp` in the Jaggery server

###Usage###

####Get user####
`curl -v http://localhost:9763/jaggery-restapp/users/1`

####Search users####
`curl -v http://localhost:9763/jaggery-restapp/users?name=ruchira`

####Add user####
`curl -v -X POST http://localhost:9763/jaggery-restapp/users -H "Content-Type: application/json" -d "{ name: 'nadeesha' }"`
