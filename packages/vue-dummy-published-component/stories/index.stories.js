import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import DummyComponent from '../src/DummyComponent.vue';
import Welcome from './Welcome.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />',
    methods: { action: linkTo('DummyComponent') },
}));

storiesOf('DummyComponent', module)
    .add('Usage', () => ({
        components: { DummyComponent },
        template: '<DummyComponent />',
    }));
