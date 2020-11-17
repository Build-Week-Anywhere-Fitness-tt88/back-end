# back-end
[Anywhere Fitness Product Vision Document](https://docs.google.com/document/d/1L1JVphCe2c_sGx6uVDPsbYPItEUYmxhJa3mQ3-lKMv8/edit?usp=sharing)

Server url for request:
https://anywhere-fitness-tt-webpt-88.herokuapp.com/

|Action | Response|
|---|---|
|GET /| Returns the sample data|
|GET /classes  |Returns a list of classes|
|GET /classes/:id  |Returns a specific class|
|POST /classes | Adds a class|
|PUT /classes/:id  |Updates the class|
|DELETE /classes/:id  |Deletes a class|


All of the above class endpoints will require token authentication before they will work.

Class response

|Object key  | Value |
|---|---|
|id | An auto generated number identifying the class|
|name | A required string|
|type | string|
|date | string|
|duration | string|
|intensity | string|
|location | string|
|numberOfRegisteredAttendees | integer|
|maxClassSize | integer|
