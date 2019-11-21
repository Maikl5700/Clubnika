import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    title: 'Finish the proposal design and contract for the client ASAP',
    deadline: moment().subtract(2, 'days'),
    done: false
  },
  {
    id: uuid(),
    title: 'Finish the proposal design and contract for the client ASAP',
    deadline: moment(),
    done: false
  },
  {
    id: uuid(),
    title:
      'Upload the files for the client @Adrian Stefan with the fonts, assets exported and all the fancy svgs',
    deadline: moment().add(2, 'days'),
    done: false
  },
  {
    id: uuid(),
    title: 'Re-write the card component with hooks and context',
    deadline: moment().add(5, 'days'),
    done: false
  },
  {
    id: uuid(),
    title: 'Send proposal for the fintech project',
    deadline: moment().add(5, 'days'),
    done: false
  },
  {
    id: uuid(),
    title:
      'Create todo app with react hooks just to get a better understanding of the concept',
    deadline: moment().add(7, 'days'),
    done: true
  }
];
