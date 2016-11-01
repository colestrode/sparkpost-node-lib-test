'use strict';

const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST_API_KEY);
const _ = require('lodash');

const params = {};

params.recipients = ['yohfe0dv2nws714i@yahoo.com', '3jwhvvoh72gwrk9@aol.com'];
params.from = '2016-10-31T14:00';
params.to = '2016-11-01T14:29';
params.timezone = 'America/New_York';

client.messageEvents.search(params)
  .then((data) => {
    console.log(data);
  });
