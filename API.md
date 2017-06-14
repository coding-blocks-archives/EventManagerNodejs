# Event Manager API Docs

This is the API that the backend provides -
Note, the base path for all API routes are `/api/`
All routes mentioned below are suffixes to that.

## Events

### `GET  /events`
Show all events

Response -

```js
[
    Event{} object (as shown in next section),
    Event{} object (as shown in next section),
    Event{} object (as shown in next section),
    ...
]
```
### `GET  /events/{id}`
Get a particular event

Response body -
```js
{
    "id": 1
    "name": "name of event",
    "startTime": <start time in ISO8601 format>,
    "endTime": <end time in ISO8601 format>,
    "hostMessage": "some message from the host to welcome (nullable)",
    "venue": "venue of event",
    "host": User{} object

}
```

### `POST /events/new`
Add a new event

Request body -
```js
{
    "name": "name of event",
    "startTime": <start time in ISO8601 format>,
    "endTime": <end time in ISO8601 format>,
    "hostMessage": "some message from the host to welcome (optional)",
    "venue": "venue of event"

}
```

Response -
```js
{
    "success": true,
    "id": <id of newly created event>
}
```

_**This will work only for authorised users. Either the request should
have a cookie (for session auth), or have the Authorization: Bearer header
The user in whose authority this event is created will be automatically
be added as host**_

### `PUT  /events/{id}`
Update details of an event

### Users