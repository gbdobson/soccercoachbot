import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Team: a.model({
    name: a.string().required(),
    ageGroup: a.enum({ U10: 'U10', U11: 'U11', U12: 'U12', U13: 'U13', U14: 'U14', U18: 'U18' }),
    gender: a.enum({ boys: 'boys', girls: 'girls' }),
    seasonWeek: a.integer().required(),
    seasonNotes: a.string(),
  }).authorization((allow) => [allow.owner()]),
  
  Message: a.model({
    team: a.belongsTo('Team', 'teamId'),
    role: a.enum({ coach: 'coach', bot: 'bot' }),
    content: a.string().required(),
    timestamp: a.datetime().required(),
  })
  .secondaryIndexes((index) => [
    index('role'),
    index('timestamp'),
  ])
  .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: 'CoachBotData',
});

