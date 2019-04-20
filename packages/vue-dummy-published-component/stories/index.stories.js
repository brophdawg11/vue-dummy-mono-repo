import { storiesOf } from '@storybook/vue';

import DummyComponent from '../src/DummyComponent.vue';
import Welcome from './Welcome.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />',
}));

storiesOf('DummyComponent', module)
    .add('Usage', () => ({
        components: { DummyComponent },
        template: '<DummyComponent />',
    }));
