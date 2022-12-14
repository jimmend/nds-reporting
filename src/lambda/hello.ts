import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda';

// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
export function handler(event:APIGatewayEvent, context: Context, callback: Callback) {
  console.log('queryStringParameters', event.queryStringParameters)
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' }),
  })
}
