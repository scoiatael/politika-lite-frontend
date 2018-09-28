import {Decision} from "../Domain/domain";

export const decisions = [
  {
    id: "4cbacb32-0183-4a95-b747-16208486921a",
    description: "Accept bribe?",
    deadline: new Date(),
    choices: [
      {
        id: "5e60612d-6891-42a0-8919-60ee02b2cc4f",
        description: "Yes",
        label: "Yes",
        effects: [
          {
            type: "ChangeResource",
            target: "money",
            value: 1000000,
          },
        ],
      },
      {
        id: "d1fcb764-82ca-4b8f-9d5b-dd0a37434b12",
        description: "No",
        label: "No",
        effects: [
          {
            type: "ChangeResource",
            target: "popularity",
            value: 10,
          },
        ],
      },
    ],
  },
  {
    id: "1e8a9651-29db-4ecb-942a-16229f400659",
    description: "Kill all humans?",
    deadline: new Date(),
    choices: [
      {
        id: "471449fc-6db5-4900-bf2e-7fa87543b91e",
        description: "Yes",
        label: "Yes",
        effects: [
          {
            type: "ChangeResource",
            target: "popularity",
            value: 1,
          },
        ],
      },
      {
        id: "5923e986-f052-4c60-899f-83ec5959d038",
        description: "Why not?",
        label: "Why not?",
        effects: [
          {
            type: "ChangeResource",
            target: "popularity",
            value: 10,
          },
        ],
      },
      {
        id: "0fb48172-bc37-4612-a836-8cf94ec55112",
        description: "YES",
        label: "YES",
        effects: [
          {
            type: "ChangeResource",
            target: "popularity",
            value: 100,
          },
        ],
      },
    ],
  },
];
