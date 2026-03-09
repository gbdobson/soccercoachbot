import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Team: a.model({
    name: a.string().required(),
    ageGroup: a.string().required(),
    gender: a.string().required(),
    seasonWeek: a.integer().required(),
    seasonNotes: a.string(),
  }),

  Message: a.model({
    teamId: a.string().required(),
    role: a.string().required(),      // "coach" | "bot" enforced in UI
    content: a.string().required(),
    timestamp: a.datetime().required(),
  }),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: 'CoachBotData',
});


