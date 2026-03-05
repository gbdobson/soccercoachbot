import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Team: a.model({
    name: a.string().required(),
    ageGroup: a.string().required(),
    gender: a.string().required(),
    seasonWeek: a.integer().required(),
    seasonNotes: a.string(),
  }).authorization((allow) => [allow.owner()]),
  
  Message: a.model({
    team: a.belongsTo('Team', 'teamId'),
    role: a.string().required(),
    content: a.string().required(),
    timestamp: a.datetime().required(),
  }).authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: 'CoachBotData',
});


