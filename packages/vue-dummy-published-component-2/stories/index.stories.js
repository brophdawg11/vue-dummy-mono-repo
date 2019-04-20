import { storiesOf } from '@storybook/vue';

import DummyComponent2 from '../src/DummyComponent2.vue';

storiesOf('DummyComponent2', module)
    .add('Usage', () => ({
        components: { DummyComponent2 },
        template: '<DummyComponent2 />',
    }));
