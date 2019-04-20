import { storiesOf } from '@storybook/vue';

import DummyComponent from '../src/DummyComponent.vue';

storiesOf('DummyComponent', module)
    .add('Usage', () => ({
        components: { DummyComponent },
        template: '<DummyComponent />',
    }));
