import { storiesOf } from '@storybook/vue';

import DummyComponent2 from '../src/DummyComponent2.vue';
import Welcome from './Welcome.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />',
}));

storiesOf('DummyComponent2', module)
    .add('Usage', () => ({
        components: { DummyComponent2 },
        template: '<DummyComponent2 />',
    }));
